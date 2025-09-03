import { FaShieldAlt, FaUsers, FaFistRaised, FaHandshake } from 'react-icons/fa';
import '../styles/OurValues.css';

export default function OurValues() {
  const values = [
    {
      icon: <FaShieldAlt className="value-icon" />,
      title: "Intégrité",
      description: "Nous agissons avec honnêteté et transparence dans toutes nos relations professionnelles, en respectant les plus hauts standards éthiques."
    },
    {
      icon: <FaUsers className="value-icon" />,
      title: "Expertise",
      description: "Notre équipe d'avocats spécialisés possède une expertise pointue dans chaque domaine du droit pour vous offrir des conseils éclairés."
    },
    {
      icon: <FaHandshake className="value-icon" />,
      title: "Confiance",
      description: "Nous construisons des relations durables basées sur la confiance mutuelle, la discrétion et le respect de vos intérêts."
    },
    {
      icon: <FaFistRaised className="value-icon" />,
      title: "Résilience",
      description: "Le chemin vers la justice peut être parsemé d'embûches. Les membres de notre équipe font toujours preuve d'une grande résilience face aux défis, déterminés à défendre vos intérêts, peu importe la complexité de l'affaire."
    }
  ];

  return (
    <section className="our-values-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center mb-5">
            <h2 className="section-title">Nos Valeurs Fondamentales</h2>
            <p className="section-subtitle">
              Les principes qui guident notre pratique quotidienne et notre relation avec nos clients
            </p>
          </div>
        </div>
        
        <div className="row justify-content-center">
          {values.map((value, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="value-card-horizontal">
                <div className="value-icon-container-horizontal">
                  {value.icon}
                </div>
                <div className="value-content-horizontal">
                  <h4 className="value-title-horizontal">{value.title}</h4>
                  <p className="value-description-horizontal">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}