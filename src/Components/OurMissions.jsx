export default function OurMissions() {
  return (
    <section className="our-missions-section">
      <div className="container">
        <div className="row align-items-center">
      
          <div className="col-lg-5">
            <div className="missions-image">
              <img 
                src="/assets/img/droit_public.jpg" 
                alt="Missions du cabinet CM&E Avocats" 
                className="img-fluid rounded-3"
              />
              <div className="image-overlay"></div>
            </div>
          </div>
          
        
          <div className="col-lg-7">
            <div className="missions-content">
              <h2 className="section-title">Nos Missions</h2>
              <p className="section-intro">
                Notre engagement envers l'excellence juridique et votre réussite.
              </p>

              <div className="mission-text">
                <p>
                  Nous nous engageons à fournir des services juridiques d'exception 
                  répondant aux plus hauts standards professionnels, avec un accompagnement 
                  personnalisé à chaque étape de vos démarches.
                </p>
                <p>
                  Notre mission : vous offrir des solutions sur mesure alliant expertise 
                  pointue et innovation pour défendre au mieux vos intérêts.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}