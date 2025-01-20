import { promises as fs } from "fs"
import Project from "../components/Project"

export default async function Projects() {
        const file = await fs.readFile(process.cwd() + '/app/data/projects.json', 'utf-8');
        const projects = JSON.parse(file);

    return (
        <section className="projects-container">
            {projects.map((project : any, index : number) => <Project key={index} project={project} />)}
        </section>
    )
};