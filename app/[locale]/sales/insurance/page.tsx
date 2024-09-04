import Image from "next/image";
import React from "react";
import insurancepic from "./pics/SuzukiAutoInsuranceArrangementProgram_1_122815.png";

const config = {
  header: "Suzuki Auto Insurance Arrangement Program",
  description:
    "Your Suzuki car is more than just a means of transportation; it's a valuable asset! SuzukiPakistan car insurance arrangement program provides you with a one-window solution for all your car coverage needs together with the following unmatchable multiple benefits, exclusively available at Pak Suzuki authorized dealerships.",
  benefits: [
    { title: "Best Premium Rate:", text: "Best Premium rate of up to 2.25%" },
    {
      title: "Online Policy Issuance:",
      text: "Hassle-free and convenient experience with online policy issuance",
    },
    {
      title: "Authorized Dealership Facility:",
      text: "Repairs at Suzuki Authorized 3S Dealerships, with certified technicians and equipment",
    },
    {
      title: "SGP",
      text: "Suzuki Genuine Parts (with 6 months Warranty)",
    },
    {
      title: "Depreciation:",
      text: "0% Depreciation (for the first 6 months)",
    },
    {
      title: "Policy:",
      text: "Conventional & Islamic both policies available.",
    },
    {
      title: "Available for Both Used and New Cars:",
      text: "Secure a peaceful journey for yourself and your Suzuki car by getting insured with us today! Visit Pak Suzuki dealerships near you.",
    },
  ],
  faqSection: "Frequently asked questions",
  faq: [
    {
      question: "What is Suzuki insurance Program?",
      answer:
        "The Suzuki Insurance Program is a comprehensive insurance solution designed to protect your Suzuki vehicle. It offers competitive premium rates, easy online policy issuance, and exclusive benefits at Pak Suzuki authorized dealerships. Whether you own a new or used Suzuki, this program provides peace of mind by ensuring your vehicle is covered with genuine Suzuki parts and repair services at certified 3S dealerships.",
    },
  ],
};

export default function FinanceandLease() {
  return (
    <article>
      <section className="py-10">
        <Image src={insurancepic} layout="responsive" alt="background-image" />
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9">
              <div>
                <br />
                <h1 className="display-4 text-blue">{config.header}</h1>
                <div>
                  <p className="fs-lg text-secondary">{config.description}</p>
                </div>
              </div>
              <div>
                {config.benefits.map((benefit, index) => (
                  <div key={index}>
                    <h5>{benefit.title}</h5>
                    <p className="fs-lg text-secondary">{benefit.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 py-xl-20 bg-black inverted">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8 mb-2 mb-lg-0">
              <h2>{config.faqSection}</h2>
            </div>
          </div>
          <div className="row mb-8">
            <div className="col-12">
              <div
                className="accordion accordion-highlight border-top border-bottom"
                id="accordion-1"
              >
                {config.faq.map((item, index) => (
                  <div className="accordion-item" key={index}>
                    <h2 className="accordion-header" id={`heading-1-${index}`}>
                      <button
                        className="accordion-button collapsed text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-1-${index}`}
                        aria-expanded="false"
                        aria-controls={`collapse-1-${index}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-1-${index}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading-1-${index}`}
                      data-bs-parent="#accordion-1"
                    >
                      <div className="accordion-body">
                        <p className="text-secondary">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
