import { FaPhone, FaMapMarkerAlt, FaEnvelope } from "react-icons/fa";
import '../styles/Contact.css'

export default function ContactSection() {
  return (
    <section>
      <div className="container contact-form-superimposed">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row contact-form-card">
              <div className="col-md-6 contact-info-column">
                <h2 className="contact-title">Contactez-nous</h2>
                <p className="contact-subtitle">
                  Notre équipe d'avocats est à votre disposition pour vous accompagner dans vos démarches juridiques.
                </p>
                
                <div className="contact-item">
                  <div className="contact-icon-container"><FaMapMarkerAlt/></div>
                  <div>
                    <h6 className="contact-item-title">Adresse</h6>
                    <p className="contact-item-text">adresse adresse <br />adresse, Gabon</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-container"><FaEnvelope/></div>
                  <div>
                    <h6 className="contact-item-title">Email</h6>
                    <p className="contact-item-text">contact@cabinet-juridique.fr</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-container"><FaPhone/></div>
                  <div>
                    <h6 className="contact-item-title">Téléphone</h6>
                    <p className="contact-item-text">Tél: +241 53 36 25<br />Fax: +241 35 57 36</p>
                  </div>
                </div>

                <h6 className="social-media-title">Horaires d'ouverture</h6>
                <div className="opening-hours">
                  <p className="contact-item-text">Lundi - Vendredi: 9h - 18h</p>
                </div>
              </div>
              
              <div className="col-md-6 contact-form-column">
                <h2 className="contact-form-title">Envoyez un message</h2>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Nom complet" required />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Adresse email" required />
                  </div>
                  <div className="mb-3">
                    <input type="tel" className="form-control" id="phone" placeholder="Téléphone" />
                  </div>
                  <div className="mb-3">
                    <select className="form-control" id="subject" required>
                      <option value="">Sélectionnez un sujet</option>
                      <option value="conseil">Conseil Juridique</option>
                      <option value="representation">Représentation Légale</option>
                      <option value="redaction">Rédaction d'Actes</option>
                      <option value="mediation">Médiation</option>
                      <option value="autre">Autre</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" id="message" rows="4" placeholder="Votre message" required></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 contact-submit-btn">Envoyer le message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}