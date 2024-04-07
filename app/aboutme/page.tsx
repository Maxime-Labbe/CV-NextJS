'use client';

import { JSXElementConstructor, Key, useEffect, useState } from 'react';
import Card from '../card';
import localFont from "next/font/local";
import { notFound } from 'next/navigation';
import { text } from 'stream/consumers';
import React from 'react';

const cascadiaMono = localFont({ src: '../../fonts/CascadiaMono.ttf' });
const cascadiaMonoBold = localFont({ src: '../../fonts/CascadiaMono-Bold.ttf' });

export default function AboutMe() {

    const [textareas, setTextareas] = useState([<textarea key={0} autoFocus={true} onInput={handleInputChange} onKeyDown={handleKeyDown} placeholder='C:\Users\Maxime>' style={{ height: '24px' }}></textarea>]);
    const [paragraphs, setParagraphs] = useState([<div style={{ animationDelay: '1.2s', animationDuration: '3s', width: '100ch', animationTimingFunction: 'steps(100)' }} className='typing-effect'><p key={0} >{"Pour obtenir des informations, tapez ce que vous recherchez (pour en savoir plus tapez 'help')."}</p></div>]);
    const [showTextareas, setShowTextareas] = useState(false);
    const textToShow: { [key: string]: JSX.Element } = {
        help: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '1950ms', width: '42ch', animationTimingFunction: 'steps(42)' }}>help: affiche les commandes disponibles</p>
                <br />
                <p style={{ animationDelay: '2000ms', animationDuration: '2400ms', width: '56ch', animationTimingFunction: 'steps(56)' }}>[nom]: permet d'afficher l'information associé au nom</p>
                <br />
                <p style={{ animationDelay: '4400ms', animationDuration: '2250ms', width: '52ch', animationTimingFunction: 'steps(52)' }}>ls: permet de lister les informations disponibles</p>
            </>
        ),
        ls: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '900ms', width: '15ch', animationTimingFunction: 'steps(15)' }}>presentation</p>
                <p style={{ animationDelay: '900ms', animationDuration: '500ms', width: '10ch', animationTimingFunction: 'steps(11)' }}>qualites</p>
                <p style={{ animationDelay: '1400ms', animationDuration: '500ms', width: '10ch', animationTimingFunction: 'steps(10)' }}>hobbies</p>
            </>
        ),
        presentation: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '3000ms', width: '93ch', animationTimingFunction: 'steps(95)' }}>Je suis Maxime, j'ai 18 ans et je suis un développeur junior passionné par l'informatique.</p>
                <br />
                <p style={{ animationDelay: '3000ms', animationDuration: '1800ms', width: '50ch', animationTimingFunction: 'steps(50)' }}>Je suis actuellement étudiant à ENIGMA-SCHOOL.</p>
                <br />
                <p style={{ animationDelay: '4800ms', animationDuration: '2500ms', width: '70ch', animationTimingFunction: 'steps(70)' }}>Je suis à la recherche d'un stage en développement pour juin 2024.</p>
            </>
        ),
        qualites: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '2200ms', width: '53ch', animationTimingFunction: 'steps(53)' }}>Je suis quelqu'un de motivé, passionné et curieux.</p>
                <br />
                <p style={{ animationDelay: '2200ms', animationDuration: '2800ms', width: '62ch', animationTimingFunction: 'steps(62)' }}>Je suis toujours organisé et rigoureux dans ce que je fais.</p>
            </>
        ),
        hobbies: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '1900ms', width: '61ch', animationTimingFunction: 'steps(61)' }}>Je suis un grand fan de jeux vidéos et j'adore la musique.</p>
                <br />
                <p style={{ animationDelay: '1900ms', animationDuration: '1400ms', width: '48ch', animationTimingFunction: 'steps(48)' }}>J'aime également la formule 1 et le football.</p>
                <br />
                <p style={{ animationDelay: '3300ms', animationDuration: '1700ms', width: '53ch', animationTimingFunction: 'steps(53)' }}>Mais je suis surtout passionné par l'informatique.</p>
            </>
        ),
        notFound: (
            <>
                <p style={{ animationDelay: '0ms', animationDuration: '1300ms', width: '25ch', animationTimingFunction: 'steps(25)' }}>Commande non trouvée !</p>
            </>
        )
    };

    useEffect(() => {
        setTimeout(() => {
            setShowTextareas(true);
        }, 4250);
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
    };

    return (
        <main>
            <div className={`bg-black w-2/3 h-[600px] mx-auto mt-16 rounded-xl ${cascadiaMono.className} overflow-auto`}>
                <div className='text-center'>
                    <h3 className='inline-block typing-effect ml-auto mt-4 text-xl' style={{ animationDelay: '0s', animationDuration: '1s', width: '14ch', animationTimingFunction: 'steps(13)' }}>QUI SUIS-JE ?</h3>
                </div>
                <div className='text-sm cmd leading-6'>
                    {paragraphs.map((paragraph, index) => (
                        <React.Fragment key={index}>
                            {paragraph}
                            {showTextareas && textareas[index]}
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className='test'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>Mes compétences techniques :</h3>
                <div className='flex flex-row flex-wrap justify-around wrap'>
                    <Card title="HTML/CSS/JS" description="Je suis bon au développement web avec HTML/CSS/JS. J'ai déjà eu l'occasion de faire quelques sites pour des projets personnels." />
                    <Card title="NextJS" description="Je suis toujours en train d'apprendre NextJS." />
                    <Card title="C" description="J'ai déjà fait du développement en C. Je connais les bases du langage et j'ai également quelques connaissances plus avancées. J'ai déjà également utilisé SDL2." />
                    <Card title="Java" description="J'ai pu faire quelques programmes en java, je connais les bases du langage." />
                    <Card title="Python" description="J'ai une connaissance avancée de python. J'ai également déjà utilisé quelques libraires comme Flask," />
                </div>
            </div>
            <div className='test mb-12'>
                <h3 className='text-center mt-12 text-3xl font-medium underline underline-offset-8 decoration-2 decoration-[#F9F871]'>Mes expériences :</h3>
                <div className='flex flex-row flex-wrap justify-around'>
                    <Card title="Les restos du cœur" description="J'ai eu l'occasion de faire un stage de 2 mois dans le but de développer un site en interne." />
                    <Card title="Mes projets" description="J'ai fait beaucoup de projets par moi-même dans différents langages comme HTML/JS/CSS, NextJS, C or Java. Ils sont disponibles sur mon Github." />
                </div>
            </div>
        </main>
    )
};