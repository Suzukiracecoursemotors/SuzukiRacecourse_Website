import Image from "next/image";
import React from "react";
import bodyShopImg from "../../public/paint-booth-banner.jpg";
import Constants from "@/data/Constants";

const config = {
  title: "Suzuki Body and Paint Shop: Precision in Every Detail",
  desc1:
    "Suzuki’s Body and Paint Shop is designed to restore your vehicle’s appearance to factory standards, whether it's dealing with minor dents or major collision damage. Our team of experts uses cutting-edge technology and genuine Suzuki parts to ensure your vehicle looks and performs like new.",
  title2: "Our Comprehensive Body and Paint Services",
  des2: "At Suzuki, we offer a wide range of body and paint services to keep your vehicle looking pristine. Our services include:",
  services: [
    "Collision Repair and Restoration",
    "Paintless Dent Removal",
    "Full Body Repainting",
    "Scratch and Scuff Repair",
    "Bumper and Fender Repair",
    "Frame and Structural Repair",
    "Glass Repair and Replacement",
    "Custom Paint Matching and Blending",
    "Headlight Restoration",
    "Interior Upholstery Repair",
  ],
  teamTitle: "Experienced Technicians You Can Trust",
  teamDesc:
    "Our certified technicians have years of experience working on Suzuki vehicles, ensuring that every job is completed to the highest standard. Using advanced diagnostic and repair tools, we guarantee that your vehicle will be restored to its original factory condition, maintaining both its appearance and safety.",
  warrantyTitle: "Genuine Parts and Warranty Protection",
  warrantyDesc:
    "We believe in quality and longevity. That's why all of our repairs use genuine Suzuki parts and come with an extended warranty, so you can drive with confidence knowing that your vehicle has received the best care possible. Our parts are tested to meet strict Suzuki quality standards, ensuring maximum durability and performance.",
  note: "NOTE: √: Applicable X: Not Applicable",
  Endnote:
    "Trust Suzuki’s Body and Paint Shop to restore your vehicle's beauty and safety. We take pride in delivering excellence, whether it’s a minor repair or a full restoration.",
};

export default function BodyShop() {
  return (
    <article>
      <section className="py-9">
        <Image
          src={bodyShopImg}
          layout="responsive"
          alt="Suzuki Body and Paint Shop"
        />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h1 className="display-3 py-4">{config.title}</h1>
              <p className="fs-lg text-secondary">{config.desc1}</p>

              <h5>{config.title2}</h5>
              <p className="fs-lg text-secondary">{config.des2}</p>
              <div className="dflexrow">
                <div className="col-md-auto py-3">
                  <a
                    href={`tel:${Constants.BODYSHOP}`}
                    className="btn btn-yellow btn-with-icon rounded-pill btn-lg"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    Book Appointments <i className="bi bi-telephone-fill"></i>
                  </a>
                </div>
              </div>
              <div className="row g-3 g-xl-5">
                {config.services.map((service, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="d-flex">
                      <div className="icon-box icon-box-sm bg-opaque-blue rounded-circle me-2">
                        <i className="bi bi-check2 text-blue"></i>
                      </div>
                      <div>
                        <p className="fs-lg">{service}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

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
