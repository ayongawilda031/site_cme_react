import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import ServiceDetail from '../Components/ServiceDetail';
import HeaderBanner from '../Components/HeaderBanner'; 

export default function Services() {
  return (
    <>
      <NavBar />
      <HeaderBanner 
        title="Nos Services" 
      />
      <ServiceDetail />
      <Footer />
    </>
  );
}