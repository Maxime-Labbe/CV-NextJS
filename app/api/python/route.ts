import { exec } from 'child_process';
import path from 'path';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest): Promise<NextResponse> {
  const scriptPath = path.join(process.cwd(), 'scripts', 'codingameApi.py');
  return new Promise((resolve) => {
    exec(`python3 "${scriptPath}"`, (error, stdout, stderr) => {
      if (error) {
        console.error(`exec error: ${error}`);
        resolve(NextResponse.json({ error: 'Failed to execute Python script', status: 500 }));
        return;
      }
      if (stderr) {
        console.error(`stderr: ${stderr}`);
        resolve(NextResponse.json({ error: 'Python script error', details: stderr, status: 500 }));
        return;
      }
      const resp = stdout.trim().replaceAll('\r','').split('\n');
      resolve(NextResponse.json({ rank: resp[0], totalPlayers: resp[1] }));
    });
  });
}