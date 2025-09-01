import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import OurExpertises from '../Components/OurExpertises';
import HeaderBanner from '../Components/HeaderBanner';

export default function Expertises() {
  return (
    <>
      <NavBar />
      <HeaderBanner 
        title="Nos Expertises" 
        description="Découvrez nos domaines d'expertise juridique et comment notre équipe d'avocats spécialisés peut vous accompagner dans vos projets." 
      />
      <OurExpertises isHomePage={false} />
      <Footer />
    </>
  );
}