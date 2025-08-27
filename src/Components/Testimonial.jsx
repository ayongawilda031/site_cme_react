
export default function Testimonial() {
  return (
    <section>
      <div className="container">
        <div className="border rounded border-0 d-flex flex-column justify-content-between align-items-center p-4 p-md-5 mx-auto" style={{ maxWidth: '800px' }}>
          <div className="d-flex flex-column align-items-center py-3 py-lg-4">
            <div className="d-flex align-items-center mb-4">
              <img
                className="rounded-circle object-fit-cover border border-4 border-info border-opacity-10 flex-shrink-0 me-3"
                width="80"
                height="80"
              
                src="/assets/img/team/avatar2.jpg"
                alt="Avatar John Smith"
              />
              <div>
                <p className="fw-bold mb-0">John Smith</p>
                <p className="text-muted mb-0">Erat netus</p>
              </div>
            </div>
            <p className="lead fs-4 fw-normal text-center">
              <strong>This is the best&nbsp; app in the world.</strong> Fast, powerful and affordable, with immediate results
            </p>
            <button className="btn btn-primary shadow ms-2" type="submit">Read story</button>
          </div>
        </div>
      </div>
    </section>
  );
}

