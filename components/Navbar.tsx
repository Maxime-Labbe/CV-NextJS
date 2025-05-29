import '@/styles/navbar.css';

export default function Navbar() {
    return (
        <nav className="w-full lg:fixed absolute top-10 sm:top-0 sm:top-6 left-0 right-0 flex flex-row items-center justify-around z-10">
            <div className="lg:w-1/4 md:w-1/3 text-center">
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
    )
}