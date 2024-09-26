import { Locale } from "@/i18n";
import Image from "next/image";
import React from "react";
import ed from "./pics/ed.jpg";
import ed1 from "./pics/SavebiguptoRs.800,000withFixedRateupto18Percent_1_080754.webp";
import Constants from "@/data/Constants";

const config = {
  title: "What is Suzuki Finance Arrangement Program?",
  description:
    "Suzuki Finance Arrangement Program is the most convenient and hassle-free way of getting your car financed. Now you can sit back & relax at your home or office and apply online! Suzuki Finance Arrangement Program is a one of its kind innovative financing solution having multiple value added benefits.",
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
  eligibilityCriteria: [
    {
      criteria: "Minimum age of 21 years",
      eligible: true,
    },
    {
      criteria: "Valid CNIC",
      eligible: true,
    },
    {
      criteria: "Stable source of income",
      eligible: true,
    },
    {
      criteria: "Minimum salary requirement",
      eligible: false,
    },
    {
      criteria: "No prior loan defaults",
      eligible: true,
    },
  ],
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

// Component to display tick or cross icons
const TickCrossIcon = ({ value }: { value: boolean }) => {
  return <span>{value ? "✔️" : "❌"}</span>;
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
                <h1 className="display-4 text-dark">{config.title}</h1>
                <div>
                  <p className="fs-lg text-secondary py-2">
                    {config.description}
                  </p>
                </div>
              </div>
              <div>
                <h5 className="py-2">{config.advantagesTitle}</h5>
                <ul className="row g-3 g-xl-5">
                  {config.advantages.map((advantage, index) => (
                    <div className="col-lg-4" key={index}>
                      <div className="d-flex">
                        <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                          <i className="bi bi-check2 text-green"></i>
                        </div>
                        <div>
                          <p className="fs-lg">{advantage}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </ul>
              </div>

              <div>
                <div>
                  <p className="fs-lg text-secondary py-2">
                    {config.additionalInfo}
                  </p>
                </div>
              </div>

              <div>
                <div className="dflexrow">
                  <h5>{config.eligibilityTitle}</h5>
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

                {/* Eligibility Criteria Table */}
                <table className="table table-bordered text-center">
                  <thead>
                    <tr>
                      <th>Criteria</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {config.eligibilityCriteria.map((item, index) => (
                      <tr key={index}>
                        <td>{item.criteria}</td>
                        <td>
                          <TickCrossIcon value={item.eligible} />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
