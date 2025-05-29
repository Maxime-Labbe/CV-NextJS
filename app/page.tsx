'use client'
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import "./home.css";
import Contact from "./components/Contact";
import Project from "./components/Project";
import { AppContext, AppContextType } from "./Context";
import GithubIcon from "../public/logo/github.svg";
import LinkedinIcon from "../public/logo/linkedin.svg";
import RootmeIcon from "../public/logo/rootme.svg";
import CodingameIcon from "../public/logo/codingame.svg";


export default function Home() {
  const [currentSection,setCurrentSection] = useState(0);
  const { width } = useContext<AppContextType>(AppContext); 

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const targetSection = document.getElementById(hash.replace('#', ''));
        if (targetSection) {
          setCurrentSection(parseInt(hash.replace('#', '')) - 1);
          targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    }
  }, [])

  useEffect(() => {
    if (width >= 1024) {
      document.querySelectorAll('.main > section').forEach((section, idx, sections) => {
        section.addEventListener('wheel', (e) => {
          const event = e as WheelEvent;
          if (event.deltaY > 0 && sections[idx + 1]) {
            sections[idx + 1].scrollIntoView({ behavior: 'smooth' });
            setCurrentSection(idx + 1);
          } else if (event.deltaY < 0 && sections[idx - 1]) {
            sections[idx - 1].scrollIntoView({ behavior: 'smooth' });
            setCurrentSection(idx - 1);
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
              setCurrentSection(parseInt(targetId) - 1);
              e.preventDefault();
              targetSection.scrollIntoView({ behavior: 'smooth' });
            }
          }
        });
      });
    }
  },[width]);

  useEffect(() => {
    const navButtons = document.querySelectorAll('.nav-button');
    navButtons.forEach((button, index) => {
      if (index === currentSection) {
        button.classList.add('active');
      } else {
        button.classList.remove('active');
      }
    });
  },[currentSection])
  

  return (
    <main className="main">
      <section id="1" className="flex sm:flex-row flex-col items-center justify-center">
        <div className="w-[90%] flex flex-col items-start justify-center text-center">
          <h2 className="md:text-5xl text-3xl font-extrabold">Full-Stack & Python Developer</h2>
          <p className="md:text-lg font-regular md:mt-8 mt-8">Hi I'm Maxime Labbe, a second year student at ENIGMA-SCHOOL in Lille, France. I am currently looking for an apprenticeship as Full-Stack Developer !</p>
        </div>
        <div className="w-full flex flex-col items-center justify-center mt-8 sm:mt-0">
          <Image src="/facePicture.jpg" alt="Maxime Labbe" width={350} height={350} className="lg:block hidden rounded-full"/>
          <Image src="/facePicture.jpg" alt="Maxime Labbe" width={200} height={200} className="sm:block lg:hidden hidden rounded-full"/>
          <Image src="/facePicture.jpg" alt="Maxime Labbe" width={200} height={200} className="sm:hidden rounded-xl"/>
        </div>
      </section>
      <section id="2" className="presentation w-full flex flex-col sm:flex-row sm:content-center md:content-normal sm:flex-wrap lg:items-center items-center sm:items-start justify-around md:gap-10 lg:gap-0 lg:mt-auto mt-[-60px]">
        <div className="lg:mt-[-160px]">
          <h3>Who Am I ?</h3>
          <p>Hello, my name is Maxime. I am a full stack developer who enjoys building websites and web applications. I enjoy working on both the front end and the back end, creating user-friendly designs. I am mostly working with React, JavaScript, TypeScript and Python.</p>
        </div>
        <div className="lg:mt-[400px]">
          <h3>What do I like to do ?</h3>
          <p>Besides coding, I enjoy watching football especially Lille OSC, I also enjoy playing video games like League of Legends and I love watching <a href="https://letterboxd.com/Maxime_Labbe/">movies.</a></p>
        </div>
        <div className="lg:mt-0">
          <h3>My Soft Skills :</h3>
          <ul className="list-soft-skills inline-block mt-4">
            <li>Curious : <span>I am always searching to learn more and more technologies and tools. </span></li>
            <li>Conscientious : <span>I always try to pay attention to details and do the best I can.</span></li>
          </ul>
        </div>
      </section>
      <section id="3" className="techs flex flex-col items-center justify-center lg:w-full w-[90%] mx-auto lg:mt-auto md:mt-20 mt-40">
        <h3 className="xl:text-3xl md:text-2xl text-2xl font-bold text-center">Since I started developing, I've learned a lot of technologies and tools :</h3>
        <div className="flex flex-col sm:flex-row flex-wrap md:flex-nowrap items-start justify-between lg:gap-20 md:gap-10 sm:gap-0 gap-10 mt-10">
          <figure>
            <figcaption>Hard Skills :</figcaption>
            <ul className="tech-list">
              <li>Database modeling</li>
              <li>Full-Stack</li>
              <li>Algorithm</li>
              <li>Optimization</li>
              <li>Containerization</li>
            </ul>
          </figure>
          <figure>
            <figcaption>Technologies :</figcaption>
            <ul className="tech-list">
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
          <figure className="sm:mt-[-140px] md:mt-0">
            <figcaption>Tools & OS :</figcaption>
            <ul className="tech-list">
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
      <section id="4" className="project flex flex-col items-center justify-center xl:mt-0 mt-36">
        <h3 className="text-4xl font-bold">My Projects</h3>
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-center justify-around xl:gap-10 lg:gap-8 gap-6 xl:mt-10 lg:mt-8 mt-6">
          <Project title="Wordle" description="Wordle is a game where you have to guess a word in less than 6 moves." techs={['Python','Django']} image="/wordle.png" github="https://github.com/Maxime-Labbe/Django-Wordle" />
          <Project title="Portfolio" description="A portfolio that I've created for a friend, only front-end." techs={['Next.JS']} image="/portfolio.png" site="https://portfolio-simon-berchtold.vercel.app/" github="https://github.com/Maxime-Labbe/NextJS-Portfolio-Simon" />
          <Project title="CRM" description="A project I have made for an intership, that could be describe as a CRM." techs={['Next.JS','SQL','Linux']} image="/CRM.png" github="https://github.com/Sterbenfr/CRM" />
          <Project title="Sudoku Solver" description="A personal challenge to solve one of the puzzle I love the most." techs={['Python']} image="/sudokusolver.png" github="https://github.com/Maxime-Labbe/Python-SudokuSolver" />
        </div>
        <p className="mt-12 font-semibold text-2xl">More projects on my <a href="https://github.com/Maxime-Labbe">github</a> !</p>
      </section>
      <section id="5" className="contact flex flex-col items-center justify-center mt-[-60px]">
        <h3 className="lg:text-5xl sm:text-3xl text-4xl font-bold">Get in touch</h3>
        <div className="w-full flex flex-col sm:flex-row items-center justify-center sm:gap-10 gap-6 mt-10">
          <a href="mailto:maxime30labbe@gmail.com"><button className="contact-button">Send a mail</button></a>
          <a href="https://www.linkedin.com/in/maxime-labbe-626012293/" target="_blank"><button className="contact-button">Connect on Linkedin</button></a>
          <a href="tel:+33770107148"><button className="contact-button">Make a call</button></a>
        </div>  
      </section>
      <Contact orientation="left" elem={[
        { logo: <GithubIcon className="svg-icon w-8 h-8"/>, link: "https://github.com/Maxime-Labbe" },
        { logo: <LinkedinIcon className="svg-icon w-8 h-8"/>, link: "https://www.linkedin.com/in/maxime-labbe-626012293/" },
        { logo: <RootmeIcon className="svg-icon w-8 h-8"/>, link: "https://www.root-me.org/SuperP" },
        { logo: <CodingameIcon className="svg-icon w-8 h-8"/>, link: "https://www.codingame.com/profile/d4ca9edd312a1c1bd8bbb2e73b5682861549375" },
        ]}/>
      <Contact orientation="right" elem="maxime30labbe@gmail.com"/>
    </main>
  );
}