
export default function HeaderSection() {
 

  return (
    <header className="header-with-bg"> 
      <div className="container pt-4 pt-xl-5">
        <div className="row mb-5">
          <div className="col-md-10 col-lg-8 text-center text-md-start mx-auto">
            <div className="text-center">
              <h1 className="display-5 mb-4 heading">
                <strong>Cabinet Maître ESSINGONE</strong>
                <br />
                <strong>We Help You Succeed</strong>
              </h1>
              <p className="mb-4">
                Rhoncus dui amet augue justo condimentum erat, est quisque. Sem aptent ante ultrices curabitur. Sagittis venenatis dolor dapibus, lectus phasellus.
              </p>
              <div className="d-flex flex-column flex-grow-0 align-items-center">
                <button className="btn btn-primary" type="submit">
                  Prendre un rendez-vous
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

