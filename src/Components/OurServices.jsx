import { useMemo } from 'react';
import { FaArrowRight, FaShieldAlt, FaBalanceScale, FaGavel, FaFileContract, FaHandshake, FaChalkboardTeacher } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

export const services = [
  { icon: <FaBalanceScale className="service-icon" />, title: 'Conseil Juridique', description: "Expertise approfondie pour vous guider dans toutes vos démarches juridiques.", link: '/services/conseil-juridique' },
  { icon: <FaGavel className="service-icon" />, title: 'Représentation Légale', description: "Défense de vos intérêts devant tribunaux et instances administratives.", link: '/services/representation-legale' },
  { icon: <FaFileContract className="service-icon" />, title: "Rédaction d'Actes", description: "Assistance pour la rédaction de contrats et documents juridiques essentiels.", link: '/services/redaction-actes' },
  { icon: <FaHandshake className="service-icon" />, title: 'Médiation et Arbitrage', description: "Accompagnement dans la résolution amiable des litiges.", link: '/services/mediation-arbitrage' },
  { icon: <FaShieldAlt className="service-icon" />, title: 'Audit et Conformité', description: "Évaluation des risques et mise en place de mesures de conformité.", link: '/services/audit-conformite' },
  { icon: <FaChalkboardTeacher className="service-icon" />, title: 'Formation et Séminaires', description: "Organisation de sessions de formation personnalisées.", link: '/services/formation-seminaires' },
];


function getRandomServices(list, count = 3) {
  return [...list].sort(() => 0.5 - Math.random()).slice(0, count);
}

export default function OurServices({ showHeader = true, servicesList = services, isHomePage = false }) {
  // useMemo pour random uniquement au montage ou changement de isHomePage
  const displayedServices = useMemo(() => {
    return isHomePage ? getRandomServices(servicesList, 3) : servicesList;
  }, [isHomePage, servicesList]); // pas de Math.random() ici

  return (
    <section className="py-5 bg-light">
      <div className="container text-center">
        {showHeader && (
          <div className="row mb-4">
            <div className="col-md-8 col-xl-6 text-center mx-auto">
              <h3 className="fs-2 fw-bold mb-4 heading">Nos services</h3>
            </div>
          </div>
        )}
        
        <div className="row justify-content-center g-4">
          {displayedServices.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Link to={service.link} className="text-decoration-none service-card-link">
                <div className="card h-100 shadow-sm border-0 p-4 service-card" data-bs-theme="light">
                  <div className="service-icon-wrapper mb-3 mx-auto">{service.icon}</div>
                  <h5 className="fw-bold mb-2 fs-5 text-center service-title">{service.title}</h5>
                  <p className="text-muted mb-3 text-justify">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {showHeader && (
          <div className="mt-4">
            <Link to="/services" className="btn btn-warning px-4 py-2 fw-semibold align-items-center justify-content-center mx-auto">
              Voir tout&nbsp;
              <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
