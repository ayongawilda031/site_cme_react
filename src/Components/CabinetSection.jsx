import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CabinetSection() {
  return (
    <div className="container-fluid py-5 bg-white">
      <div className="container">
      
        <div className="row justify-content-center align-items-center g-4">
          
         
          <div className="col-lg-12 col-md-12 text-center">

         
            <div className="row justify-content-center align-items-center g-4">
              
            
              <div className="col-lg-6 col-md-12 mb-3 mb-lg-0 text-center text-lg-start">
                <span className="badge bg-primary text-white px-3 py-1 rounded-pill mb-3 d-inline-block">
                  À Propos de Nous
                </span>

                <h2 className="display-6 fw-bold mb-3 text-dark lh-sm">
                  L'excellence Le Socle Du Cabinet Maître ESSINGONE
                </h2>

                <p className="mb-4 text-muted lh-lg">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <Link to="/aboutus" className="btn btn-warning px-3 py-2 fw-semibold text-black rounded-3 home-about-btn">
                  En savoir plus
                  <FaArrowRight className="ms-2"/>
                </Link>
              </div>

           
              <div className="col-lg-6 col-md-12 d-flex justify-content-center">
                <div className="bg-gradient rounded-3 p-3">
                  <img 
                    src="/assets/img/projects/project.jpeg"
                    alt="Cabinet"
                    className="img-fluid rounded-2 shadow-sm w-75"
                  />
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
