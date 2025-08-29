import { FaArrowRight } from 'react-icons/fa';
import { VscLaw } from "react-icons/vsc";
import { Link } from 'react-router-dom'; 
import '../styles/Expertises.css'

export const expertises = [
  {
    image: '/assets/img/headercme.jpg', 
    title: 'Droit Public et Institutions',
    description: "Nous traitons également l'ensemble des questions de Droit Public générale, tant pour les entités de Droit public que pour les Entités de Droit Privé ayant des intérêts publics.",
  },
  {
    image: '/assets/img/headercme.jpg', 
    title: 'Droit Pénal des Affaires',
    description: 'Défense et conseil en matière de litiges pénaux liés aux activités commerciales et financières.',
  },
  {
    image: '/assets/img/headercme.jpg',
    title: 'Droit du Travail et Social',
    description: 'Accompagnement dans la gestion des relations de travail, des litiges individuels et collectifs.',
  },
  {
    image: '/assets/img/headercme.jpg',
    title: 'Droit Fiscal et Douanier',
    description: 'Optimisation fiscale et résolution des contentieux avec les administrations fiscales et douanières.',
  },
  {
    image: '/assets/img/headercme.jpg',
    title: 'Droit des Sociétés et Commercial',
    description: 'Création et gestion de sociétés, fusions-acquisitions et conseil en opérations commerciales.',
  },
  {
    image: '/assets/img/headercme.jpg',
    title: 'Droit des Assurances',
    description: "Assistance dans la gestion des sinistres et des litiges relatifs aux contrats d'assurance.",
  },
];

export default function OurExpertises({ isHomePage = false }) {
  return (
    <section>
      <div className="container py-5 text-center">
        {isHomePage && (
          <div className="row mb-4">
            <div className="col-md-8 col-xl-5 text-center mx-auto">
              <h3 className="fs-2 fw-bold mb-4 heading">Notre Expertise</h3>
            </div>
          </div>
        )}
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="row gx-3 gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3 mx-auto">
              {expertises.map((expertise, index) => (
                <div key={index} className="col">
                  <div className="card expertise-card border-0" data-bs-theme="light">
                    <img src={expertise.image} className="card-img-top expertise-img" alt={expertise.title} />
                    <div className="text-white rounded-circle d-flex justify-content-center align-items-center expertise-step-circle">
                      <VscLaw size={35} />
                    </div>
                    <div className="card-body text-center text-sm-start p-4">
                      <h5 className="fw-bold">{expertise.title}</h5>
                    
                      <p className="text-muted mb-0 text-justify">{expertise.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {isHomePage && (
              <div className="mt-4">
                <Link to="/expertises" className="btn btn-primary px-4 py-2 fw-semibold align-items-center justify-content-center mx-auto">
                  Voir tout&nbsp;
                  <FaArrowRight />
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}