'use client';

import { useEffect } from 'react';
import Card from '../card';
import localFont from "next/font/local";
import { Autour_One } from 'next/font/google';

const cascadiaMono = localFont({ src: '../../fonts/CascadiaMono.ttf' });
const cascadiaMonoBold = localFont({ src: '../../fonts/CascadiaMono-Bold.ttf' });

export default function AboutMe() {

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const $cmd = document.querySelector('.cmd');
            setTimeout(() => {
                const firstElement = document.createElement('textarea');
                firstElement.placeholder = 'C:\\Users\\Maxime> ';
                firstElement.autofocus = true;
                if ($cmd) {
                    $cmd.appendChild(firstElement);
                    $cmd.appendChild(document.createElement('br'));
                } else {
                    console.log('Element with class cmd not found !');
                }
                const $textareas = document.querySelectorAll('textarea');
                $textareas.forEach(textarea => {
                    textarea.addEventListener('input', () => {
                        if (!textarea.value.startsWith('C:\\Users\\Maxime>')) {
                            textarea.value = 'C:\\Users\\Maxime>';
                        }
                        textarea.style.height = 'auto';
                        if (textarea.scrollHeight == 48) {
                            textarea.style.height = textarea.scrollHeight - 24 + 'px';
                        }
                        textarea.style.height = textarea.scrollHeight + 'px';
                    });
                });
            }, 3000);

        }
    }, []);

    return (
        <main>
            <div className={`bg-black w-2/3 h-[600px] mx-auto mt-16 rounded-xl ${cascadiaMono.className} overflow-auto`}>
                <div className='text-center'>
                    <h3 className='inline-block typing-effect ml-auto mt-4 text-xl' style={{ animationDelay: '0s', animationDuration: '1s', width: '14ch', animationTimingFunction: 'steps(13)' }}>QUI SUIS-JE ?</h3>
                </div>
                <div className='text-sm cmd leading-6'>
                    <p className='typing-effect' style={{ animationDelay: '1.2s', animationDuration: '3s', width: '97ch', animationTimingFunction: 'steps(97)' }}>{"Pour obtenir des informations, tapez ce que vous recherchez (pour en savoir plus tapez 'help')."}</p>
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