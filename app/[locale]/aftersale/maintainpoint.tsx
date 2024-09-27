import { getTranslations } from "next-intl/server";
import Image from "next/image";
import oil from "../public/aftersalejpg.jpg";
import Constants from "@/data/Constants";
import Maintain from "./maintainpoint";
import Whychose from "./whychose";

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
};

async function Cards() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <section className="py-1 py-xl-1">
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
    </>
  );
}

export default Cards;
