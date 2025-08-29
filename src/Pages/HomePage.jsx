import NavBar from '../Components/NavBar';
import HeaderSection from '../Components/HeaderSection';
import CabinetSection from '../Components/CabinetSection';
import OurServices,{services} from '../Components/OurServices'; 
import OurExpertises from '../Components/OurExpertises';    
import LatestPosts from '../Components/LatestPosts'; 
import OurTeam from '../Components/OurTeam';
import Footer from '../Components/Footer';         


export default function Home() {
  return (
    <>
      <NavBar />
      <HeaderSection />
      <CabinetSection />
      <OurServices showHeader={true} servicesList={services.slice(0, 3)} />
      <OurExpertises isHomePage={true} />
      <LatestPosts isHomePage={true} />
      <OurTeam />
      <Footer />
     
    </>
  );
}


