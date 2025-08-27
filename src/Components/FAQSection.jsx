export default function FAQSection() {
  return (
    <section>
      <div className="container py-4">
        <div className="row mb-4">
          <div className="col-md-8 col-xl-5 text-center mx-auto">
            <h3 className="display-6 text-uppercase fw-bold">FAQ</h3>
            <p>Erat netus est hendrerit, nullam et quis ad cras porttitor iaculis. Bibendum vulputate cras aenean.</p>
          </div>
        </div>
        <div className="row">
          <div className="col col-md-10 col-lg-7 mx-auto">
            <div className="accordion" role="tablist" id="accordion-1">
              <div className="accordion-item">
                <h2 className="accordion-header" role="tab">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-1" aria-expanded="true" aria-controls="accordion-1 .item-1">
                    Aenean arcu euismod aliquam, volutpat consequat?
                  </button>
                </h2>
                <div className="accordion-collapse collapse show item-1" role="tabpanel" data-bs-parent="#accordion-1">
                  <div className="accordion-body">
                    <p className="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" role="tab">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-2" aria-expanded="false" aria-controls="accordion-1 .item-2">
                    Lorem quam erat placerat mollis, rhoncus senectus?
                  </button>
                </h2>
                <div className="accordion-collapse collapse item-2" role="tabpanel" data-bs-parent="#accordion-1">
                  <div className="accordion-body">
                    <p className="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" role="tab">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accordion-1 .item-3" aria-expanded="false" aria-controls="accordion-1 .item-3">
                    Iaculis accumsan id, facilisis proin ipsum velit neque?
                  </button>
                </h2>
                <div className="accordion-collapse collapse item-3" role="tabpanel" data-bs-parent="#accordion-1">
                  <div className="accordion-body">
                    <p className="mb-0">Nullam id dolor id nibh ultricies vehicula ut id elit. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Donec id elit non mi porta gravida at eget metus.</p>
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

