'use client';

import { useEffect, useState } from 'react';
import Card from '../card';
import localFont from "next/font/local";
import React from 'react';

const cascadiaMono = localFont({ src: '../../fonts/CascadiaMono.ttf' });

export default function AboutMe() {

    const [textareas, setTextareas] = useState([<textarea key={'firstElem'} autoFocus={true} onInput={handleInputChange} onKeyDown={handleKeyDown} placeholder='C:\Users\Maxime>' style={{ height: '24px' }}></textarea>]);
    const [paragraphs, setParagraphs] = useState([<div key={'firstPara'} style={{ animationDelay: '1.2s', animationDuration: '2s', width: '65ch', animationTimingFunction: 'steps(65)' }} className='typing-effect'><p key={0} >{"Tapez 'help' pour obtenir des informations sur les commandes."}</p></div>]);
    const [showTextareas, setShowTextareas] = useState(false);
    const textToShow: { [key: string]: JSX.Element } = {
        help: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '1950ms', width: '43ch', animationTimingFunction: 'steps(43)' }}>help: affiche les commandes disponibles</p>
                <br />
                <p style={{ animationDelay: '2000ms', animationDuration: '2400ms', width: '57ch', animationTimingFunction: 'steps(57)' }}>[nom]: permet d'afficher l'information associé au nom</p>
                <br />
                <p style={{ animationDelay: '4400ms', animationDuration: '2250ms', width: '53ch', animationTimingFunction: 'steps(53)' }}>ls: permet de lister les informations disponibles</p>
            </>
        ),
        ls: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '900ms', width: '16ch', animationTimingFunction: 'steps(16)' }}>presentation</p>
                <p style={{ animationDelay: '950ms', animationDuration: '500ms', width: '10ch', animationTimingFunction: 'steps(10)' }}>qualites</p>
                <p style={{ animationDelay: '1500ms', animationDuration: '500ms', width: '8ch', animationTimingFunction: 'steps(8)' }}>hobbies</p>
            </>
        ),
        presentation: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '2700ms', width: '80ch', animationTimingFunction: 'steps(80)' }}>Je suis Maxime et je suis un jeune développeur passionné par l'informatique.</p>
                <br />
                <p style={{ animationDelay: '2700ms', animationDuration: '1800ms', width: '51ch', animationTimingFunction: 'steps(51)' }}>Je suis actuellement étudiant à ENIGMA-SCHOOL.</p>
                <br />
                <p style={{ animationDelay: '4500ms', animationDuration: '2500ms', width: '71ch', animationTimingFunction: 'steps(71)' }}>Je suis à la recherche d'un stage en développement pour juin 2025.</p>
            </>
        ),
        qualites: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '2200ms', width: '54ch', animationTimingFunction: 'steps(54)' }}>Je suis quelqu'un de motivé, passionné et curieux.</p>
                <br />
                <p style={{ animationDelay: '2200ms', animationDuration: '2800ms', width: '63ch', animationTimingFunction: 'steps(63)' }}>Je suis toujours organisé et rigoureux dans ce que je fais.</p>
            </>
        ),
        hobbies: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '1900ms', width: '62ch', animationTimingFunction: 'steps(62)' }}>Je suis un grand fan de jeux vidéos et j'adore la musique.</p>
                <br />
                <p style={{ animationDelay: '1900ms', animationDuration: '1400ms', width: '49ch', animationTimingFunction: 'steps(49)' }}>J'aime également la formule 1 et le football.</p>
                <br />
                <p style={{ animationDelay: '3300ms', animationDuration: '1700ms', width: '54ch', animationTimingFunction: 'steps(54)' }}>Mais je suis surtout passionné par l'informatique.</p>
            </>
        ),
        notFound: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '1300ms', width: '25ch', animationTimingFunction: 'steps(25)' }}>Commande non trouvée !</p>
            </>
        )
    };

    const history: string[] = [];
    let indexInHistory: number = 0;

    useEffect(() => {
        setTimeout(() => {
            setShowTextareas(true);
        }, 3250);
    }, []);

    function createTextarea(key: any) {
        return (
            <textarea
                key={key}
                autoFocus={true}
                placeholder='C:\Users\Maxime>'
                onInput={handleInputChange}
                onKeyDown={handleKeyDown}
                style={{ height: '24px' }}
            />
        );
    };

    function createParagraph(key: any, text: JSX.Element) {
        /*const textLength = text.props.children.reduce((acc: any, curr: any) => { --> The goal was to automate the animation but I would have to change the animation from CSS to JS.
            if (curr.type === "p") {
                acc += curr.props.children.length
            }
            return acc;
        }, 0);*/
        let delay;

        if (text.props.children[0] != undefined) {
            delay = parseInt(text.props.children[text.props.children.length - 1].props.style.animationDelay.split('m')[0]) + parseInt(text.props.children[text.props.children.length - 1].props.style.animationDuration.split('m')[0]);
        } else {
            delay = parseInt(text.props.children.props.style.animationDuration.split('m')[0]);
        }
        return (
            <div animation-delay={delay}>
                {text}
            </div>
        );
    };

    function handleInputChange(e: any) {
        const textarea = e.target;
        if (!textarea.value.startsWith('C:\\Users\\Maxime>')) {
            textarea.value = 'C:\\Users\\Maxime>';
        }
        if (textarea.scrollHeight === 48) {
            textarea.style.height = textarea.scrollHeight - 24 + 'px';
        }
        textarea.style.height = textarea.scrollHeight + 'px';
    };

    function handleKeyDown(e: any) {
        const textarea = e.target;
        if (e.key === 'Enter') {
            let delay = 1;
            let newParagraph;
            const command = textarea.value.split('>')[1].trim();
            history.push(command);
            indexInHistory = history.length - 1;
            if (Object.keys(textToShow).includes(command)) {
                newParagraph = createParagraph(paragraphs.length, textToShow[command]);

            } else {
                newParagraph = createParagraph(paragraphs.length, textToShow['notFound']);
            }
            delay = newParagraph.props['animation-delay'];
            setParagraphs(prevParagraph => [...prevParagraph, newParagraph]);
            textarea.disabled = true;
            setTimeout(() => {
                setTextareas(prevTextareas => [...prevTextareas, createTextarea(prevTextareas.length)]);
            }, delay);
        }
        if (e.key === 'Tab') {
            e.preventDefault();
            const wordTab = Object.keys(textToShow).map((key) => {
                if (key.startsWith(textarea.value.split('>')[1].trim())) {
                    textarea.value = 'C:\\Users\\Maxime>' + key;
                };
            });
        };
        if (e.key === 'ArrowUp' && history.length > 0) {
            if (indexInHistory > 0) {
                textarea.value = 'C:\\Users\\Maxime>' + history[indexInHistory];
                indexInHistory--;
            } else if (indexInHistory === 0) {
                textarea.value = 'C:\\Users\\Maxime>' + history[0];
            }
        };
        if (e.key === 'ArrowDown') {
            if (indexInHistory < history.length - 1) {
                indexInHistory++;
                textarea.value = 'C:\\Users\\Maxime>' + history[indexInHistory];
            } else {
                textarea.value = 'C:\\Users\\Maxime>';
            }
        }
    };

    return (
        <main>
            <div className={`bg-black xl:w-2/3 md:w-4/5 w-11/12 lg:h-[600px] md:h-[500px] sm:h-[450px] h-[300px] mx-auto mt-16 rounded-xl ${cascadiaMono.className} overflow-auto sm:overflow-y-auto`}>
                <div className='text-center'>
                    <h2 className='inline-block typing-effect ml-auto mt-4 lg:text-xl md:text-lg sm:text-base text-sm' style={{ animationDelay: '0s', animationDuration: '1s', width: '14ch', animationTimingFunction: 'steps(13)' }}>QUI SUIS-JE ?</h2>
                </div>
                <div className='lg:text-sm sm:text-xs text-2xs cmd leading-6'>
                    {paragraphs.map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {paragraph}
                            {showTextareas && textareas[index]}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className='sm:block hidden bg-[#EEEDFF] mx-auto mt-4 xl:w-28 w-24 h-10 rounded-full lg:absolute xl:right-16 lg:right-0 lg:bottom-12 cursor-pointer' onClick={() => window.scrollTo(0, window.innerHeight - 40)}>
                <svg className='relative left-2 xl:top-2.5 top-3 rotate-180 xl:h-5 h-4' viewBox="0 0 512 512">
                    <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
                </svg>
                <p className='relative xl:left-8 left-7 xl:top-[-10px] top-[-4px] text-black xl:text-sm text-xs font-bold'>Plus d'infos</p>
            </div>
            <div className='cardsdiv'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>Mes compétences techniques :</h3>
                <div className='flex flex-row flex-wrap justify-around wrap'>
                    <Card title="HTML/CSS/JS" description="Je suis bon au développement web avec HTML/CSS/JS. J'ai déjà eu l'occasion de faire quelques sites pour des projets personnels." />
                    <Card title="Python" description="J'ai une connaissance avancée de python. J'ai également déjà utilisé quelques libraires comme Flask," />
                    <Card title="NextJS" description="Je suis toujours en train d'apprendre NextJS." />
                    <Card title="C" description="J'ai déjà fait du développement en C. Je connais les bases du langage et j'ai également quelques connaissances plus avancées. J'ai déjà également utilisé SDL2." />
                    <Card title="Java" description="J'ai pu faire quelques programmes en java, je connais les bases du langage." />
                </div>
            </div>
            <div className='cardsdiv'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>Mes expériences :</h3>
                <div className='flex flex-row flex-wrap justify-around'>
                    <Card title="Les restos du cœur" description="Stage de 2 mois prévu pour les mois de juin-juillet 2024." />
                    <Card title="Mes projets" description="J'ai fait beaucoup de projets par moi-même dans différents langages comme HTML/JS/CSS, NextJS, C ou Java. Ils sont disponibles sur mon Github." />
                </div>
            </div>
            <div className='cardsdiv mb-12'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>Mes formations :</h3>
                <div className='flex flex-row flex-wrap justify-around'>
                    <Card title="Lycée Sacré-Coeur" description="J'ai obtenu mon bac mention très bien avec les spécialités Mathématiques et NSI et option Maths expertes au lycée Sacré-Coeur de Tourcoing durant l'année 22/23." />
                    <Card title="Enigma-School" description="Actuellement en apprentissage pour obtenic un Bac+3 : Administrateur des systèmes d'informations." />
                </div>
            </div>
        </main>
    )
};