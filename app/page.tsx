import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:flex-row content-around w-full">
      <div className="relative sm:top-32 top-[550px] sm:left-10 sm:w-2/6 text-center text-2xl">
        <h2 className="mb-8 text-[#F9F871] font-bold lg:text-5xl sm:text-3xl">Me contacter</h2>
        <ul>
          <a href="https://www.linkedin.com/in/maxime-labbe-626012293/"><li className="pb-4 contact" data-content="Linkedin">
            <Image src="linkedin.svg" alt="" width={50} height={50} key="linkedin.svg" className="lg:block hidden"/>
            <Image src="linkedin.svg" alt="" width={40} height={40} key="linkedin.svg" className="lg:hidden sm:block hidden"/>
            <Image src="linkedin.svg" alt="" width={30} height={30} key="linkedin.svg" className="sm:hidden block"/>
          </li></a>
          <a href="mailto:maxime30labbe@gmail.com"><li className="pb-4 contact" data-content="Email">
          <Image src="mail.svg" alt="" width={50} height={50} key="mail.svg" className="lg:block hidden"/>
            <Image src="mail.svg" alt="" width={40} height={40} key="mail.svg" className="lg:hidden sm:block hidden"/>
            <Image src="mail.svg" alt="" width={30} height={30} key="mail.svg" className="sm:hidden block"/>
            </li></a>
          <a href="tel:+33770107148"><li className="pb-4 contact" data-content="Téléphone">
          <Image src="phone.svg" alt="" width={50} height={50} key="phone.svg" className="lg:block hidden"/>
            <Image src="phone.svg" alt="" width={40} height={40} key="phone.svg" className="lg:hidden sm:block hidden"/>
            <Image src="phone.svg" alt="" width={30} height={30} key="phone.svg" className="sm:hidden block"/>
            </li></a>
          <a href="https://github.com/Maxime-Labbe"><li className="pb-4 contact" data-content="GitHub">
          <Image src="github.svg" alt="" width={50} height={50} key="github.svg" className="lg:block hidden"/>
            <Image src="github.svg" alt="" width={40} height={40} key="github.svg" className="lg:hidden sm:block hidden"/>
            <Image src="github.svg" alt="" width={30} height={30} key="github.svg" className="sm:hidden block"/>
            </li></a>
          <a href="https://www.root-me.org/SuperP"><li className="pb-4 contact" data-content="Root-me">
          <Image src="rootme.svg" alt="" width={50} height={50} key="rootme.svg" className="lg:block hidden rootme"/>
            <Image src="rootme.svg" alt="" width={40} height={40} key="rootme.svg" className="lg:hidden sm:block hidden rootme"/>
            <Image src="rootme.svg" alt="" width={30} height={30} key="rootme.svg" className="sm:hidden block rootme"/>
            </li></a>
        </ul>
      </div>
      <div className="sm:mt-16 mt-[-225px] w-4/6 sm:w-3/5 flex flex-col sm:justify-end h-auto sm:h-72 gap-0 text-center">
        <h1 className="text-3xl font-medium mb-2 sm:text-end sm:mb-0">Hey, je suis <span className="text-[#F9F871] font-semibold text-4xl">Maxime LABBE.</span></h1>
        <h2 className="text-2xl font-medium sm:text-end">Étudiant en informatique à <br />ENIGMA-SCHOOL à Lille.</h2>
      </div>
      <div className="sm:w-2/5 w-full flex justify-center items-end content-end h-72 lg:mb-[-300px] sm:mb-[-200px] mb-12">
        <Image
          src="/facePicture.jpg"
          alt="Photo de Maxime LABBE"
          width={350}
          height={350}
          className="rounded-full lg:block hidden"
        />
        <Image
          src="/facePicture.jpg"
          alt="Photo de Maxime LABBE"
          width={250}
          height={250}
          className="rounded-full lg:hidden sm:block hidden"
        />
        <Image
          src="/facePicture.jpg"
          alt="Photo de Maxime LABBE"
          width={250}
          height={250}
          className="rounded-lg border-2 border-white block sm:hidden"
        />
      </div>
    </main>
  );
}
