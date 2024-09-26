import { getTranslations } from "next-intl/server";
import Image from "next/image";
import oil from "../public/aftersalejpg.jpg";
import Constants from "@/data/Constants";

const aftersaleConfig = {
  title: "AfterSales",
  sections: [
    {
      icon: "bi-gear-fill",
      title: "Mechanical WorkShop",
      description:
        "At Suzuki, our mechanical workshops are designed to provide top-tier service and expertise for all Suzuki vehicles. Whether its routine maintenance, engine diagnostics, our skilled technicians ensure that your vehicle is treated with the utmost care.",
      link: "/en/aftersale/service",
      linkText: "Learn More",
    },
    {
      icon: "bi-bookmark-star",
      title: "Extended Warranty",
      description:
        "We prioritize our customers preferences when it comes to engine oil selection. Suzuki vehicles require precision and high-quality products to maintain their performance. Our workshop offers a variety of engine oils, tailored to meet the diverse needs of each Suzuki model.",
      link: "/en/aftersale/extend_warrenty",
      linkText: "Learn More",
    },
    {
      icon: "bi-paint-bucket",
      title: "Paint & BodyShop",
      description:
        "Our state-of-the-art body shop provides expert repairs for all Suzuki models. If your vehicle's frame has been compromised in an accident, our team specializes in restoring its structural integrity, ensuring safety and performance.",
      link: "/en/aftersale/bodyshop",
      linkText: "Learn More",
    },
  ],
  whyChooseUs: {
    title: "Why Choose Suzuki?",
    features: [
      "1. Genuine Parts",
      "2. Certified Technicians",
      "3. State-of-the-art Equipment",
    ],
    buttonText: "Reserve Appointment",
  },
  services: [
    "First Free Inspection (1,000 Km)",
    "Second Free Inspection (5,000 Km)",
    "Schedule Maintenance (every 5,000 Km)",
    "A/C Service, Repair, Replacement & Installation",
    "Engine Tuning Petrol & CNG",
    "Wheel Balancing & Alignment",
    "Brake Overhauling",
    "Suspension Repair & Overhauling",
    "Washing & Interior Cleaning",
    "Transmission Repair & Replacement",
    "Battery Check & Replacement",
    "Fuel System Cleaning",
    "Exhaust System Repair & Replacement",
    "Tire Rotation & Replacement",
    "Oil Change & Filter Replacement",
    "Radiator & Cooling System Service",
    "Headlight & Taillight Replacement",
    "Windshield & Window Repair",
    "Electrical Diagnostics & Repair",
    "Steering & Suspension Inspection",
  ],

  maintenanceTitle: "We maintain all types of vehicles.",
};

async function Aftersale() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <section className="py-5 py-xl-2">
        <div className="container mt-15">
          <div className="row mb-9">
            <div className="col text-center">
              <h2 className="fw-bold mb-0">{aftersaleConfig.title}</h2>
            </div>
          </div>
          <div className="row g-5 ">
            {aftersaleConfig.sections.map((section, index) => (
              <div
                className="col-md-6 col-lg-4 text-center"
                data-aos="fade-up"
                data-aos-delay={index * 100}
                key={index}
              >
                <i className={`bi ${section.icon} fs-1 text-primary`}></i>
                <h4 className="fs-5 mt-4">{section.title}</h4>
                <p className="text-secondary mx-2">{section.description}</p>
                <a href={section.link} className="underline">
                  {section.linkText}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

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
                <h6 className="text-secondary" key={index}>
                  {feature}
                </h6>
              ))}
              <div className="col-md-auto py-3">
                <a
                  href={`tel:${Constants.PHONE}`}
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

      <section className="py-5">
        <div className="container">
          <div className="row mb-10">
            <div className="col-lg-6">
              <h2 className="fw-light">
                <span className="fw-bold">
                  {aftersaleConfig.maintenanceTitle}
                </span>
              </h2>
            </div>
          </div>
          <div className="row g-3 g-xl-5">
            {aftersaleConfig.services.map((service, index) => (
              <div className="col-lg-4" key={index}>
                <div className="d-flex">
                  <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-check2 text-green"></i>
                  </div>
                  <div>
                    <p className="fs-lg">{service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Aftersale;
