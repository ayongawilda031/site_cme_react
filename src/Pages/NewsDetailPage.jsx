import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';      
import HeaderBanner from '../Components/HeaderBanner'; 
import NewsDetail from '../Components/NewsDetail';

export default function News() {
  return (
    <>
      <NavBar />
      <HeaderBanner 
        title="Nos Actualités" 
      />
      <NewsDetail />
      <Footer />
    </>
  );
}