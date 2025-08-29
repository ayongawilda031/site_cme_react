import { BrowserRouter , Routes, Route} from 'react-router-dom';

import HomePage from './Pages/HomePage';
import NewsPage from './Pages/NewsPage'; 
import ContactPage from './Pages/ContactPage';
import AboutUsPage  from './Pages/AboutUsPage';
import ServicesPage from './Pages/ServicesPage';
import ProcessPage from './Pages/ProcessPage';



export default function Router() {
  return (
    <BrowserRouter> 
        <Routes> 
          <Route path="/" element={<HomePage />} /> 
          <Route path="/aboutus" element={<AboutUsPage />} /> 
          <Route path="/services" element={<ServicesPage />} /> 
          <Route path="/expertises" element={<ProcessPage />} />
          <Route path="/news" element={<NewsPage />} />  
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
    </BrowserRouter>
  )
}

