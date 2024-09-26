import Image from "next/image";
import React from "react";
import insurancepic from "./pics/SuzukiAutoInsuranceArrangementProgram_1_122815.png";
import Constants from "@/data/Constants";

const config = {
  header: "Suzuki Auto Insurance Arrangement Program",
  description:
    "Your Suzuki car is more than just a means of transportation; it's a valuable asset! The Suzuki Pakistan car insurance arrangement program provides you with a one-window solution for all your car coverage needs, along with the following unmatched benefits, exclusively available at Pak Suzuki authorized dealerships.",
  benefits: [
    {
      title: "Best Premium Rate:",
      text: "Enjoy the best premium rate of up to 2.25%.",
    },
    {
      title: "Online Policy Issuance:",
      text: "Experience hassle-free and convenient online policy issuance.",
    },
    {
      title: "Authorized Dealership Facility:",
      text: "Get repairs at Suzuki Authorized 3S Dealerships, with certified technicians and equipment.",
    },
    {
      title: "Suzuki Genuine Parts:",
      text: "Use Suzuki Genuine Parts (with 6 months Warranty) for your vehicle.",
    },
    {
      title: "Depreciation:",
      text: "0% Depreciation (for the first 6 months).",
    },
    {
      title: "Policy Options:",
      text: "Both Conventional and Islamic policies are available.",
    },
    {
      title: "Coverage for Used and New Cars:",
      text: "Secure a peaceful journey for yourself and your Suzuki car by getting insured with us today! Visit Pak Suzuki dealerships near you.",
    },
  ],
};

export default function InsurancePage() {
  return (
    <article>
      <section className="py-9">
        <Image
          src={insurancepic}
          layout="responsive"
          alt="Insurance Program Banner"
        />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9">
              <h1 className="display-4 text-dark py-3">{config.header}</h1>
              <p className="fs-lg text-secondary">{config.description}</p>
              <br />
              <div>
                <h5 className="mt-4 display-5 ">Key Benefits</h5>
                {config.benefits.map((benefit, index) => (
                  <div key={index} className="mb-4">
                    <h6>{benefit.title}</h6>
                    <p className="fs-lg text-secondary">{benefit.text}</p>
                  </div>
                ))}
                <div className="col-md-auto py-3">
                  <a
                    href={`tel:${Constants.Insurance}`}
                    className="btn btn-yellow btn-with-icon rounded-pill btn-lg"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    Book Appointments <i className="bi bi-telephone-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
