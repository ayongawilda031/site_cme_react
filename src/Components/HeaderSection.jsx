import '../styles/Header.css'
import { Link } from 'react-router-dom';

export default function HeaderSection() {
  return (
    <header className="header-with-bg py-8 mt-4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-8 text-center">
            <h1 className="mb-4 heading">
              <span className="d-inline fs-1 fw-bold text-warning">
                Cabinet Maître ESSINGONE
              </span>
            </h1>

            <p className="mb-3 fs-4 fw-semibold text-center text-white">
              Votre Partenaire Juridique de Confiance
            </p>

            <p className="mb-4 fs-5 lead text-center text-light">
              Excellence juridique, solutions sur mesure. 
              Nous défendons vos intérêts avec passion et expertise 
              afin de transformer vos défis en véritables succès.
            </p>

            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
  
              <Link to="/contact" className="btn btn-primary w-custom-btn btn-lg px-4 py-1 fs-5 border-2 rounded-3 shadow">
                Prendre un rendez-vous
              </Link>
              <Link to="/aboutus" className="btn btn-outline-light btn-lg custom-btn px-5 py-1 fs-5 border-2 rounded-3">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
