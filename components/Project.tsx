import { useContext, useState } from "react";
import Image from "next/image";
import { AppContext, AppContextType } from "../app/Context";
import "../project.css"
import GithubIcon from "@/public/logo/github.svg";
import LinkIcon from "@/public/logo/link.svg";

type ProjectProps = {
    title: string;
    description: string;
    techs: string[];
    image: string;
    site ?: string;
    github: string;
}

export default function Project(project: ProjectProps) {
    const { title, description, techs, image, site, github } = project;
    const [ active, setActive ] = useState(false);
    const { width } = useContext<AppContextType>(AppContext);

    const isAnyActive = () => {
        const projects = document.querySelectorAll('.project');
        return Array.from(projects).some((project) => project.classList.contains("active"));
    }
    
    const addActiveClass = (e: React.MouseEvent<HTMLSpanElement>) => {
        const project = (e.target as HTMLElement).closest('.project');
        if (project) {
            if (!active && !isAnyActive()) {
                project.classList.add("active");
                setActive(!active);
            }
            else if (active){
                project.classList.remove("active");
                setActive(!active);
            }
        }
    }

  return (
    <div className="project flex flex-col justify-between rounded-xl p-4 md:p-6 lg:pt-4 md:pt-2">
        <Image className="xl:block hidden w-full h-32" width={200} height={200} src={image} alt={`Image of ${title}`} />
        <h4 className="text-2xl font-semibold mt-2">{title}</h4>
        <p className="text-sm font-regular mt-2">{description}{width >= 1280 ?<span onClick={e => addActiveClass(e)}><br/>{active ? "View Less.." : "View More..."}</span> : ""}</p>
        <div className="flex flex-row items-center justify-between mt-2">
            <ul className="flex flex row items-start justify-start list-none gap-4">
                {techs.map((tech, index) => (
                    <li className="project-tech text-sm" key={index}>{tech}</li>
                ))}
            </ul>
            <div className="flex flex-row items-center justify-center gap-2">
                {site ? <a href={site} target="_blank"><LinkIcon className={`svg-icon ${active ? "w-10 h-10" : "w-5 h-5"}`}/></a> : ""}
                <a href={github} target="_blank"><GithubIcon className={`svg-icon ${active ? "w-10 h-10" : "w-5 h-5"}`}/></a>
            </div>
        </div>
    </div>
  );
}