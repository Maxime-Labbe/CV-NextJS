import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-row content-around w-full">
      <div className="w-3/5 flex flex-col justify-end items-end h-72 gap-0">
        <h1 className="text-3xl font-medium text-center">Hey ! I'm <span className="text-[#F9F871] font-semibold text-4xl">Maxime LABBE.</span></h1>
        <h2 className="text-2xl font-medium text-end">I'm an IT student at <br />ENIGMA-SCHOOL in Lille.</h2>
      </div>
      <div className="w-2/5 flex justify-start items-end h-72">
        <img src="" alt="" />
      </div>
    </main>
  );
}
