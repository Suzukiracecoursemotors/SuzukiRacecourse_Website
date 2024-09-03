import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import ed from "./pics/ed.jpg";
import ed1 from "./pics/SavebiguptoRs.800,000withFixedRateupto18Percent_1_080754.webp";

type PricingPageProps = {
  params: { locale: Locale };
};

export default async function CUC({ params: { locale } }: PricingPageProps) {
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
                    financed. Now you can sit back & relax at your home or
                    office and apply online! Suzuki Finance arrangement program
                    is a one of its kind innovative financing solution having
                    multiple value added benefits.
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
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1-1"
                      aria-expanded="false"
                      aria-controls="collapse-1-1"
                    >
                      What is the difference between an editor and a viewer ?
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Dolore cumque quos libero, ratione non hic nisi autem
                        dicta saepe asperiores repellendus quis ab est.
                        Repellendus dicta itaque aliquid officiis animi?
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1-2">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1-2"
                      aria-expanded="false"
                      aria-controls="collapse-1-2"
                    >
                      What if more editors are added to my team each month ?
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Voluptates quisquam aut quod culpa fugit voluptatibus
                        sunt, obcaecati eveniet impedit eligendi voluptatem
                        reiciendis cum consequatur sit quia mollitia. Nam,
                        tempora tempore!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1-3">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1-3"
                      aria-expanded="false"
                      aria-controls="collapse-1-3"
                    >
                      What payment methods do you offer ?
                    </button>
                  </h2>
                  <div
                    id="collapse-1-3"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-1-3"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est ullam soluta ipsam, commodi atque tempore debitis
                        quaerat molestias neque aperiam, doloribus vero?
                        Suscipit et dignissimos minus, vel distinctio odit.
                        Earum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1-4">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1-4"
                      aria-expanded="false"
                      aria-controls="collapse-1-4"
                    >
                      What is your refund policy?
                    </button>
                  </h2>
                  <div
                    id="collapse-1-4"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-1-4"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est ullam soluta ipsam, commodi atque tempore debitis
                        quaerat molestias neque aperiam, doloribus vero?
                        Suscipit et dignissimos minus, vel distinctio odit.
                        Earum.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1-5">
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1-5"
                      aria-expanded="false"
                      aria-controls="collapse-1-5"
                    >
                      Do you have educational or non-profit discounts ?
                    </button>
                  </h2>
                  <div
                    id="collapse-1-5"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-1-5"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="text-secondary">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Est ullam soluta ipsam, commodi atque tempore debitis
                        quaerat molestias neque aperiam, doloribus vero?
                        Suscipit et dignissimos minus, vel distinctio odit.
                        Earum.
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
