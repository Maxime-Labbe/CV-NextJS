import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:flex-row content-around w-full">
      <div className="mt-16 w-4/5 sm:w-3/5 flex flex-col sm:justify-end h-auto sm:h-72 gap-0 text-center">
        <h1 className="text-3xl font-medium mb-2 sm:text-end sm:mb-0">Hey, je suis <span className="text-[#F9F871] font-semibold text-4xl">Maxime LABBE.</span></h1>
        <h2 className="text-2xl font-medium sm:text-end">Étudiant en informatique à <br />ENIGMA-SCHOOL à Lille.</h2>
      </div>
      <div className="sm:w-2/5 w-full flex justify-center items-end content-end h-72 lg:mb-[-300px] sm:mb-[-200px]">
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
