import { Link } from "react-router-dom";
import { FaPhone } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";


export default function ContactSection() {
  return (
    <section>
      
      <div className="contact-header-banner" >
        <div className="contact-container">
          <div className="row mb-4">
            <div className="col-md-8 col-xl-5 mx-auto">
              <h1 className="fw-bold mb-3 heading">Contact us</h1>
              <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
            </div>
          </div>
        </div>
      </div>
      
     
      <div className="container contact-form-superimposed">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="row contact-form-card">
              
         
              <div className="col-md-6 contact-info-column">
                <h2 className="contact-title">Contactez-nous</h2>
                <p className="contact-subtitle">
                  Sociosqu viverra lectus placerat sem efficitur molestie vehicula cubilia leo etiam nam.
                </p>
                
                <div className="contact-item">
                  <div className="contact-icon-container"><FaLocationDot/>
                  </div>
                  <div>
                    <h6 className="contact-item-title">Head Office</h6>
                    <p className="contact-item-text">Jalan Cempaka Wangi No 22</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-container"><FaEnvelope/>
                  </div>
                  <div>
                    <h6 className="contact-item-title">Email Us</h6>
                    <p className="contact-item-text">support@yourdomain.tld</p>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon-container"><FaPhone/>
                  </div>
                  <div>
                    <h6 className="contact-item-title">Call Us</h6>
                    <p className="contact-item-text">Phone: +6221.2002.2012<br />Fax: +6221.2002.2013</p>
                  </div>
                </div>

                <h6 className="social-media-title">Follow our social media</h6>
                <div className="social-media-icons">
                  <Link to="#" className="social-icon facebook"><FaFacebook/>
                  </Link>
                  <Link to="#" className="social-icon twitter"><FaTwitter/>
                  </Link>
                  <Link to="#" className="social-icon linkedin"><FaLinkedin/>
                  </Link>
                </div>
              </div>
              
              <div className="col-md-6 contact-form-column">
                <h2 className="contact-form-title">Envoyez un message</h2>
                <form>
                  <div className="mb-3">
                    <input type="text" className="form-control" id="name" placeholder="Name" />
                  </div>
                  <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder="Email" />
                  </div>
                  <div className="mb-3">
                    <textarea className="form-control" id="message" rows="4" placeholder="Message"></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100 contact-submit-btn">Envoyer</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

