import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export default function NavBar(){
   
        return (
        <nav className="navbar navbar-expand-md py-1 noellie-navbar fixed-top rounded-pill mx-auto mt-4 shadow-lg">
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
                    <ul className="navbar-nav mb-2 mb-md-0">
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
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" to="/process">Expertise</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" to="/news">Actualité</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link noellie-nav-link" activeClassName="noellie-nav-link-active" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                    <a
                        className="btn btn-warning rounded-pill px-4 py-1 fw-semibold text-dark noellie-phone-btn"
                        role="button"
                        href="tel:+24162000000"
                    >
                        <FontAwesomeIcon icon={faPhone} />
                        <span>+241 062 45 21 12</span>
                    </a>
                </div>
            </div>
        </nav>
    );
}