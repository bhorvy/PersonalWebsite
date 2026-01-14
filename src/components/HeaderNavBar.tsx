import { Link, useLocation } from 'react-router-dom';

export default function HeaderNavBar() {
    const location = useLocation();
    const whitePaths = [, '/AboutMe', '/Projects', '/Contact'];
    const isWhite = whitePaths.some(p => p === location.pathname || location.pathname.startsWith(p + '/'));

    return (
        <nav className={`navbar  navbar-expand-lg  border-body navbar-color ${isWhite ? 'white-text' : ''}`}>
            <div className="container-fluid">
                <Link className="navbar-brand brand-large" to="/">Brennan</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link className="nav-link brand-med" aria-current="page" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link brand-med" aria-current="page" to="AboutMe">About Me</Link>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link brand-med" to="Projects">Projects</Link>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link brand-med" href="../../PhotosNDocs/Resume.pdf">Resume</a>
                    </li>
                    <li className="nav-item">
                    <Link className="nav-link brand-med" aria-current="page" to="Contact">Contact</Link>
                    </li>
                    {/* <li className="nav-item">
                    <a className="nav-link disabled brand-med" aria-disabled="true">Blog</a>
                    </li> */}
                </ul>
                </div>
            </div>
        </nav>
    )
}