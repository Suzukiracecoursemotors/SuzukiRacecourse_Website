import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import ed from "./pics/ed.jpg";
import ed1 from "./pics/SavebiguptoRs.800,000withFixedRateupto18Percent_1_080754.webp";

type PricingPageProps = {
  params: { locale: Locale };
};

export default async function FinanceandLease({
  params: { locale },
}: PricingPageProps) {
  const t = await getTranslations({ locale, namespace: "" });

  return (
    <article>
      <section className="py-10">
        <Image
          src={ed1}
          layout="responsive"
          alt=" background-image background "
        />{" "}
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9">
              <div>
                <br />

                <h1 className="display-4 text-blue">
                  What is Suzuki Finance Arrangement Program?
                </h1>
                <div>
                  <p className="fs-lg text-secondary">
                    Suzuki Finance Arrangement Program is the most convenient
                    and hassle free way of getting your car financed. Now you
                    can sit back & relax at your home or office and apply
                    online! Suzuki Finance arrangement program is a one of its
                    kind innovative financing solution having multiple value
                    added benefits.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>
                    The Advantages of getting your car financed through Suzuki
                    Finance Arrangement Program are:
                  </h5>
                  <li className="list-group-item d-flex align-items-center">
                    <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                      <i className="bi bi-check2 text-green"></i>
                    </div>
                    Fast & Hassle free processing
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                      <i className="bi bi-check2 text-green"></i>
                    </div>
                    Down payment as per your affordability
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                      <i className="bi bi-check2 text-green"></i>
                    </div>
                    Comprehensive Insurance at lowest rates
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                      <i className="bi bi-check2 text-green"></i>
                    </div>
                    Priority Deliveries
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                      <i className="bi bi-check2 text-green"></i>
                    </div>
                    Best competitive & affordable rate
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                      <i className="bi bi-check2 text-green"></i>
                    </div>
                    No hidden charges
                  </li>
                  <li className="list-group-item d-flex align-items-center">
                    <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                      <i className="bi bi-check2 text-green"></i>
                    </div>
                    Transparent Deals
                  </li>
                </div>
              </div>

              <div>
                <div>
                  <p className="fs-lg text-secondary">
                    Keeping up with the age of digital transformation and with
                    customer centric approach, Pak Suzuki, the No. 1 Automobile
                    Manufacturer bank joined hands with leading Auto Finance
                    Banks of Pakistan to provide an innovative financing
                    solution having multiple value added benefits. This program
                    is available online and also at Pak Suzuki authorized
                    dealerships and Partner Bank branches across Pakistan. The
                    program offers attractive features along with unmatched
                    benefits as compared to any other Auto Financing program.
                    Then why wait? Apply for Suzuki Auto Finance now and get
                    your vehicle on easy terms. For further details, please
                    apply on line; contact your nearest Pak Suzuki authorized
                    dealership. Note: All loan processing and approvals are
                    subject to the prevailing credit policy of Partner Bank/s.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Eligibility and Documentation</h5>
                  <Image
                    src={ed}
                    layout="responsive"
                    alt=" background-image"
                  />{" "}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 py-xl-20 bg-black inverted">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8 mb-2 mb-lg-0">
              <h2>Frequently asked questions</h2>
            </div>
          </div>
          <div className="row mb-8">
            <div className="col-12">
              <div
                className="accordion accordion-highlight border-top border-bottom"
                id="accordion-1"
              >
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1-1">
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1-1"
                      aria-expanded="false"
                      aria-controls="collapse-1-1"
                    >
                      What is Suzuki Finance Arrangement Program?
                    </button>
                  </h2>
                  <div
                    id="collapse-1-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-1-1"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="text-secondary">
                        Suzuki Finance Arrangement Program is the most
                        convenient and hassle-free way of getting your car
                        financed. Now you can sit back & relax at your home or
                        office and apply online! Suzuki Finance Arrangement
                        Program is a one-of-its-kind innovative financing
                        solution with multiple value-added benefits.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1-2">
                    <button
                      className="accordion-button collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1-2"
                      aria-expanded="false"
                      aria-controls="collapse-1-2"
                    >
                      What is Suzuki Lease Program?
                    </button>
                  </h2>
                  <div
                    id="collapse-1-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-1-2"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="text-secondary">
                        The Suzuki Lease Program allows customers to lease a
                        vehicle for a specific period, typically with lower
                        monthly payments compared to traditional financing. This
                        program offers the flexibility to upgrade to a new
                        vehicle at the end of the lease term, making it an
                        attractive option for those who prefer driving the
                        latest models without long-term commitment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
