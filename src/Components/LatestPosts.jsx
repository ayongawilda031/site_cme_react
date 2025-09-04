import { FaCalendarAlt, FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import '../styles/LatestPost.css'

export const newsPostsData = [
  { id: 'droit_societe', title: "Réforme du droit des sociétés : ce qui change en 2025", description: "Découvrez les nouvelles dispositions légales qui impactent la gouvernance d'entreprise et les obligations des dirigeants.", date: "12 Janvier 2025", image: "/assets/img/droit_société.jpg" },
  { id: 'jurisprudence_fiscale', title: "Nouvelle jurisprudence en droit fiscal international", description: "Analyse des dernières décisions qui redéfinissent les obligations fiscales des entreprises multinationales.", date: "1 Février 2025", image: "/assets/img/droit_penal.jpg" },
  { id: 'protection_donnees', title: "Protection des données : mise à jour du cadre réglementaire", description: "Les nouvelles exigences RGPD et leurs implications pour les entreprises gabonaises.", date: "10 Mars 2025", image: "/assets/img/droit_penal.jpg" },
  { id: 'droit_travail', title: "Droit du travail : évolutions récentes", description: "Point sur les modifications législatives affectant les relations employeur-employé.", date: "5 Avril 2025", image: "/assets/img/droit_travail.jpg" },
  { id: 'innovation_juridique', title: "Innovation juridique et transformation digitale", description: "Comment les nouvelles technologies transforment la pratique du droit et les services aux clients.", date: "20 Mai 2025", image: "/assets/img/droit_penal.jpg" },
  { id: 'contentieux_commercial', title: "Contentieux commercial : tendances et best practices", description: "Retour d'expérience sur les dossiers récents et stratégies gagnantes en litiges commerciaux.", date: "1 Juin 2025", image: "/assets/img/droit_penal.jpg" }
];

export default function LatestPosts({ isHomePage = false }) {
  const displayedPosts = isHomePage ? newsPostsData.slice(0, 3) : newsPostsData;
  const sectionBg = isHomePage ? 'bg-light' : 'bg-white';
  const containerPadding = isHomePage ? 'py-5' : 'pt-0 pb-0'; 

  return (
    <section className={sectionBg}>
      <div className={`container ${containerPadding}`}>
        {isHomePage && (
          <div className="row mb-4 mb-lg-5">
            <div className="col-md-8 col-xl-5 text-center mb-4 mx-auto">
              <small className="text-uppercase text-primary fw-bold">Actualité</small>
              <h3 className="fs-2 fw-bold mb-4 heading">Dernières publications</h3>
            </div>
          </div>
        )}

        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {displayedPosts.map((post) => (
            <div key={post.id} className="col">
              <Link to={`/news/${post.id}`} className="text-decoration-none post-card-link">
                <div className="card border-0 h-100 shadow-sm post-card d-flex flex-column">
                  <div className="post-image-container">
                    <img src={post.image} alt={post.title} className="card-img-top post-image" />
                  </div>

                  <div className="card-body p-4 d-flex flex-column">
                    <h4 className="fs-5 fw-semibold text-dark mb-3 post-title">{post.title}</h4>
                    <p className="card-text text-muted mb-4 post-description">{post.description}</p>

                    <div className="mt-auto d-flex justify-content-start align-items-center text-muted small post-meta">
                      <FaCalendarAlt className="me-2" />
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {isHomePage && (
          <div className="mt-5 text-center">
            <Link
              to="/news"
              className="btn btn-warning px-4 py-2 fw-semibold align-items-center d-inline-flex gap-2"
            >
              Voir toutes les actualités <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
