import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaCalendarAlt, FaClock, FaArrowLeft, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';
import '../styles/NewsDetail.css';


const newsData = {
  1: {
    id: 1,
    title: "Réforme du droit des sociétés : ce qui change en 2025",
    description: "Découvrez les nouvelles dispositions légales qui impactent la gouvernance d'entreprise et les obligations des dirigeants.",
    content: `
      <p>Le paysage juridique des entreprises gabonaises connaîtra des transformations significatives en 2025 avec l'entrée en vigueur de la nouvelle réforme du droit des sociétés. Cette modernisation législative vise à adapter notre cadre juridique aux standards internationaux tout en répondant aux spécificités locales.</p>
      
      <h3>Les principales modifications</h3>
      <p>Parmi les changements les plus notables, on retrouve :</p>
      <ul>
        <li>Simplification des procédures de création d'entreprise</li>
        <li>Renforcement de la transparence dans la gouvernance d'entreprise</li>
        <li>Nouvelles obligations pour les dirigeants et administrateurs</li>
        <li>Adaptation aux enjeux numériques et environnementaux</li>
      </ul>
      
      <h3>Implications pour les entreprises</h3>
      <p>Les entreprises devront revoir leurs statuts et procédures internes pour se conformer à ces nouvelles dispositions. Notre cabinet accompagne déjà plusieurs sociétés dans cette transition cruciale.</p>
      
      <p>Il est recommandé de procéder à un audit juridique préventif pour anticiper ces changements et éviter toute disruption dans vos activités.</p>
    `,
    image: '/assets/img/droit_penal.jpg',
    date: "12 Janvier 2025",
    readTime: "5 min de lecture",
    category: "Droit des Sociétés",
    author: "Maître Essingone",
    authorImage: '/assets/img/droit_penal.jpg'
  },
  2: {
    id: 2,
    title: "Nouvelle jurisprudence en droit fiscal international",
    description: "Analyse des dernières décisions qui redéfinissent les obligations fiscales des entreprises multinationales.",
    content: `
      <p>La Cour de Justice de la CEMAC a rendu une décision marquante qui impactera significativement la fiscalité des entreprises multinationales opérant dans la région.</p>
      
      <h3>Contexte de l'affaire</h3>
      <p>Cette décision fait suite à un litige opposant une multinationale du secteur minier à l'administration fiscale gabonaise concernant l'interprétation des conventions fiscales internationales.</p>
      
      <h3>Principaux enseignements</h3>
      <p>La jurisprudence établit plusieurs principes fondamentaux :</p>
      <ul>
        <li>Clarification des règles de prix de transfert</li>
        <li>Renforcement des obligations de documentation</li>
        <li>Nouvelles interprétations des notions d'établissement stable</li>
        <li>Harmonisation des pratiques au niveau régional</li>
      </ul>
      
      <h3>Recommandations</h3>
      <p>Les entreprises multinationales doivent revoir leurs structures et politiques fiscales pour se conformer à cette nouvelle jurisprudence. Notre équipe de spécialistes en droit fiscal international est à votre disposition pour vous accompagner dans cette démarche.</p>
    `,
    image: '/assets/img/droit_penal.jpg',
    date: "1 Février 2025",
    readTime: "7 min de lecture",
    category: "Droit Fiscal",
    author: "Maître Marie-Louise Nzeng",
    authorImage: '/assets/img/droit_penal.jpg'
  },
  3: {
    id: 3,
    title: "Protection des données : mise à jour du cadre réglementaire",
    description: "Les nouvelles exigences RGPD et leurs implications pour les entreprises gabonaises.",
    content: `
      <p>Le Gabon renforce son cadre de protection des données personnelles avec l'adoption de nouvelles dispositions alignées sur le RGPD européen. Ces changements visent à moderniser notre arsenal juridique face aux défis du numérique.</p>
      
      <h3>Nouvelles obligations</h3>
      <p>Les entreprises devront notamment :</p>
      <ul>
        <li>Désigner un délégué à la protection des données (DPO)</li>
        <li>Mettre en place des registres de traitement</li>
        <li>Renforcer la sécurité des données</li>
        <li>Obtenir des consentements explicites</li>
        <li>Signaler les violations dans des délais stricts</li>
      </ul>
      
      <h3>Calendrier de mise en conformité</h3>
      <p>Les entreprises disposent d'une période de transition de 12 mois pour se mettre en conformité. Des sanctions significatives sont prévues en cas de non-respect des nouvelles obligations.</p>
      
      <h3>Notre accompagnement</h3>
      <p>Notre cabinet propose des audits de conformité et accompagne les entreprises dans la mise en place des processus requis. Nous organisons également des formations spécifiques pour vos équipes.</p>
    `,
    image: '//assets/img/droit_penal.jpg',
    date: "10 Mars 2025",
    readTime: "4 min de lecture",
    category: "Conformité",
    author: "Maître David Mboumba",
    authorImage: '//assets/img/droit_penal.jpg'
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

  if (loading) {
    return <div className="container text-center py-5">Chargement...</div>;
  }

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
    <div className="news-detail">
     
      <div className="news-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav aria-label="breadcrumb" className="py-3">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Accueil</Link>
                  </li>
                  <li className="breadcrumb-item">
                    <Link to="/news">Actualités</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {article.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>

     
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
          
            <Link to="/news" className="btn btn-outline-primary mb-4 d-inline-flex align-items-center">
              <FaArrowLeft className="me-2" />
              Retour aux actualités
            </Link>

           
            <div className="mb-3">
              <span className="badge bg-primary bg-opacity-10 text-primary rounded-pill px-3 py-2">
                {article.category}
              </span>
            </div>

           
            <h1 className="news-title mb-4">{article.title}</h1>

          
            <div className="news-meta mb-4">
              <div className="d-flex flex-wrap align-items-center text-muted">
                <div className="d-flex align-items-center me-4 mb-2">
                  <FaCalendarAlt className="me-2" />
                  <span>{article.date}</span>
                </div>
                <div className="d-flex align-items-center me-4 mb-2">
                  <FaClock className="me-2" />
                  <span>{article.readTime}</span>
                </div>
                <div className="d-flex align-items-center mb-2">
                  <img 
                    src={article.authorImage} 
                    alt={article.author}
                    className="author-image me-2"
                  />
                  <span>Par {article.author}</span>
                </div>
              </div>
            </div>

           
            <div className="news-image mb-4">
              <img 
                src={article.image} 
                alt={article.title}
                className="img-fluid rounded-3 w-100"
              />
            </div>

            
            <div className="news-content">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="article-body"
              />
            </div>

          
            <div className="news-share mt-5 pt-4 border-top">
              <h5 className="mb-3">Partager cet article</h5>
              <div className="d-flex gap-2">
                <button className="btn btn-outline-primary btn-sm">
                  <FaFacebook className="me-2" />
                  Facebook
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  <FaTwitter className="me-2" />
                  Twitter
                </button>
                <button className="btn btn-outline-primary btn-sm">
                  <FaLinkedin className="me-2" />
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}