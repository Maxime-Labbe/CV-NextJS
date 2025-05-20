'use client'
import { useEffect } from "react";
import Image from "next/image";
import "./home.css";
import Contact from "./components/Contact";

export default function Home() {

  useEffect(() => {
    document.querySelectorAll('.main > section').forEach((section, idx, sections) => {
    section.addEventListener('wheel', (e) => {
      const event = e as WheelEvent;
      if (event.deltaY > 0 && sections[idx + 1]) {
        sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
      } else if (event.deltaY < 0 && sections[idx - 1]) {
        sections[idx - 1].scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
  document.querySelectorAll('.nav-button').forEach((button) => {
    button.addEventListener('click', (e) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href')?.replace('#', '');
      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          e.preventDefault();
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
      }
    });
  });
  },[]);
  

  return (
    <main className="main">
      <section id="1" className="flex flex-row items-center justify-center">
        <div className="w-1/2 flex flex-col items-start justify-center">
          <h2 className="text-5xl font-extrabold mb-8">Full-Stack & Python Developer</h2>
          <p className="text-lg font-regular">Hi I'm Maxime Labbe, a second year student at ENIGMA-SCHOOL in Lille, France. I am currently looking for an apprenticeship as Full-Stack Developer !</p>
        </div>
        <div className="w-1/3 flex flex-col items-end justify-center">
          <Image src="/facePicture.jpg" alt="Maxime Labbe" width={350} height={350} className="rounded-full"/>
        </div>
      </section>
      <section id="2" className="w-full flex flex-row items-center justify-around">
        <div className="w-1/3 flex flex-col items-start justify-between">
          <h3 className="text-4xl font-bold">Who Am I ?</h3>
          <p className="text-lg mt-4">Hello, my name is Maxime. I am a full stack developer who enjoys building websites and web applications. I enjoy working on both the front end and the back end, creating user-friendly designs. I am mostly working with React, JavaScript, TypeScript and Python.</p>
        </div>
        <div className="w-1/3 flex flex-col items-center justify-center mt-40">
          <h3 className="text-4xl font-bold">What are my Soft Skills ?</h3>
          <ul className="list-soft-skills inline-block mt-4">
            <li>Curious : <span>I am always searching to learn more and more technologies and tools. </span></li>
            <li>Conscientious : <span>I always try to pay attention to details and do the best I can.</span></li>
          </ul>
        </div>
      </section>
      <section id="3" className="flex flex-col items-center justify-center">
        <h3 className="text-3xl font-bold">Since I started developing, I've learned a lot of technologies and tools :</h3>
        <div className="flex flex-row items-start justify-between gap-20 mt-10">
          <figure>
            <figcaption className="font-bold text-2xl underline underline-offset-1">Hard Skills :</figcaption>
            <ul className="tech-list flex flex-col items-start justify-center gap-2 mt-4 list-disc list-inside">
              <li>Database modeling</li>
              <li>Full-Stack</li>
              <li>Algorithm</li>
              <li>Optimization</li>
              <li>Containerization</li>
            </ul>
          </figure>
          <figure>
            <figcaption className="font-bold text-2xl underline underline-offset-1">Technologies :</figcaption>
            <ul className="tech-list flex flex-col items-start justify-center gap-2 mt-4 list-disc list-inside">
              <li>HTML</li>
              <li>CSS / Tailwind</li>
              <li>JavaScript / TypeScript</li>
              <li>React / Next.JS</li>
              <li>Node.JS</li>
              <li>Python</li>
              <li>Java</li>
              <li>C</li>
              <li>PHP</li>
              <li>SQL</li>
            </ul>
          </figure>
          <figure>
            <figcaption className="font-bold text-2xl underline underline-offset-1">Tools & OS :</figcaption>
            <ul className="tech-list flex flex-col items-start justify-center gap-2 mt-4 list-disc list-inside">
              <li>Visual Studio Code</li>
              <li>Postman</li>
              <li>Git / GitHub</li>
              <li>Docker</li>
              <li>Linux</li>
              <li>Windows</li>
            </ul>
          </figure>
        </div>
        
      </section>
      <Contact orientation="left" elem={[
        { logo: <Image src="/logo/github.svg" alt="GitHub" width={30} height={30} />, link: "https://github.com/Maxime-Labbe" },
        { logo: <Image src="/logo/linkedin.svg" alt="LinkedIn" width={30} height={30} />, link: "https://www.linkedin.com/in/maxime-labbe-626012293/" },
        { logo: <Image src="/logo/rootme.svg" alt="RootMe" width={30} height={30} />, link: "https://www.root-me.org/SuperP" },
        { logo: <Image src="/logo/codingame.svg" alt="CodinGame" width={30} height={30} />, link: "https://www.codingame.com/profile/d4ca9edd312a1c1bd8bbb2e73b5682861549375" },
        ]}/>
      <Contact orientation="right" elem="maxime30labbe@gmail.com"/>
    </main>
  );
}