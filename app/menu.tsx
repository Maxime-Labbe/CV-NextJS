import Image from "next/image";

export default function Menu() {
    return (
        <div className="menu w-full sm:h-20 h-14">
            <a href="/"><h1 className="sm:absolute sm:top-2 sm:left-8 text-center mt-8 lg:text-4xl sm:text-3xl text-2xl font-extrabold text-[#F9F871]">Labbe Maxime</h1></a>
            <nav className="lg:float-none lg:mx-auto sm:float-end lg:w-1/3 md:w-96 sm:w-7/12 w-full">
                <ul className="w-full mx-auto sm:h-20 h-14 grid grid-cols-3 gap-4 content-end justify-center">
                    <li><a href="/" className="">Accueil</a></li>
                    <li><a href="/aboutme" className="">Qui suis-je ?</a></li>
                    <li><a href="/contact" className="">Contact</a></li>
                </ul>
            </nav>
        </div>

    );
}
