import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import ExpertisesSection from '../Components/ExpertisesSection';
import OurExpertises from '../Components/OurExpertises';




export default function Expertises() {
  return (
    <>
      <NavBar />
      <ExpertisesSection />
      <OurExpertises isHomePage={false} />
      <Footer />
     
    </>
  );
}

