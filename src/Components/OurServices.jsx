import { FaArrowRight, FaChartLine, FaShieldAlt, FaPencilRuler, FaLaptopCode, FaTags, FaVideo } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/Services.css';

export const services = [
  {
    icon: <FaPencilRuler className="service-icon" />,
    title: 'Conseil Juridique',
    description: 'Expertise approfondie pour vous guider dans toutes vos démarches juridiques, qu\'elles soient préventives ou contentieuses.',
    link: '/services/conseil-juridique'
  },
  {
    icon: <FaLaptopCode className="service-icon" />,
    title: 'Représentation Légale',
    description: 'Défense de vos intérêts devant les tribunaux et les instances administratives, avec une stratégie adaptée à chaque situation.',
    link: '/services/representation-legale'
  },
  {
    icon: <FaTags className="service-icon" />,
    title: 'Rédaction d\'Actes',
    description: 'Assistance pour la rédaction de contrats, statuts, lettres officielles et autres documents juridiques essentiels à vos activités.',
    link: '/services/redaction-actes'
  },
  {
    icon: <FaVideo className="service-icon" />,
    title: 'Médiation et Arbitrage',
    description: 'Accompagnement dans la résolution amiable des litiges, offrant des solutions efficaces et discrètes pour éviter les procédures judiciaires.',
    link: '/services/mediation-arbitrage'
  },
  {
    icon: <FaShieldAlt className="service-icon" />,
    title: 'Audit et Conformité',
    description: 'Évaluation des risques juridiques de votre entreprise et mise en place de mesures pour garantir votre conformité aux réglementations en vigueur.',
    link: '/services/audit-conformite'
  },
  {
    icon: <FaChartLine className="service-icon" />,
    title: 'Formation et Séminaires',
    description: 'Organisation de sessions de formation personnalisées sur des thématiques juridiques spécifiques pour vous et vos équipes.',
    link: '/services/formation-seminaires'
  },
];

export default function OurServices({ showHeader = true, servicesList = services, isHomePage = false }) {
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
          {servicesList.map((service, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <Link to={service.link} className="text-decoration-none service-card-link">
                <div className="card h-100 shadow-sm border-0 p-4 service-card" data-bs-theme="light">
                  <div className="service-icon-wrapper mb-3 mx-auto">
                    {service.icon}
                  </div>

                  <h5 className="fw-bold mb-2 fs-5 text-center service-title">{service.title}</h5>

                  <p className="text-muted mb-3 text-justify">{service.description}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {showHeader && (
          <div className="mt-4">
            <Link to="/services" className="btn btn-warning px-4 py-2 fw-semibold  align-items-center justify-content-center mx-auto">
              Voir tous les services&nbsp;
              <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}