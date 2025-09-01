import { BrowserRouter , Routes, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import NewsPage from './Pages/NewsPage'; 
import ContactPage from './Pages/ContactPage';
import AboutUsPage  from './Pages/AboutUsPage';
import ServicesPage from './Pages/ServicesPage';
import ExpertisesPage from './Pages/ExpertisesPage';
import ServiceDetailPage from './Pages/ServiceDetailPage';
import ExpertiseDetailPage from './Pages/ExpertiseDetailPage';



export default function Router() {
  return (
    <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/aboutus" element={<AboutUsPage />} /> 
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/expertises" element={<ExpertisesPage />} />
          <Route path="/news" element={<NewsPage />} />  
          <Route path="/contact" element={<ContactPage />} /> 
          <Route path="/services/:serviceId" element={<ServiceDetailPage />} />
          <Route path="/expertises/:expertiseId" element={<ExpertiseDetailPage />} />
        </Routes>
    </BrowserRouter>
  )
}

