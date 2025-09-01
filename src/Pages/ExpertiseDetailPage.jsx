import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import HeaderBanner from '../Components/HeaderBanner'; 
import ExpertiseDetail from '../Components/ExpertiseDetail';

export default function Expertises() {
  return (
    <>
      <NavBar />
      <HeaderBanner 
        title="Nos Expertises" 
      />
      <ExpertiseDetail />
      <Footer />
    </>
  );
}