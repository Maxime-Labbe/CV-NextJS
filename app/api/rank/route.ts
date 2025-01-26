import { exec } from 'child_process';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

function getPythonCommand(): Promise<string> {
  return new Promise((resolve) => {
    exec('python --version', (error) => {
      if (error) {
        exec('python3 --version', (error) => {
          if (error) {
            resolve(''); // Neither python nor python3 is available
          } else {
            resolve('python3');
          }
        });
      } else {
        resolve('python');
      }
    });
  });
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  const scriptPath = path.join(process.cwd(), 'scripts', 'codingameApi.py');
  const pythonCommand = await getPythonCommand();

  if (!pythonCommand) {
    return NextResponse.json({ error: 'Server can\'t execute Python script', status: 500 });
  }
  
  return new Promise((resolve) => {
    exec(`${pythonCommand}  "${scriptPath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        const response = NextResponse.json({ error: 'Failed to execute Python script', status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        resolve(response);
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        const response = NextResponse.json({ error: 'Python script error', details: stderr, status: 500 });
        response.headers.set('Cache-Control', 'no-store');
        resolve(response);
        return;
      }
      const resp = stdout.trim().replaceAll('\r','').split('\n');
      const response = NextResponse.json({ rank: resp[0], totalPlayers: resp[1] });
      response.headers.set('Cache-Control', 'no-store');
      resolve(response);
    });
  });
}