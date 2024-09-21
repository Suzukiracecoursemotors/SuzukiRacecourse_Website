import Image from "next/image";
import React from "react";
import homepic from "./bodyandpaint.webp";

const config = {
  title: "Mechanical Workshop",
  note: "NOTE: √: Applicable X: Not Applicable",
  Endnote:
    " By choosing Suzuki, you're ensuring that your vehicle receives the best care possible, keeping it in peak condition for years to come.",
  desc1:
    "At Suzuki, our mechanical workshops are designed to provide top-tier service and expertise for all Suzuki vehicles. Whether it's routine maintenance, engine diagnostics, or complex repairs, our skilled technicians ensure that your vehicle is treated with the utmost care. We believe in delivering excellence through advanced tools, genuine Suzuki parts, and a team of certified professionals.",
  title2: "Customer Choice of Engine Oil",
  des2: "We prioritize our customers' preferences when it comes to engine oil selection. Suzuki vehicles require precision and high-quality products to maintain their performance. Our workshop offers a variety of engine oils, tailored to meet the diverse needs of each Suzuki model.",
  title3: "Comprehensive Services",
  des3: "We offer a wide range of services at our mechanical workshop, including:",
  services: [
    "Engine Overhauling",
    "Transmission Repair",
    "Brake System Maintenance",
    "Suspension Tuning",
    "Electrical Diagnostics",
    "Air Conditioning Repair",
  ],
  whyChoose: [
    {
      title: "1. Genuine Parts",
      description:
        "We use only authentic Suzuki parts to maintain the integrity of your vehicle.",
    },
    {
      title: "2. Certified Technicians",
      description:
        "Our team is trained to handle every Suzuki model with expertise.",
    },
    {
      title: "3. State-of-the-art Equipment",
      description:
        "Our workshops are equipped with the latest tools and technology to ensure accurate and efficient repairs.",
    },
  ],
};

export default function MechanicalWorkshop() {
  return (
    <article>
      <section className="py-9">
        <Image
          src={homepic}
          layout="responsive"
          alt=" background-image background "
        />{" "}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h1 className="display-2">{config.title}</h1>
              <p className="fs-lg text-secondary">{config.desc1}</p>

              <h5>{config.title2}</h5>
              <p className="fs-lg text-secondary">{config.des2}</p>

              <h5>{config.title3}</h5>
              <p className="fs-lg text-secondary">{config.des3}</p>

              <ul className="list-group">
                {config.services.map((service, index) => (
                  <li
                    key={index}
                    className="list-group-item d-flex align-items-center"
                  >
                    <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                      <i className="bi bi-check2 text-green"></i>
                    </div>
                    {service}
                  </li>
                ))}
              </ul>

              <h1 className="display-3 text-blue">Why Choose Suzuki?</h1>
              {config.whyChoose.map((item, index) => (
                <div key={index}>
                  <h5 className="">{item.title}</h5>
                  <p className="fs-lg  text-secondary">{item.description}</p>
                  <br />
                </div>
              ))}

              <p>{config.Endnote}</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
