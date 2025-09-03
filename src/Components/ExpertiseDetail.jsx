import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { 
  FaBuilding, 
  FaGavel, 
  FaUserTie, 
  FaMoneyBillWave, 
  FaBalanceScale, 
  FaShieldAlt 
} from 'react-icons/fa';
import '../styles/ExpertiseDetail.css';


const expertiseData = {
  'droit-public-institutions': {
    title: 'Droit Public et Institutions',
    description: "Nous traitons également l'ensemble des questions de Droit Public générale, tant pour les entités de Droit public que pour les Entités de Droit Privé ayant des intérêts publics.",
    longDescription: "Notre cabinet dispose d'une expertise reconnue en droit public et institutionnel. Nous accompagnons les collectivités territoriales, les établissements publics et les entreprises privées dans leurs relations avec l'administration. Notre équipe vous conseille sur les marchés publics, le droit administratif, le contentieux administratif et toutes les questions liées au droit public.",
    image: '/assets/img/droit_public.jpg',
    icon: <FaBuilding size={35} />,
    features: [
      'Conseil en marchés publics et délégations de service public',
      'Contentieux administratif devant les tribunaux',
      'Accompagnement des collectivités territoriales',
      'Défense des intérêts devant les institutions publiques',
      'Conseil en droit public des affaires'
    ]
  },
  'droit-penal-affaires': {
    title: 'Droit Pénal des Affaires',
    description: 'Défense et conseil en matière de litiges pénaux liés aux activités commerciales et financières.',
    longDescription: 'Notre département de droit pénal des affaires offre une expertise complète dans la défense des dirigeants, entreprises et particuliers confrontés à des contentieux pénaux complexes. Nous intervenons dans les domaines de la corruption, du blanchiment, des abus de biens sociaux, de la concurrence déloyale et de toutes les infractions liées au monde des affaires.',
    image: '/assets/img/headercme.jpg',
    icon: <FaGavel size={35} />,
    features: [
      'Défense des dirigeants et entreprises',
      'Conseil en compliance pénale',
      'Assistance lors des perquisitions',
      'Contentieux complexe white-collar',
      'Procédures de négociation pénale'
    ]
  },
  'droit-travail-social': {
    title: 'Droit du Travail et Social',
    description: 'Accompagnement dans la gestion des relations de travail, des litiges individuels et collectifs.',
    longDescription: 'Notre équipe spécialisée en droit du travail vous accompagne dans tous les aspects des relations de travail. De la rédaction de contrats à la gestion des contentieux, nous vous conseillons pour optimiser votre gestion RH et anticiper les risques sociaux.',
    image: '/assets/img/headercme.jpg',
    icon: <FaUserTie size={35} />,
    practices: ['Contrats de travail', 'Licenciements', 'Négociations collectives', 'Contentieux prud\'hommal', 'Santé et sécurité au travail'],
    features: [
      'Accompagnement dans les restructurations',
      'Défense devant les prud\'hommes',
      'Négociation d\'accords collectifs',
      'Conseil en politique sociale',
      'Gestion des relations sociales'
    ]
  },
  'droit-fiscal-douanier': {
    title: 'Droit Fiscal et Douanier',
    description: 'Optimisation fiscale et résolution des contentieux avec les administrations fiscales et douanières.',
    longDescription: 'Notre expertise fiscale couvre l\'ensemble des problématiques liées à la fiscalité des entreprises et des particuliers. Nous vous accompagnons dans l\'optimisation de votre situation fiscale et votre défense devant l\'administration.',
    image: '/assets/img/headercme.jpg',
    icon: <FaMoneyBillWave size={35} />,
    practices: ['Fiscalité des entreprises', 'Fiscalité internationale', 'Contentieux fiscal', 'Optimisation fiscale', 'Droit douanier'],
    features: [
      'Conseil en optimisation fiscale légale',
      'Défense contentieuse fiscale',
      'Assistance en contrôle fiscal',
      'Conseil en fiscalité internationale',
      'Accompagnement douanier'
    ]
  },
  'droit-societes-commercial': {
    title: 'Droit des Sociétés et Commercial',
    description: 'Création et gestion de sociétés, fusions-acquisitions et conseil en opérations commerciales.',
    longDescription: 'Notre cabinet accompagne les entreprises dans toutes les étapes de leur vie sociale, de la création aux opérations de croissance externe. Nous conseillons également sur les aspects commerciaux et contractuels de l\'activité économique.',
    image: '/assets/img/headercme.jpg',
    icon: <FaBalanceScale size={35} />,
    practices: ['Création de sociétés', 'Fusions-acquisitions', 'Droit commercial', 'Contrats d\'affaires', 'Gouvernance d\'entreprise'],
    features: [
      'Création et modification de sociétés',
      'Opérations de fusion-acquisition',
      'Rédaction de contrats commerciaux',
      'Conseil en gouvernance',
      'Gestion des conflits actionnariaux'
    ]
  },
  'droit-assurances': {
    title: 'Droit des Assurances',
    description: "Assistance dans la gestion des sinistres et des litiges relatifs aux contrats d'assurance.",
    longDescription: 'Notre département droit des assurances intervient pour assurer les assurés et les professionnels dans la gestion de leurs relations contractuelles et contentieuses avec les compagnies d\'assurance.',
    image: '/assets/img/headercme.jpg',
    icon: <FaShieldAlt size={35} />,
    practices: ['Contrats d\'assurance', 'Règlement de sinistres', 'Contentieux assurance', 'Droit des victimes', 'Responsabilité civile'],
    features: [
      'Négociation avec les assureurs',
      'Contentieux indemnisation',
      'Conseil en prévention des risques',
      'Défense des droits des assurés',
      'Expertise en dommages corporels'
    ]
  }
};


const iconComponents = {
  'droit-public-institutions': FaBuilding,
  'droit-penal-affaires': FaGavel,
  'droit-travail-social': FaUserTie,
  'droit-fiscal-douanier': FaMoneyBillWave,
  'droit-societes-commercial': FaBalanceScale,
  'droit-assurances': FaShieldAlt
};

export default function ExpertiseDetail() {
  const { expertiseId } = useParams();
  const [expertise, setExpertise] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setExpertise(expertiseData[expertiseId]);
      setLoading(false);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [expertiseId]);

  if (loading) {
    return <div className="container text-center py-5">Chargement...</div>;
  }

  if (!expertise) {
    return (
      <div className="container text-center py-5">
        <h2>Expertise non trouvée</h2>
        <Link to="/expertises" className="btn btn-primary mt-3">
          Retour aux expertises
        </Link>
      </div>
    );
  }

  const IconComponent = iconComponents[expertiseId];

  return (
    <div className="expertise-detail-superimposed">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="expertise-detail-card">
              <div className="row">
                <div className="col-lg-8">
                  <div className="d-flex align-items-center mb-4">
                    <div className="expertise-icon-container me-3">
                      {IconComponent && <IconComponent size={40} className="expertise-main-icon" />}
                    </div>
                    <h1 className="expertise-title mb-0">{expertise.title}</h1>
                  </div>
                  
                  <p className="lead expertise-description">{expertise.longDescription}</p>

                  <div className="my-5">
                    <h3 className="mb-4 expertise-subtitle">Nos prestations</h3>
                    <ul className="expertise-features-list">
                      {expertise.features.map((feature, index) => (
                        <li key={index} className="expertise-feature-item">
                          <span className="expertise-feature-bullet">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="expertise-sidebar-card">
                    <h4 className="mb-4">Contactez-nous</h4>
                    <p className="text-muted">Nos experts sont à votre disposition pour discuter de vos besoins spécifiques.</p>
                    
                    <div className="d-grid gap-2 mt-4">
                      <a href="tel:+241533625" className="btn btn-outline-primary d-flex align-items-center justify-content-center expertise-contact-btn">
                        <FaPhone className="me-2" />
                        Appeler maintenant
                      </a>
                      <a href="mailto:contact@cabinet.com" className="btn btn-primary d-flex align-items-center justify-content-center expertise-contact-btn">
                        <FaEnvelope className="me-2" />
                        Envoyer un email
                      </a>
                    </div>

                    <div className="mt-4 pt-4 border-top">
                      <h5 className="mb-3">Expertises connexes</h5>
                      <ul className="expertise-related-list">
                        {Object.entries(expertiseData).slice(0, 3).map(([id, s]) => (
                          id !== expertiseId && (
                            <li key={id} className="expertise-related-item">
                              <Link to={`/expertises/${id}`} className="expertise-related-link d-flex align-items-center">
                                {s.title}
                                <FaArrowRight className="ms-2 expertise-related-arrow" />
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