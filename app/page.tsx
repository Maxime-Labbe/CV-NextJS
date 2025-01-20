import Image from "next/image";
import "./home.css";

export default function Home() {
  return (
    <main className="main">
      <div className="contact-container">
        <h2 className="contact-title">Me contacter</h2>
        <ul className="contact-list">
          <a href="https://www.linkedin.com/in/maxime-labbe-626012293/">
            <li className="contact-item" data-content="Linkedin">
              <Image src="logo/linkedin.svg" alt="" width={30} height={30} className="contact-icon" />
            </li>
          </a>
          <a href="mailto:maxime30labbe@gmail.com">
            <li className="contact-item" data-content="Email">
              <Image src="logo/mail.svg" alt="" width={30} height={30} className="contact-icon" />
            </li>
          </a>
          <a href="tel:+33770107148">
            <li className="contact-item" data-content="Téléphone">
              <Image src="logo/phone.svg" alt="" width={30} height={30} className="contact-icon" />
            </li>
          </a>
          <a href="https://github.com/Maxime-Labbe">
            <li className="contact-item" data-content="GitHub">
              <Image src="logo/github.svg" alt="" width={30} height={30} className="contact-icon" />
            </li>
          </a>
          <a href="https://www.root-me.org/SuperP">
            <li className="contact-item" data-content="Root-me">
              <Image src="logo/rootme.svg" alt="" width={30} height={30} className="contact-icon" />
            </li>
          </a>
        </ul>
      </div>
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
    </main>
  );
}