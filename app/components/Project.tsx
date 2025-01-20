'use client';
import { useEffect, useState, useRef } from 'react';
import Link from 'next/link'
import '../project.css'


interface ProjectProps {
    text_color: string;
    title: string;
    description: string;
    siteLink?: string;
    gitLink?: string;
    imageSrc: string;
    pictures?: string[];
}

export default function Project({ project }: {project : ProjectProps} ) {
    const { text_color, title, description, siteLink, gitLink, imageSrc, pictures } = project;
    const [imageHeight, setImageHeight] = useState<number | null>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    useEffect(() => {
        const handleImageLoad = () => {
            if (imageRef.current) {
                setImageHeight(imageRef.current.clientHeight);
            }
        };
        if (imageRef.current) {
            imageRef.current.addEventListener('load', handleImageLoad);
            setImageHeight(imageRef.current.clientHeight);
        }
        return () => {
            if (imageRef.current) {
                imageRef.current.removeEventListener('load', handleImageLoad);
            }
        };
    }, [imageSrc]);

    return (
         <div className="project" style={{ height: imageHeight ? `${imageHeight}px` : 'auto' }}>
            <img ref={imageRef} src={imageSrc} alt="" className="project-picture main-picture"/>
            <div className={`project-content ${text_color}`}>
                <h2 className="project-title">
                    {siteLink ? <Link href={siteLink} target='_blank'>{title}</Link> : title}
                </h2>
                <p className="project-description">
                    {description}
                    <br />
                    {siteLink && <span>Lien du site : <Link href={siteLink} target='_blank'>ici</Link> </span>}
                    {gitLink && <span>Lien du github : <Link href={gitLink} target='_blank'>ici</Link></span>}
                </p>
            </div>
            <div className="pictures-container">
                {pictures ? pictures.map((picture,index) => <img key={index} src={picture} alt="" className="project-picture" /*style={{top : `${(2+index)*100}%` }}*//>) : null}
            </div>
        </div> 
    )
};