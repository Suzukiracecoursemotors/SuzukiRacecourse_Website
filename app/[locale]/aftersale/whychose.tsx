import Image from "next/image";
import oil from "../public/aftersalejpg.jpg";
import Constants from "@/data/Constants";

const aftersaleConfig = {
  whyChooseUs: {
    title: "Why Choose Suzuki?",
    features: [
      "1. Genuine Parts",
      "2. Certified Technicians",
      "3. State-of-the-art Equipment",
    ],
    buttonText: "Reserve Appointment",
  },
};

async function Whychose() {
  return (
    <>
      <section className="py-15 py-xl-20">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="frame">
                <Image
                  src={oil}
                  layout="responsive"
                  className="img-fluid"
                  alt=""
                />
                <span></span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <h2 className="fw-bold">{aftersaleConfig.whyChooseUs.title}</h2>
              {aftersaleConfig.whyChooseUs.features.map((feature, index) => (
                <h6 className="text-secondary" key={index} data-aos="fade-up">
                  {feature}
                </h6>
              ))}
              <div className="col-md-auto py-3">
                <a
                  href={`tel:${Constants.CRO}`}
                  className="btn btn-yellow btn-with-icon rounded-pill btn-lg"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  {aftersaleConfig.whyChooseUs.buttonText}{" "}
                  <i className="bi bi-telephone-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Whychose;
