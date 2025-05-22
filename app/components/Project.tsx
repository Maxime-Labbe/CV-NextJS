import Image from "next/image";
import "../project.css"

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
  return (
    <div className="project flex flex-col justify-between rounded-xl p-4 md:p-6 lg:pt-4 md:pt-2">
        <Image className="xl:block hidden w-full h-32" width={200} height={200} src={image} alt={`Image of ${title}`} />
        <h4 className="text-2xl font-semibold mt-2">{title}</h4>
        <p className="text-sm font-regular mt-2">{description}</p>
        <div className="flex flex-row items-center justify-between mt-2">
            <ul className="flex flex row items-start justify-start list-none gap-4">
                {techs.map((tech, index) => (
                    <li className="project-tech text-sm" key={index}>{tech}</li>
                ))}
            </ul>
            <div className="flex flex-row items-center justify-center gap-2">
                {site ? <a href={site} target="_blank"><Image width={20} height={20} src='/logo/link.svg' alt={`Github link to ${title}`}/></a> : ""}
                <a href={github} target="_blank"><Image width={20} height={20} src='/logo/github.svg' alt={`Github link to ${title}`}/></a>
            </div>
        </div>
    </div>
  );
}