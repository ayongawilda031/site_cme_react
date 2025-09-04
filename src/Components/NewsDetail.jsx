import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/NewsDetail.css';

const newsData = {
  'droit_societe': {
    title: "Réforme du droit des sociétés : ce qui change en 2025",
    description: "Découvrez les nouvelles dispositions légales qui impactent la gouvernance d'entreprise et les obligations des dirigeants.",
    content: `
      <p>Le paysage juridique des entreprises gabonaises connaîtra des transformations significatives en 2025 avec l'entrée en vigueur de la nouvelle réforme du droit des sociétés. Cette réforme vise à simplifier la création d'entreprises et à renforcer la transparence de la gouvernance.</p>
      <h3>Points clés de la réforme</h3>
      <ul>
        <li>Simplification des formalités administratives pour les créations de société</li>
        <li>Renforcement des obligations de reporting pour les dirigeants</li>
        <li>Adaptation aux standards internationaux en matière de gouvernance</li>
      </ul>
      <p>Les entreprises doivent dès maintenant revoir leurs statuts et leurs procédures internes pour se conformer à ces nouvelles exigences.</p>
    `,
    image: '/assets/img/droit_société.jpg',
    date: "12 Janvier 2025",
    author: "Maître Essingone",
    authorImage: '/assets/img/droit_penal.jpg'
  },
  'jurisprudence_fiscale': {
    title: "Nouvelle jurisprudence en droit fiscal international",
    description: "Analyse des dernières décisions qui redéfinissent les obligations fiscales des entreprises multinationales.",
    content: `
      <p>La Cour de Justice de la CEMAC a rendu une décision importante impactant la fiscalité des entreprises multinationales opérant dans la région. Cette jurisprudence clarifie les obligations fiscales et les règles de prix de transfert.</p>
      <h3>Conséquences pour les entreprises</h3>
      <ul>
        <li>Renforcement de la documentation fiscale</li>
        <li>Meilleure définition des notions d'établissement stable</li>
        <li>Harmonisation des pratiques fiscales au niveau régional</li>
      </ul>
      <p>Les sociétés doivent anticiper ces changements pour éviter des litiges et des pénalités.</p>
    `,
    image: '/assets/img/droit_penal.jpg',
    date: "1 Février 2025",
    author: "Maître Marie-Louise Nzeng",
    authorImage: '/assets/img/droit_penal.jpg'
  },
  'protection_donnees': {
    title: "Protection des données : mise à jour du cadre réglementaire",
    description: "Les nouvelles exigences RGPD et leurs implications pour les entreprises gabonaises.",
    content: `
      <p>Le Gabon adopte de nouvelles dispositions pour la protection des données personnelles, alignées sur le RGPD européen, afin de renforcer la sécurité et la confidentialité des informations.</p>
      <h3>Obligations pour les entreprises</h3>
      <ul>
        <li>Désignation d'un Délégué à la Protection des Données (DPO)</li>
        <li>Mise en place de registres de traitement</li>
        <li>Obtention de consentements explicites des utilisateurs</li>
        <li>Notification obligatoire des violations de données</li>
      </ul>
      <p>Un audit préventif est recommandé pour se mettre en conformité rapidement.</p>
    `,
    image: '/assets/img/droit_penal.jpg',
    date: "10 Mars 2025",
    author: "Maître David Mboumba",
    authorImage: '/assets/img/droit_penal.jpg'
  },
  'droit_travail': {
    title: "Droit du travail : évolutions récentes",
    description: "Analyse des changements législatifs affectant les relations employeur-employé et la réglementation du travail.",
    content: `
      <p>Des modifications législatives récentes impactent la gestion du personnel et les obligations des employeurs au Gabon.</p>
      <h3>Principales évolutions</h3>
      <ul>
        <li>Nouvelle réglementation sur les heures supplémentaires et le repos hebdomadaire</li>
        <li>Renforcement des droits des salariés en matière de licenciement</li>
        <li>Mise en place de mesures favorisant la santé et la sécurité au travail</li>
      </ul>
      <p>Les entreprises doivent adapter leurs contrats et procédures RH pour respecter ces évolutions.</p>
    `,
    image: '/assets/img/droit_travail.jpg',
    date: "5 Avril 2025",
    author: "Maître Emeline Ondo",
    authorImage: '/assets/img/droit_penal.jpg'
  },
  'innovation_juridique': {
    title: "Innovation juridique et transformation digitale",
    description: "Comment les nouvelles technologies transforment la pratique du droit et les services proposés aux clients.",
    content: `
      <p>La digitalisation du secteur juridique change la manière dont les cabinets interagissent avec leurs clients et gèrent l'information.</p>
      <h3>Impact de la transformation digitale</h3>
      <ul>
        <li>Utilisation de plateformes en ligne pour les consultations et la gestion documentaire</li>
        <li>Automatisation des tâches répétitives et gain de temps pour les avocats</li>
        <li>Analyse prédictive pour anticiper les litiges</li>
      </ul>
      <p>Les cabinets doivent investir dans les technologies et la formation pour rester compétitifs.</p>
    `,
    image: '/assets/img/droit_penal.jpg',
    date: "20 Mai 2025",
    author: "Maître Claire Nziengui",
    authorImage: '/assets/img/droit_penal.jpg'
  },
  'contentieux_commercial': {
    title: "Contentieux commercial : tendances et best practices",
    description: "Retour d'expérience sur les litiges commerciaux récents et stratégies pour les gérer efficacement.",
    content: `
      <p>Le contentieux commercial reste un domaine complexe, nécessitant des stratégies adaptées pour protéger les intérêts des entreprises.</p>
      <h3>Points clés</h3>
      <ul>
        <li>Analyse des dossiers récents pour identifier les erreurs fréquentes</li>
        <li>Mise en place de procédures internes pour prévenir les litiges</li>
        <li>Stratégies de négociation et médiation avant d'engager une procédure judiciaire</li>
      </ul>
      <p>Une approche proactive permet de réduire les risques financiers et juridiques.</p>
    `,
    image: '/assets/img/droit_penal.jpg',
    date: "1 Juin 2025",
    author: "Maître Patrick Mba",
    authorImage: '/assets/img/droit_penal.jpg'
  }
};

export default function NewsDetail() {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setArticle(newsData[id]);
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) return <div className="container text-center py-5">Chargement...</div>;

  if (!article) {
    return (
      <div className="container text-center py-5">
        <h2>Article non trouvé</h2>
        <Link to="/news" className="btn btn-primary mt-3">
          <FaArrowLeft className="me-2" />
          Retour aux actualités
        </Link>
      </div>
    );
  }

  return (
    <div className="news-detail-superimposed">
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="news-title mb-4">{article.title}</h1>
            <div className="news-meta mb-4 d-flex flex-wrap align-items-center text-muted">
              <div className="d-flex align-items-center me-4 mb-2">
                <FaCalendarAlt className="me-2" /> {article.date}
              </div>
              <div className="d-flex align-items-center mb-2">
                <img src={article.authorImage} alt={article.author} className="author-image me-2" />
                Par {article.author}
              </div>
            </div>

            <div className="news-image mb-4">
              <img src={article.image} alt={article.title} className="img-fluid rounded-3 w-100" />
            </div>

            <div className="news-content mb-5" dangerouslySetInnerHTML={{ __html: article.content }} />

            <div className="mt-4 pt-4 border-top">
              <h5 className="mb-3">Articles connexes</h5>
              <ul className="news-related-list">
                {Object.entries(newsData).map(([key, item]) => (
                  key !== id && (
                    <li key={key} className="news-related-item">
                      <Link to={`/news/${key}`} className="news-related-link">{item.title}</Link>
                    </li>
                  )
                ))}
              </ul>
            </div>

            <div className="news-share mt-5 pt-4 border-top">
              <h5 className="mb-3">Partager cet article</h5>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary btn-sm"><FaFacebook className="me-2" /> Facebook</button>
                <button className="btn btn-outline-primary btn-sm"><FaTwitter className="me-2" /> Twitter</button>
                <button className="btn btn-outline-primary btn-sm"><FaLinkedin className="me-2" /> LinkedIn</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
