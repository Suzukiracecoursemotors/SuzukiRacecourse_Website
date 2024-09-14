import { Locale } from "@/i18n";
import Image from "next/image";
import React from "react";
import ed from "./pics/ed.jpg";
import ed1 from "./pics/SavebiguptoRs.800,000withFixedRateupto18Percent_1_080754.webp";

const config = {
  title: "What is Suzuki Finance Arrangement Program?",
  description:
    "Suzuki Finance Arrangement Program is the most convenient and hassle-free way of getting your car financed. Now you can sit back & relax at your home or office and apply online! Suzuki Finance arrangement program is a one of its kind innovative financing solution having multiple value added benefits.",
  advantagesTitle:
    "The Advantages of getting your car financed through Suzuki Finance Arrangement Program are:",
  advantages: [
    "Fast & Hassle free processing",
    "Down payment as per your affordability",
    "Comprehensive Insurance at lowest rates",
    "Priority Deliveries",
    "Best competitive & affordable rate",
    "No hidden charges",
    "Transparent Deals",
  ],
  additionalInfo:
    "Keeping up with the age of digital transformation and with customer centric approach, Pak Suzuki, the No. 1 Automobile Manufacturer bank joined hands with leading Auto Finance Banks of Pakistan to provide an innovative financing solution having multiple value added benefits. This program is available online and also at Pak Suzuki authorized dealerships and Partner Bank branches across Pakistan. The program offers attractive features along with unmatched benefits as compared to any other Auto Financing program. Then why wait? Apply for Suzuki Auto Finance now and get your vehicle on easy terms. For further details, please apply online; contact your nearest Pak Suzuki authorized dealership. Note: All loan processing and approvals are subject to the prevailing credit policy of Partner Bank/s.",
  eligibilityTitle: "Eligibility and Documentation",
  faqTitle: "Frequently asked questions",
  faq: [
    {
      question: "What is Suzuki Finance Arrangement Program?",
      answer:
        "Suzuki Finance Arrangement Program is the most convenient and hassle-free way of getting your car financed. Now you can sit back & relax at your home or office and apply online! Suzuki Finance Arrangement Program is a one-of-its-kind innovative financing solution with multiple value-added benefits.",
    },
    {
      question: "What is Suzuki Lease Program?",
      answer:
        "The Suzuki Lease Program allows customers to lease a vehicle for a specific period, typically with lower monthly payments compared to traditional financing. This program offers the flexibility to upgrade to a new vehicle at the end of the lease term, making it an attractive option for those who prefer driving the latest models without long-term commitment.",
    },
  ],
};

export default async function FinanceandLease() {
  return (
    <article>
      <section className="py-9">
        <Image src={ed1} layout="responsive" alt="Finance Banner" />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9">
              <div>
                <br />
                <h1 className="display-4 text-blue">{config.title}</h1>
                <div>
                  <p className="fs-lg text-secondary">{config.description}</p>
                </div>
              </div>
              <div>
                <h5>{config.advantagesTitle}</h5>
                <ul className="list-group">
                  {config.advantages.map((advantage, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex align-items-center"
                    >
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      {advantage}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div>
                  <p className="fs-lg text-secondary">
                    {config.additionalInfo}
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>{config.eligibilityTitle}</h5>
                  <Image src={ed} layout="responsive" alt="Eligibility" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* //faq */}
      <section className="py-15 py-xl-20 bg-black inverted">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8 mb-2 mb-lg-0">
              <h2>{config.faqTitle}</h2>
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
                    <h2
                      className="accordion-header"
                      id={`heading-1-${index + 1}`}
                    >
                      <button
                        className="accordion-button collapsed text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse-1-${index + 1}`}
                        aria-expanded="false"
                        aria-controls={`collapse-1-${index + 1}`}
                      >
                        {item.question}
                      </button>
                    </h2>
                    <div
                      id={`collapse-1-${index + 1}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading-1-${index + 1}`}
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
