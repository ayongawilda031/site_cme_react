import { Link } from 'react-router-dom'; 
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-body-tertiary mt-5 py-5">
      <div className="container d-flex flex-column justify-content-between align-items-center flex-lg-row">
        <div className="text-center text-lg-start mb-5 mb-lg-0">
          <h3>CME</h3>
          <p className="mt-1 mb-4">
            Ullamcorper at massa himenaeos vel. Vel laoreet eget semper <br />
            commodo, ac habitasse venenatis. Porta aliquet ornare, nec.
          </p>
          
          <Link className="btn btn-primary border-0" role="button" to="/contacts">
            Get in touch
          </Link>
        </div>
        <div className="text-center text-lg-end">
          <ul className="nav d-flex justify-content-center mb-1">
            <li className="nav-item">
              <Link className="nav-link active fw-bold link-body-emphasis" to="/">Home</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold link-body-emphasis" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold link-body-emphasis" to="/blog">Blog</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold link-body-emphasis" to="/privacy">Privacy</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link fw-bold link-body-emphasis pe-0" to="/contacts">Contact</Link> 
            </li>
          </ul>
          <p className="text-muted mb-2">Copyright © CME Inc</p>
          <div className="fs-4 d-flex justify-content-center align-items-center gap-2 justify-content-lg-end mb-lg-2">
            <Link className="link-body-emphasis" to="#"><FaFacebook/></Link>
            <Link className="link-body-emphasis" to="#"><FaTwitter/></Link>
            <Link className="link-body-emphasis" to="#"><FaLinkedin/></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}


