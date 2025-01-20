import Link from "next/link";

export default function Navbar() {
    return (
        <div className="navbar">
            <Link href="/"><h1 className="navbar-title">Maxime Labbe</h1></Link>
            <nav className="navigation-container">
                <ul className="navigation">
                    <li><Link href='/'>Acceuil</Link></li>
                    <li><Link href="/aboutme">Qui suis-je ?</Link></li>
                    <li><Link href="/projects">Mes projets</Link></li>
                </ul>
            </nav>
        </div>

    );
}
