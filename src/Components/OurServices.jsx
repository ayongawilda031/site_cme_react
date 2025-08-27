import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";


export default function OurServices() {
  return (
    <section>
      <div className="container py-5">
        <div className="row mb-4">
          <div className="col-md-8 col-xl-5 text-center mx-auto">
            <small className="text-uppercase">What we offer</small>
            <h3 className="fs-2 fw-bold mb-4 heading">Our Services</h3>
          </div>
        </div>
        <div className="row">
          <div className="col col-xl-10 mx-auto">
            <div className="row gy-4 row-cols-1 row-cols-md-2 mx-auto">
              <div>
                <div className="card bg-info-subtle border-0" data-bs-theme="light">
                  <div className="card-body d-flex align-items-center p-4">
                    <div>
                      <h5 className="fs-3 fw-bold mb-3">Graphic Design</h5>
                      <p className="mb-3">Ullamcorper at massa himenaeos vel. Vel laoreet eget semper commodo, ac habitasse venenatis. Porta aliquet ornare, nec tellus metus fames.</p>
                      <Link className="fw-semibold" to="#">
                        Learn more&nbsp;
                        <FaArrowRight/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card bg-success-subtle border-0" data-bs-theme="light">
                  <div className="card-body d-flex align-items-center p-4">
                    <div>
                      <h5 className="fs-3 fw-bold mb-3">Interface Design</h5>
                      <p className="mb-3">Ullamcorper at massa himenaeos vel. Vel laoreet eget semper commodo, ac habitasse venenatis. Porta aliquet ornare, nec tellus metus fames.</p>
                      <Link className="fw-semibold" to="#">
                        Learn more&nbsp;
                        <FaArrowRight/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card bg-danger-subtle border-0" data-bs-theme="light">
                  <div className="card-body d-flex align-items-center p-4">
                    <div>
                      <h5 className="fs-3 fw-bold mb-3">Branding</h5>
                      <p className="mb-3">Ullamcorper at massa himenaeos vel. Vel laoreet eget semper commodo, ac habitasse venenatis. Porta aliquet ornare, nec tellus metus fames.</p>
                      <Link className="fw-semibold" to="#">
                        Learn more&nbsp;
                        <FaArrowRight/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <div className="card bg-warning-subtle border-0" data-bs-theme="light">
                  <div className="card-body d-flex align-items-center p-4">
                    <div>
                      <h5 className="fs-3 fw-bold mb-3">Video Production</h5>
                      <p className="mb-3">Ullamcorper at massa himenaeos vel. Vel laoreet eget semper commodo, ac habitasse venenatis. Porta aliquet ornare, nec tellus metus fames.</p>
                      <Link className="fw-semibold" to="#">
                        Learn more&nbsp;
                        <FaArrowRight/>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

