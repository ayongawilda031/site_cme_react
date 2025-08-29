import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css'


export default function NavBar() {
    return (
        <nav className="navbar bg-light navbar-expand-md py-2 noellie-navbar fixed-top shadow-lg">
            <div className="container-fluid px-4">
                <NavLink className="navbar-brand fs-4 fw-bold text-dark noellie-brand" to="/">CME.</NavLink>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navcol"
                    aria-controls="navcol"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navcol">
                    <ul className="navbar-nav  mb-md-0">
                        <li className="nav-item">
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" exact to="/">Accueil</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" to="/aboutus">À propos de nous</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" to="/services">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" to="/expertises">Expertises</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" to="/news">Actualités</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <Link
                        className="btn btn-warning rounded-pill px-3 py-1 fw-semibold text-dark noellie-phone-btn"
                        role="button"
                        to="tel:+24162452112"
                    >
                        <FontAwesomeIcon icon={faPhone} />
                        <span className="d-none d-lg-inline-block ms-2">+241 062 45 21 12</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
}