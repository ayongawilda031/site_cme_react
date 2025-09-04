import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import OurServices, { services } from '../Components/OurServices';
import HeaderBanner from '../Components/HeaderBanner';

export default function Services() {
  return (
    <>
      <NavBar />
      <HeaderBanner 
        title="Nos Services" 
        description="Découvrez l'ensemble de nos services juridiques sur mesure, conçus pour répondre à tous vos besoins et défendre au mieux vos intérêts." 
      />
      <OurServices showHeader={false} servicesList={services} />

      <Footer />
    </>
  );
}