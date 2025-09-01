import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import ContactSection from '../Components/ContactSection';
import FAQSection from '../Components/FAQSection';
import HeaderBanner from '../Components/HeaderBanner';

export default function Contact() {
  return (
    <>
      <NavBar />
      <HeaderBanner 
        title="Contactez-nous" 
        description="Notre cabinet est à votre écoute pour répondre à toutes vos questions juridiques." 
      />
      
      <ContactSection />
      <FAQSection />
      <Footer />
    </>
  );
}