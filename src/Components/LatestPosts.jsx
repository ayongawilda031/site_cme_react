import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function LatestPosts() {
  return (
    <section>
      <div className="container py-5">
        <div className="row mb-4 mb-lg-5">
          <div className="col-md-8 col-xl-5 text-center mb-4 mx-auto">
            <small className="text-uppercase">from our blog</small>
            <h3 className="fs-2 fw-bold mb-4 heading">Latest Posts</h3>
            <Link className="btn btn-primary" to="/news">
              See all&nbsp;
              <FaArrowRight/>
            </Link>
          </div>
        </div>
        <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
         
          <div key={1} className="post-tag-unknown">
            <div className="card border-0">
              <Link className="position-relative" to="/blog/article-1">
                <img className="rounded img-fluid aspect-ratio-4x3 object-fit-cover w-100 card-img-top" alt="Reimagining Digital Design" width="1024" height="1024" src="/assets/img/projects/project1.webp" />
                <span className="badge bg-dark bg-opacity-75 rounded-pill position-absolute p-2 me-3 mb-3 px-3 bottom-0 end-0">
                  <time dateTime="Jan 12, 2025">Jan 12, 2025</time>
                </span>
              </Link>
              <div className="card-body">
                <Link to="/blog/article-1">
                  <h4 className="fs-5 fw-semibold text-body">Reimagining Digital Design</h4>
                </Link>
                <p className="card-text">Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
              </div>
            </div>
          </div>
         
          <div key={2} className="post-tag-unknown">
            <div className="card border-0">
              <Link className="position-relative" to="/blog/article-2">
                <img className="rounded img-fluid aspect-ratio-4x3 object-fit-cover w-100 card-img-top" alt="Another Design Perspective" width="1024" height="1024" src="/assets/img/projects/project2.webp" />
                <span className="badge bg-dark bg-opacity-75 rounded-pill position-absolute p-2 me-3 mb-3 px-3 bottom-0 end-0">
                  <time dateTime="Feb 1, 2025">Feb 1, 2025</time>
                </span>
              </Link>
              <div className="card-body">
                <Link to="/blog/article-2">
                  <h4 className="fs-5 fw-semibold text-body">Another Design Perspective</h4>
                </Link>
                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
          </div>
       
          <div key={3} className="post-tag-unknown">
            <div className="card border-0">
              <Link className="position-relative" to="/blog/article-3">
                <img className="rounded img-fluid aspect-ratio-4x3 object-fit-cover w-100 card-img-top" alt="The Future of Branding" width="1024" height="1024" src="/assets/img/projects/Designer.jpeg" />
                <span className="badge bg-dark bg-opacity-75 rounded-pill position-absolute p-2 me-3 mb-3 px-3 bottom-0 end-0">
                  <time dateTime="Mar 10, 2025">Mar 10, 2025</time>
                </span>
              </Link>
              <div className="card-body">
                <Link to="/blog/article-3">
                  <h4 className="fs-5 fw-semibold text-body">The Future of Branding</h4>
                </Link>
                <p className="card-text">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

