import NavBar from '../Components/NavBar';
import HeroSection from '../Components/HeaderSection';
import ProjectGallery from '../Components/ProjectGallery';
import OurServices from '../Components/OurServices'; 
import OurProcess from '../Components/OurProcess';   
import ProcessSteps from '../Components/ProcessSteps'; 
import Testimonial from '../Components/Testimonial'; 
import Newsletter from '../Components/NewsLetter';   
import LatestPosts from '../Components/LatestPosts'; 
import OurTeam from '../Components/OurTeam';
import Footer from '../Components/Footer';         


export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <ProjectGallery />
      <OurServices />
      <OurProcess />
      <ProcessSteps />
      <Testimonial />
      <Newsletter />
      <LatestPosts />
      <OurTeam />
      <Footer />
     
    </>
  );
}


