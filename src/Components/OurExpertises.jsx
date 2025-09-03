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
    description: "Nous traitons également l'ensemble des questions de Droit Public générale, tant pour les entités de Droit public que pour les Entités de Droit Privé ayant des intérêts publics. Notre expertise couvre les marchés publics, le contentieux administratif et le droit des collectivités territoriales.",
    icon: <FaBuilding size={35} />,
    link: '/expertises/droit-public-institutions'
  },
  {
    image: '/assets/img/droit_penal.jpg', 
    title: 'Droit Pénal des Affaires',
    description: 'Défense et conseil en matière de litiges pénaux liés aux activités commerciales et financières. Nous intervenons dans les dossiers de corruption, blanchiment, abus de biens sociaux et délits économiques complexes.',
    icon: <FaGavel size={35} />,
    link: '/expertises/droit-penal-affaires'
  },
  {
    image: '/assets/img/droit_travail.jpg',
    title: 'Droit du Travail et Social',
    description: 'Accompagnement dans la gestion des relations de travail, des litiges individuels et collectifs. Conseil en restructuration, négociation collective et défense devant les prud\'hommes.',
    icon: <FaUserTie size={35} />,
    link: '/expertises/droit-travail-social'
  },
  {
    image: '/assets/img/headercme.jpg',
    title: 'Droit Fiscal et Douanier',
    description: 'Optimisation fiscale et résolution des contentieux avec les administrations fiscales et douanières. Expertise en fiscalité nationale et internationale, conseil en stratégie fiscale et assistance en contrôle fiscal.',
    icon: <FaMoneyBillWave size={35} />,
    link: '/expertises/droit-fiscal-douanier'
  },
  {
    image: '/assets/img/droit_société.jpg',
    title: 'Droit des Sociétés et Commercial',
    description: 'Création et gestion de sociétés, fusions-acquisitions et conseil en opérations commerciales. Accompagnement dans la vie sociale des entreprises et la gouvernance d\'entreprise.',
    icon: <FaBalanceScale size={35} />,
    link: '/expertises/droit-societes-commercial'
  },
  {
    image: '/assets/img/headercme.jpg',
    title: 'Droit des Assurances',
    description: "Assistance dans la gestion des sinistres et des litiges relatifs aux contrats d'assurance. Expertise en indemnisation, contentieux assurance et défense des droits des assurés et professionnels.",
    icon: <FaShieldAlt size={35} />,
    link: '/expertises/droit-assurances'
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
                <div key={index} className="col d-flex">
                  <Link to={expertise.link} className="text-decoration-none d-flex w-100">
                    <div className="card expertise-card border-0 w-100 d-flex flex-column">
                      <img src={expertise.image} className="card-img-top expertise-img" alt={expertise.title} />
                      <div className="text-white rounded-circle d-flex justify-content-center align-items-center expertise-step-circle">
                        {expertise.icon}
                      </div>
                      <div className="card-body text-center text-sm-start p-4 d-flex flex-column">
                        <h5 className="fw-bold text-dark mb-3">{expertise.title}</h5>
                        <p className="text-muted mb-4 text-justify flex-grow-1 expertise-description">{expertise.description}</p>
                        
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