import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center sm:flex-row content-around w-full">
      <div className="mt-16 w-4/5 sm:w-3/5 flex flex-col sm:justify-end h-auto sm:h-72 gap-0 text-center">
        <h1 className="text-3xl font-medium mb-2 sm:text-end sm:mb-0">Hey ! I'm <span className="text-[#F9F871] font-semibold text-4xl">Maxime LABBE.</span></h1>
        <h2 className="text-2xl font-medium sm:text-end">Étudiant en informatique à <br />ENIGMA-SCHOOL à Lille.</h2>
      </div>
      <div className="w-2/5 flex justify-start items-end h-72">
        <img src="" alt="" />
      </div>
    </main>
  );
}
