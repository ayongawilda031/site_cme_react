import { useLocation, Link } from 'react-router-dom';
import '../styles/HeaderBanner.css';

export default function HeaderBanner({ title, description }) {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);
  

  const getDefaultTitle = () => {
    if (location.pathname === '/services') return 'Nos services';
    if (location.pathname === '/expertises') return 'Nos expertises';
    if (location.pathname === '/about') return 'À propos de nous';
    if (location.pathname === '/contact') return 'Contact';
    if (location.pathname === '/news') return 'Actualités';
    if (location.pathname.includes('/services/')) return 'Détail du service';
    if (location.pathname.includes('/expertises/')) return 'Détail de l\'expertise';
    if (location.pathname.includes('/news/')) return 'Détail de l\'actualité';
    return 'Page';
  };


  return (
    <section>
      <div className="header-banner">
        <div className="container">
          <div className="row mb-4">
            <div className="col-md-8 col-xl-5 mx-auto">
              <h1 className="fw-bold mb-3">{title || getDefaultTitle()}</h1>
              <p>{description}</p>
              
             
              {(pathnames.length > 1) && (
                <nav aria-label="breadcrumb" className="mt-4">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Accueil</Link>
                    </li>
                    
                    {pathnames.map((value, index) => {
                      const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
                      const isLast = index === pathnames.length - 1;
                      const pageName = value.charAt(0).toUpperCase() + value.slice(1);
                      
                   
                      let displayName = pageName;
                      if (value === 'services') displayName = 'Services';
                      if (value === 'expertises') displayName = 'Expertises';
                      if (value === 'about') displayName = 'À propos';
                      if (value === 'contact') displayName = 'Contact';
                      if (value === 'news') displayName = 'Actualités';
                      
                      return isLast ? (
                        <li key={routeTo} className="breadcrumb-item active" aria-current="page">
                          {displayName}
                        </li>
                      ) : (
                        <li key={routeTo} className="breadcrumb-item">
                          <Link to={routeTo}>{displayName}</Link>
                        </li>
                      );
                    })}
                  </ol>
                </nav>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}