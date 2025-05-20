import '../navbar.css';

export default function Navbar() {
    return (
        <nav className="w-full fixed top-0 left-0 right-0 flex flex-row items-center justify-around z-10">
            <div className="w-1/5">
                <a className="title relative left-20 top-10 text-4xl font-extrabold" href="#1"><h1>Labbe Maxime</h1></a>
            </div>
            <ul className="w-1/12 relative top-10 flex flex-row items-center justify-around list-none">
                <a className="nav-button" href="#1"><li></li></a>
                <a className="nav-button" href="#2"><li></li></a>
                <a className="nav-button" href="#3"><li></li></a>
                <a className="nav-button" href="#4"><li></li></a>
                <a className="nav-button" href="#5"><li></li></a>
            </ul>
        </nav>
    )
}