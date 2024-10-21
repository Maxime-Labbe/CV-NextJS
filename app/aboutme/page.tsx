'use client';

import { useEffect } from 'react';
import Card from '../card';
import localFont from "next/font/local";
import React from 'react';

export default function AboutMe() {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio === 1) {
                if (entry.target.classList.contains('left')){
                    entry.target.classList.add('slideRight')
                } else {
                    entry.target.classList.add('slideLeft')
                }
              observer.unobserve(entry.target);
            }
          });
        }, {
          threshold: 1.0
        });
    
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
          observer.observe(card);
        });
    
        return () => {
          cards.forEach(card => {
            observer.unobserve(card);
          });
        };
      }, []);

    return (
        <div className='mt-24 mb-32'>
            {[<Card title='Compétences' place='right' key="Compétences" description={`Je possède de nombreuses connaissances techniques :
                                                                                      Script : Python, C
                                                                                      Front-end : HTML, CSS, JS, Next-JS, PHP 
                                                                                      Back-end : Node-JS, PHP 
                                                                                      Divers : SQL / MySQL, Git, GitHhub, CCNA 1`}/>,
            <Card title='Expériences' place='left' key="Expériences" description={`Les restos du coeur : Création d'une application, type CRM, pour gérer la prospection des dons dans l'antenne départementale du nord. Utilisation du framework NextJS en liaison avec une base de données MySQL.
                                                                                  Mes projets : J'ai pu apprendre de nombreux choses en faisant de nombreux projets qui sont disponibles sur mon GitHub.`}/>,                                                                          
            <Card title='Qualités' place='right' key="Qualités" description="Étant très curieux, je suis toujours motivé pour apprendre de nouveaux langages et de me lancer dans des projets, poussé également par ma passion. Ma rigueur me pousse à m'appliquer dans toutes les tâches que j'entreprends et à également m'organiser." />,
            <Card title='Hobbies' place='left' key="Hobbies" description="Je suis un passionné de jeux vidéo et de cinéma, qui me permettent de vivre des expériences captivantes. J'apprécie aussi des sports comme la Formule 1 et le football, pour leur dynamisme et leur intensité. Cependant, ma passion principale reste l'informatique, un domaine où j'aime relever des défis et découvrir sans cesse de nouvelles technologies." />].map((card,index) => card)}
        </div>
    )
}