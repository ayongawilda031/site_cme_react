import { Link } from 'react-router-dom';
import { FaFacebook } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa6';
import { FaLinkedin } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-5 py-5">
      <div className="container">
        <div className="row">
         
          <div className="col-md-6 col-lg-4 text-center text-lg-start mb-4">
            <h3 className="fw-bold">Cabinet Maître ESSINGONE</h3>
            <p className="mt-3 mb-4">
              Notre cabinet est spécialisé en droit public et privé, offrant des conseils
              juridiques de haute qualité et une défense rigoureuse de vos intérêts.
            </p>
            <Link className="btn btn-warning border-0" role="button" to="/contact">
              Contactez-nous
            </Link>
          </div>

       
          <div className="col-md-6 col-lg-4 text-center text-lg-start mb-4">
            <h5 className="fw-bold">Heures d'ouverture</h5>
            <ul className="list-unstyled mt-3 mb-4">
              <li>Lundi - Vendredi : 08h00 - 18h00</li>
              <li>Samedi : 09h00 - 13h00</li>
              <li>Dimanche : Fermé</li>
            </ul>

            <h5 className="fw-bold">Adresse</h5>
            <p>
              Libreville, Gabon
              <br />
              01 BP 6496
            </p>
          </div>

   
          <div className="col-lg-4 text-center text-lg-end mb-4">
            <h5 className="fw-bold">Mentions Légales</h5>
            <ul className="list-unstyled mt-3 mb-4">
              <li><Link className="link-light text-decoration-none" to="/privacy">Politique de Confidentialité</Link></li>
              <li><Link className="link-light text-decoration-none" to="/terms">Conditions Générales</Link></li>
            </ul>

            <h5 className="fw-bold">Suivez-nous</h5>
            <div className="fs-4 d-flex justify-content-center align-items-center gap-2 justify-content-lg-end mb-lg-2">
              <Link className="link-light" to="#"><FaFacebook /></Link>
              <Link className="link-light" to="#"><FaTwitter /></Link>
              <Link className="link-light" to="#"><FaLinkedin /></Link>
            </div>
          </div>
        </div>
        
        <div className="row">
          <div className="col text-center mt-4">
            <p className="text-white-50 mb-0">Copyright © CME Inc. Tous droits réservés.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}