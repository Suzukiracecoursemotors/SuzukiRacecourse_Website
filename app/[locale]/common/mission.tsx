export default function Missions() {
  const accordionItems = [
    {
      id: 1,
      title: "Mission",
      content:
        "Our Mission is to earn customers' trust by delivering sales and service experiences with high-quality customer care, integrity, and enthusiasm. We value our customers' feedback, which drives us to strive for excellence through continuous improvement.",
    },
    {
      id: 2,
      title: "Vision",
      content:
        "To work for customer satisfaction and long-term retention in a dedicated, motivated, service-oriented, and professional working environment. Our goal is to make our dealership the No. 1 choice for any automobile-related service.",
    },
  ];

  return (
    <section className="py-2 bg-white inverted">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <h1 className="text-dark">Missions & Visions</h1>
            <div
              className="accordion accordion-highlight text-dark"
              id="accordion-1"
            >
              {accordionItems.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <h2 className="accordion-header" id={`heading-${item.id}`}>
                    <button
                      className="accordion-button fs-lg collapsed text-dark "
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse-${item.id}`}
                      aria-expanded="false"
                      aria-controls={`collapse-${item.id}`}
                    >
                      <i className="bi bi-asterisk text-yellow fs-5 me-2  " />
                      <p className="text-dark">{item.title}</p>
                    </button>
                  </h2>
                  <div
                    id={`collapse-${item.id}`}
                    className="accordion-collapse  collapse"
                    aria-labelledby={`heading-${item.id}`}
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body  ">
                      <p className="text-dark  ">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
