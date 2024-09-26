import Image from "next/image";
import React from "react";
import homepic from "../../public/mechanical.jpg";
import Constants from "@/data/Constants";

const config = {
  title: "Suzuki Mechanical Workshop: Where Expertise Meets Excellence",
  note: "NOTE: √: Applicable X: Not Applicable",
  Endnote:
    "By choosing Suzuki, you're ensuring that your vehicle receives the best care possible, keeping it in peak condition for years to come.",
  desc1:
    "At Suzuki, our mechanical workshops are designed to provide top-tier service and expertise for all Suzuki vehicles. Whether it's routine maintenance, engine diagnostics, or complex repairs, our skilled technicians ensure that your vehicle is treated with the utmost care. We believe in delivering excellence through advanced tools, genuine Suzuki parts, and a team of certified professionals. With a strong focus on precision and attention to detail, we ensure that every service is completed to the highest industry standards.",
  title2: "Customer Choice of Engine Oil",
  des2: "We prioritize our customers' preferences when it comes to engine oil selection. Suzuki vehicles require precision and high-quality products to maintain their performance. Our workshop offers a variety of engine oils, tailored to meet the diverse needs of each Suzuki model, ensuring optimal engine health and longevity.",
  title3: "Comprehensive Services",
  des3: "We offer a wide range of services at our mechanical workshop, including:",
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
  teamTitle: "Why Trust Suzuki's Expert Technicians?",
  teamDesc:
    "At Suzuki Mechanical Workshop, our team of certified technicians brings years of experience and advanced technical knowledge to every vehicle they service. All of our mechanics undergo continuous training to stay updated with the latest advancements in Suzuki vehicle technology. Equipped with cutting-edge diagnostic tools, they ensure that every repair, no matter how complex, is done right the first time. Whether it's a routine service or a major repair, you can count on Suzuki's professionals to provide unparalleled service quality.",
  warrantyTitle: "Extended Warranty & Genuine Parts Guarantee",
  warrantyDesc:
    "We believe in offering peace of mind to our customers. That's why we provide an extended warranty on all services performed at our workshop, using only genuine Suzuki parts. Every part is designed and tested to meet the highest quality standards, ensuring long-lasting performance and reliability for your vehicle. By opting for Suzuki’s certified parts and services, you protect your investment and ensure your vehicle’s optimal performance for the years ahead.",
};

export default function MechanicalWorkshop() {
  return (
    <article>
      <section className="py-9">
        <Image
          src={homepic}
          layout="responsive"
          alt="Suzuki Mechanical Workshop"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h1 className="display-3 py-4">{config.title}</h1>
              <p className="fs-lg text-secondary">{config.desc1}</p>
              <h5>{config.title2}</h5>
              <p className="fs-lg text-secondary">{config.des2}</p>
              <div className="dflexrow">
                <h5>{config.title3}</h5>
                <div className="col-md-auto py-3">
                  <a
                    href={`tel:${Constants.CRO}`}
                    className="btn btn-yellow btn-with-icon rounded-pill btn-lg"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    Book Appointments <i className="bi bi-telephone-fill"></i>
                  </a>
                </div>
              </div>
              <p className="fs-lg text-secondary">{config.des3}</p>
              <div className="row g-3 g-xl-5">
                {config.services.map((service, index) => (
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
              <br />
              <br />
              <h5>{config.teamTitle}</h5>
              <p className="fs-lg text-secondary">{config.teamDesc}</p>
              <h5>{config.warrantyTitle}</h5>
              <p className="fs-lg text-secondary">{config.warrantyDesc}</p>
              <br />
              <p>{config.Endnote}</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
