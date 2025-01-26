'use client'
import { useEffect, useReducer } from "react";
import Image from "next/image";
import { 
  RANK_FETCH_INIT,
  RANK_FETCH_SUCCESS,
  RANK_FETCH_FAILURE,
  rankReducer,
  initialState } from "./rankReducer";
import "./home.css";

export default function Home() {
  const [rank, dispatch] = useReducer(rankReducer, initialState);
  const fetchPython = async () => {
    try {
      const response = await fetch('/api/rank');
      if (!response.ok) {
        throw new Error('Failed to fetch Python script output');
      }
      const data = await response.json();
      dispatch({ type: RANK_FETCH_SUCCESS, payload: data });
    } catch (error) {
      dispatch({ type: RANK_FETCH_FAILURE });
      console.error('Error fetching Python script output:', error);
    }
  };

  useEffect(() => {
    dispatch({ type: RANK_FETCH_INIT });
    fetchPython();
  }, []);

  return (
    <main className="main">
      <div className="informations-container">
        <div className="contact-container">
          <h2 className="contact-title">Me contacter</h2>
          <ul className="contact-list">
            <a href="https://www.linkedin.com/in/maxime-labbe-626012293/" target="_blank">
              <li className="contact-item" data-content="Linkedin">
                <Image src="logo/linkedin.svg" alt="" width={30} height={30} className="contact-icon" />
              </li>
            </a>
            <a href="mailto:maxime30labbe@gmail.com" target="_blank">
              <li className="contact-item" data-content="Email">
                <Image src="logo/mail.svg" alt="" width={30} height={30} className="contact-icon" />
              </li>
            </a>
            <a href="tel:+33770107148" target="_blank">
              <li className="contact-item" data-content="Téléphone">
                <Image src="logo/phone.svg" alt="" width={30} height={30} className="contact-icon" />
              </li>
            </a>
            <a href="https://github.com/Maxime-Labbe" target="_blank">
              <li className="contact-item" data-content="GitHub">
                <Image src="logo/github.svg" alt="" width={30} height={30} className="contact-icon" />
              </li>
            </a>
          </ul>
        </div>
        <div className="contact-container">
          <h2 className="contact-title">Sites d'entrainements</h2>
          <ul className="contact-list">
            <a href="https://www.root-me.org/SuperP" target="_blank">
              <li className="contact-item" data-content="Root-me">
                <Image src="logo/rootme.svg" alt="" width={30} height={30} className="contact-icon" />
              </li>
            </a>
            <a href="https://www.codingame.com/profile/d4ca9edd312a1c1bd8bbb2e73b5682861549375" target="_blank">
              <li className="contact-item" data-content="Codingame">
                <Image src="logo/codingame.svg" alt="" width={30} height={30} className="contact-icon" />
              </li>
            </a>
            {
              rank.isError ? <p className="rank">Erreur lors de la récupération du rang</p> :
            
              <p className="rank">Mon rang "Clash of Code":  
                <span className="rank">
                  {rank.isLoading ? ' ...' : ' ' + rank.data.rank}
                </span> / 
                <span className="total-players">
                  {rank.isLoading ? ' ...' : ' ' + rank.data.totalPlayers}
                </span>
              </p>  
            }   
          </ul>
        </div>
      </div>
      <div className="presentation-container">
        <div className="intro-container">
          <h1 className="intro-title">
            Hey, je suis <span className="intro-highlight">Maxime LABBE.</span>
          </h1>
          <h2 className="intro-subtitle">
            Étudiant en informatique à <br />
            ENIGMA-SCHOOL à Lille.
          </h2>
        </div>
        <div className="image-container">
          <Image
            src="/facePicture.jpg"
            alt="Photo de Maxime LABBE"
            width={250}
            height={250}
            className="image"
          />
        </div>
      </div>
    </main>
  );
}