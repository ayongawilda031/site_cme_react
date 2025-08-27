
export default function Newsletter() {
  return (
    <section className="py-5">
      <div className="container">
        <div className="row">
          <div className="col col-lg-10 col-xl-9 mx-auto">
            <div className="card border-0 hero" data-bs-theme="light">
              <div className="card-body">
                <div className="text-center py-4 py-md-5">
                  <small className="text-uppercase">Weekly email updates</small>
                  <h3 className="fs-2 fw-bold mb-4 heading">Join our Newsletter</h3>
                  <form className="d-flex justify-content-center flex-wrap flex-lg-nowrap" method="post" data-bs-theme="light">
                    <div className="my-2">
                      <input className="border rounded-pill shadow-sm form-control" type="email" name="email" placeholder="Your Email" />
                    </div>
                    <div className="my-2">
                      <button className="btn btn-primary shadow ms-2" type="submit">Subscribe</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


