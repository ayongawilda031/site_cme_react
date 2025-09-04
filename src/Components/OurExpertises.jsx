import { useMemo } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { 
  FaBuilding, 
  FaGavel, 
  FaUserTie, 
  FaMoneyBillWave, 
  FaBalanceScale, 
  FaShieldAlt 
} from 'react-icons/fa';
import { Link } from 'react-router-dom'; 
import '../styles/Expertises.css'

export const expertises = [
  {
    image: '/assets/img/droit_public.jpg', 
    title: 'Droit Public et Institutions',
    description: "Conseil en droit public et marchés publics, contentieux administratif et collectivités territoriales.",
    icon: <FaBuilding size={35} />,
    link: '/expertises/droit-public-institutions'
  },
  {
    image: '/assets/img/droit_penal.jpg', 
    title: 'Droit Pénal des Affaires',
    description: 'Défense et conseil pour litiges pénaux liés aux affaires et délits économiques.',
    icon: <FaGavel size={35} />,
    link: '/expertises/droit-penal-affaires'
  },
  {
    image: '/assets/img/droit_travail.jpg',
    title: 'Droit du Travail et Social',
    description: 'Accompagnement pour relations de travail, litiges et négociations collectives.',
    icon: <FaUserTie size={35} />,
    link: '/expertises/droit-travail-social'
  },
  {
    image: '/assets/img/droit_douanier.jpg',
    title: 'Droit Fiscal et Douanier',
    description: 'Optimisation fiscale et résolution de contentieux avec administrations fiscales et douanières.',
    icon: <FaMoneyBillWave size={35} />,
    link: '/expertises/droit-fiscal-douanier'
  },
  {
    image: '/assets/img/droit_société.jpg',
    title: 'Droit des Sociétés et Commercial',
    description: 'Création, gestion de sociétés et conseil en opérations commerciales.',
    icon: <FaBalanceScale size={35} />,
    link: '/expertises/droit-societes-commercial'
  },
  {
    image: '/assets/img/droit_assurance.jpg',
    title: 'Droit des Assurances',
    description: 'Assistance dans la gestion des sinistres et contentieux assurance.',
    icon: <FaShieldAlt size={35} />,
    link: '/expertises/droit-assurances'
  },
];


export default function OurExpertises({ isHomePage = false }) {

  const displayedExpertises = useMemo(() => {
    if (isHomePage) {
      return [...expertises]
        .sort(() => 0.5 - Math.random()) 
        .slice(0, 3); 
    }
    return expertises;
  }, [isHomePage]); 

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
              {displayedExpertises.map((expertise, index) => (
                <div key={index} className="col d-flex">
                  <Link to={expertise.link} className="text-decoration-none d-flex w-100">
                    <div className="card expertise-card border-0 w-100 d-flex flex-column">
                      <img src={expertise.image} className="card-img-top expertise-img" alt={expertise.title} />
                      <div className="text-white rounded-circle d-flex justify-content-center align-items-center expertise-step-circle">
                        {expertise.icon}
                      </div>
                      <div className="card-body text-center text-sm-start p-4 d-flex flex-column">
                        <h5 className="fw-bold text-dark mb-3">{expertise.title}</h5>
                        <p className="text-muted mb-4 text-justify flex-grow-1 expertise-description">
                          {expertise.description}
                        </p>
                        
                        <div className="mt-auto">
                          <div className="d-flex align-items-center text-primary">
                            <span className="me-2">En savoir plus</span>
                            <FaArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
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
