'use client';
import '@/styles/navbar.css';
import MoonIcon from '@/public/logo/moon.svg';
import SunIcon from '@/public/logo/sun.svg';
import { AppContext, AppContextType } from '@/app/Context';
import { useContext } from 'react';

export default function Navbar() {
    const { dark, setDark } = useContext<AppContextType>(AppContext);
    const toggleDarkMode = () => {
        if (setDark) {
            const body = document.body;
            setDark(!dark);
            body.classList.toggle('dark');
            body.classList.toggle('light');
        }
    };

    return (
        <div>
            <nav className="w-[90%] lg:fixed absolute top-10 sm:top-0 sm:top-6 left-0 right-0 flex flex-row items-center justify-around z-10 xl:mx-0 mx-auto">
                <div className="lg:w-1/5 md:w-1/3 text-center">
                    <a className="title w-full lg:relative lg:left-20 lg:top-10 mx-auto text-4xl font-extrabold" href="#1"><h1 className='w-full'>Labbe Maxime</h1></a>
                </div>
                <ul className="lg:flex hidden w-[200px] relative top-10 flex-row items-center justify-center list-none gap-2">
                    <a className="nav-button" href="#1"><li></li></a>
                    <a className="nav-button" href="#2"><li></li></a>
                    <a className="nav-button" href="#3"><li></li></a>
                    <a className="nav-button" href="#4"><li></li></a>
                    <a className="nav-button" href="#5"><li></li></a>
                </ul>
            </nav>
            <button onClick={toggleDarkMode} className="fixed xl:top-[4rem] lg:top-20 sm:top-6 top-10 xl:right-20 lg:right-6 right-4 z-20">
                {dark ? (
                    <SunIcon className="svg-theme-icon sun w-10 h-10" />
                ) : (
                    <MoonIcon className="svg-theme-icon moon w-10 h-10" />
                )}
            </button>
        </div>
    )
}