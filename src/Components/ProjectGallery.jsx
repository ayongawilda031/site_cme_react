import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa';

export default function ProjectGallery() {
  useEffect(() => {
    Swiper.use([Navigation]);

    const mySwiper3 = new Swiper('#swiper-3', {
      direction: 'horizontal',
      effect: 'slide',
      spaceBetween: 20,
      breakpoints: {
        768: { slidesPerView: 2 },
        992: { slidesPerView: 3 },
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      if (mySwiper3) {
        mySwiper3.destroy();
      }
    };
  }, []);

  return (
    <section className="py-5">
      <div className="container">
        {/* Titre */}
        <div className="row mb-4 mb-lg-5">
          <div className="col-md-8 col-xl-5 text-center mx-auto">
            <small className="text-uppercase">Our best work</small>
            <h3 className="fs-2 fw-bold mb-4 heading">Project Gallery</h3>
            <button className="btn btn-primary" type="button">
              See all <FaArrowRight className="ms-1" />
            </button>
          </div>
        </div>

        {/* Swiper */}
        <div className="row">
          <div className="position-relative px-sm-5">
            <div className="swiper d-flex flex-column" id="swiper-3">
              <div className="swiper-wrapper">
                {[
                  { src: '/assets/img/projects/project1.webp', alt: 'Project 1' },
                  { src: '/assets/img/projects/project2.webp', alt: 'Project 2' },
                  { src: '/assets/img/projects/Designer.jpeg', alt: 'Designer' },
                  { src: '/assets/img/projects/project4.webp', alt: 'Project 4' },
                ].map((project, i) => (
                  <div className="swiper-slide" key={i}>
                    <div className="card border-0 project-item">
                      <img
                        className="object-fit-cover card-img w-100 d-block"
                        src={project.src}
                        alt={project.alt}
                        height="500"
                      />
                      <div className="card-img-overlay text-white">
                        <h4 className="fs-5 fw-bold">Project</h4>
                        <p>Tincidunt quisque tincidunt, nam iaculis.</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="swiper-nav-standalone position-absolute d-flex w-100 h-100 justify-content-between align-items-center top-0 start-0">
              <div className="swiper-button-prev me-2">
                <button className="btn btn-primary btn-circle" type="button">
                  <FaArrowLeft />
                </button>
              </div>
              <div className="swiper-button-next">
                <button className="btn btn-primary btn-circle" type="button">
                  <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
