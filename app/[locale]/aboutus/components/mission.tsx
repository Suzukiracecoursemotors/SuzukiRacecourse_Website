export default async function Missions() {
  return (
    <section className="py-15 py-xl-20 bg-black inverted">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1>Missions & Visions</h1>
            <div className="accordion accordion-highlight" id="accordion-1">
              {/* Render each technique directly */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-1">
                  <button
                    className="accordion-button fs-lg collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="false"
                    aria-controls="collapse-1"
                  >
                    <i className="bi bi-asterisk text-yellow fs-5 me-2" />
                    Mission{" "}
                  </button>
                </h2>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-1"
                  data-bs-parent="#accordion-1"
                >
                  <div className="accordion-body">
                    <p className="text-secondary">
                      Our Mission is to Earn customers trust by delivering sales
                      and service experiences with high Quality customer care,
                      integrity and enthusiasm.We value our customers feedback
                      that makes us strive for excellence through continuous
                      improvement.
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header" id="heading-2">
                  <button
                    className="accordion-button fs-lg collapsed text-white"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    <i className="bi bi-asterisk text-yellow fs-5 me-2" />
                    Vision{" "}
                  </button>
                </h2>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse"
                  aria-labelledby="heading-2"
                  data-bs-parent="#accordion-1"
                >
                  <div className="accordion-body">
                    <p className="text-secondary">
                      To work for customer satisfaction and long termretention
                      in a dedicated , motivated , service oriented and
                      profesional working environment.To make our Dealership No.
                      1 choice any auto-mobile related service.
                    </p>
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
