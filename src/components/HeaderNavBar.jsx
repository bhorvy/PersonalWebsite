export default function HeaderNavBar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary custom-navbar-height" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand brand-large" href="localhost:3000">Brennan</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link active brand-med" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link brand-med" href="#">Projects</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link brand-med" href="../../Resume.pdf">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link disabled brand-med" aria-disabled="true">Blog</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    )
}