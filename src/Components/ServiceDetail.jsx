import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import '../styles/ServiceDetail.css';


const servicesData = {
  'conseil-juridique': {
    title: 'Conseil Juridique',
    description: 'Expertise approfondie pour vous guider dans toutes vos démarches juridiques, qu\'elles soient préventives ou contentieuses.',
    longDescription: 'Notre équipe d\'experts juridiques vous accompagne dans toutes vos démarches, de la consultation préventive à la gestion de contentieux complexes. Nous offrons des conseils stratégiques adaptés à votre situation spécifique.',
    features: [
      'Analyse complète de votre situation juridique',
      'Conseils stratégiques personnalisés',
      'Veille juridique continue',
      'Accompagnement dans les démarches administratives'
    ]
  },
  'representation-legale': {
    title: 'Représentation Légale',
    description: 'Défense de vos intérêts devant les tribunaux et les instances administratives, avec une stratégie adaptée à chaque situation.',
    longDescription: 'Nos avocats expérimentés vous représentent devant toutes les juridictions et instances administratives. Nous développons des stratégies de défense sur mesure pour protéger au mieux vos intérêts.',
    features: [
      'Préparation et présentation de votre dossier',
      'Stratégie de défense personnalisée',
      'Représentation devant toutes juridictions',
      'Suivi personnalisé tout au long de la procédure'
    ]
  },

};

export default function ServiceDetail() {
  const { serviceId } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
 
    const timer = setTimeout(() => {
      setService(servicesData[serviceId]);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [serviceId]);

  if (loading) {
    return <div className="container text-center py-5">Chargement...</div>;
  }

  if (!service) {
    return (
      <div className="container text-center py-5">
        <h2>Service non trouvé</h2>
        <Link to="/services" className="btn btn-primary mt-3">
          Retour aux services
        </Link>
      </div>
    );
  }

  return (
    <div className="service-detail-superimposed">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="service-detail-card">
              <div className="row">
                <div className="col-lg-8">
                  <h1 className="mb-4 service-title">{service.title}</h1>
                  <p className="lead service-description">{service.longDescription}</p>

                  <div className="my-5">
                    <h3 className="mb-4 service-subtitle">Nos prestations</h3>
                    <ul className="service-features-list">
                      {service.features.map((feature, index) => (
                        <li key={index} className="service-feature-item">
                          <span className="service-feature-bullet">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="service-sidebar-card">
                    <h4 className="mb-4">Contactez-nous</h4>
                    <p className="text-muted">Nos experts sont à votre disposition pour discuter de vos besoins spécifiques.</p>
                    
                    <div className="d-grid gap-2 mt-4">
                      <a href="tel:+33123456789" className="btn btn-outline-primary d-flex align-items-center justify-content-center service-contact-btn">
                        <FaPhone className="me-2" />
                        Appeler maintenant
                      </a>
                      <a href="mailto:contact@cabinet.com" className="btn btn-primary d-flex align-items-center justify-content-center service-contact-btn">
                        <FaEnvelope className="me-2" />
                        Envoyer un email
                      </a>
                    </div>

                    <div className="mt-4 pt-4 border-top">
                      <h5 className="mb-3">Services connexes</h5>
                      <ul className="service-related-list">
                        {Object.entries(servicesData).slice(0, 3).map(([id, s]) => (
                          id !== serviceId && (
                            <li key={id} className="service-related-item">
                              <Link to={`/services/${id}`} className="service-related-link">
                                {s.title}
                              </Link>
                            </li>
                          )
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}