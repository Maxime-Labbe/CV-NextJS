import Image from "next/image";

export default function Menu() {
    return (
        <div className="menu">
            <a href="/"><h1 className="absolute top-10 left-8 text-4xl font-extrabold text-[#F9F871]">Labbe Maxime</h1></a>
            <div className="w-1/3 mx-auto h-20 grid grid-cols-3 gap-4 content-end justify-center">
                <a href="/" className="">Accueil</a>
                <a href="/aboutme" className="">Qui suis-je ?</a>
                <a href="/contact" className="">Contact</a>
            </div>
        </div>

    );
}
