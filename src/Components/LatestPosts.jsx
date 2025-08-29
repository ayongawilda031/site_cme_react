import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';


export const newsPostsData = [
    { id: 1, title: "Reimagining Digital Design", description: "Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.", date: "Jan 12, 2025", image: '/assets/img/projects/project1.webp' },
    { id: 2, title: "Another Design Perspective", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", date: "Feb 1, 2025", image: '/assets/img/projects/project2.webp' },
    { id: 3, title: "The Future of Branding", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.", date: "Mar 10, 2025", image: '/assets/img/projects/Designer.jpeg' },
    { id: 4, title: "Innovation in UX", description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.", date: "Apr 5, 2025", image: '/assets/img/projects/project1.webp' },
    { id: 5, title: "Digital Marketing Trends", description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", date: "May 20, 2025", image: '/assets/img/projects/project2.webp' },
    { id: 6, title: "Creative Agency Insights", description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.", date: "Jun 1, 2025", image: '/assets/img/projects/Designer.jpeg' },
    { id: 7, title: "Visual Storytelling", description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.", date: "Jul 15, 2025", image: '/assets/img/projects/project1.webp' },
    { id: 8, title: "Web Development Best Practices", description: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.", date: "Aug 1, 2025", image: '/assets/img/projects/project2.webp' },
];

export default function LatestPosts({ isHomePage = false }) {
  
  const displayedPosts = isHomePage ? newsPostsData.slice(0, 3) : newsPostsData;

  return (
    <section className="bg-light">
      <div className="container py-5">
        {isHomePage && (
          <div className="row mb-4 mb-lg-5">
            <div className="col-md-8 col-xl-5 text-center mb-4 mx-auto">
              <small className="text-uppercase">Actualité</small>
              <h3 className="fs-2 fw-bold mb-4 heading">Dernières publications</h3>
            </div>
          </div>
        )}
        <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
          {displayedPosts.map((post) => (
            <div key={post.id} className="post-tag-unknown">
              <div className="card border-0">
                <Link className="position-relative" to={`/news/article-${post.id}`}>
                  <img className="rounded img-fluid aspect-ratio-4x3 object-fit-cover w-100 card-img-top" alt={post.title} width="1024" height="1024" src={post.image} />
                  <span className="badge bg-dark bg-opacity-75 rounded-pill position-absolute p-2 me-3 mb-3 px-3 bottom-0 end-0">
                    <time dateTime={post.date}>{post.date}</time>
                  </span>
                </Link>
                <div className="card-body">
                  <Link to={`/news/article-${post.id}`}>
                    <h4 className="fs-5 fw-semibold text-body">{post.title}</h4>
                  </Link>
                  <p className="card-text">{post.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {isHomePage && (
          <div className="mt-4 text-center">
            <Link to="/news" className="btn btn-warning px-4 py-2 fw-semibold  align-items-center justify-content-center mx-auto">
              Voir tout&nbsp;
                <FaArrowRight />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}