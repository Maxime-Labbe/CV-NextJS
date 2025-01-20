import { promises as fs } from "fs"
import Card from '../components/Card';
import '../about.css';

export default async function AboutMe() {
  const file = await fs.readFile(process.cwd() + '/app/data/cards.json', 'utf-8');
  const cards =  JSON.parse(file);
    
  return (
    <div className='mt-24 mb-32'>
      {cards.map((card : any, index : number) => <Card key={index} {...card} />)}
    </div>
  )
}
