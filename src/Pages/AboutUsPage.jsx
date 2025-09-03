import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import CabinetSection from '../Components/CabinetSection';
import HeaderBanner from '../Components/HeaderBanner'; 
import OurMissions from '../Components/OurMissions';
import OurValues from '../Components/OurValues';


export default function AboutUsPage() {
  return (
    <>
      <NavBar />
      <HeaderBanner 
        title="À propos de nous" 
        description="Découvrez notre cabinet d'avocats, nos valeurs et notre équipe d'experts juridiques dévoués à votre réussite." 
      />
      <CabinetSection />
      <OurMissions />
      <OurValues />
      
      <Footer />
    </>
  );
}