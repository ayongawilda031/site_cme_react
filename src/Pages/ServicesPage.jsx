import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import ServicesSection from '../Components/ServicesSection';
import OurServices,{services} from '../Components/OurServices';



export default function Services() {
  return (
    <>
      <NavBar />
      <ServicesSection />
      <OurServices showHeader={false} servicesList={services} />
      <Footer />
     
    </>
  );
}

