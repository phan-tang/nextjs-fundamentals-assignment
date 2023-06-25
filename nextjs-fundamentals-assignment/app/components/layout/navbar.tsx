import Link from "next/link";

const NavBar = () => {
    return (
        <nav className="navbar navbar-default navbar-custom navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header page-scroll">
                    <a className="navbar-brand" href="/">Start Bootstrap</a>
                </div>
                <div className="nav d-flex ml-auto">
                    <div>
                        <Link href={'/'}>Home</Link>
                    </div>
                    <div>
                        <Link href={'/about'}>About</Link>
                    </div>
                    <div>
                        <Link href={'contact'}>Contact</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;