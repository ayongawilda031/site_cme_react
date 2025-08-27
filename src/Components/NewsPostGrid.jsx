import { Link } from 'react-router-dom';

export default function NewsPostGrid({ filteredPosts }) {
    return (
        <div className="row gy-3 row-cols-1 row-cols-md-2 row-cols-lg-3">
            {filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                    <div key={post.id} className="col">
                        <div className="card border-0">
                            <Link className="position-relative" to={`/news/article-${post.id}`}>
                                <img
                                    className="rounded img-fluid aspect-ratio-4x3 object-fit-cover w-100 card-img-top"
                                    alt={post.title}
                                    width="1024"
                                    height="1024"
                                    src={post.image}
                                />
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
                ))
            ) : (
                <div className="col-12 text-center py-5">
                    <p className="lead">Aucun article disponible.</p>
                </div>
            )}
        </div>
    );
}

