import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import insurancepic from "./pics/SuzukiAutoInsuranceArrangementProgram_1_122815.png";

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
          src={insurancepic}
          layout="responsive"
          alt=" background-image background "
        />{" "}
        <br />
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12 col-xl-9">
              <div>
                <br />

                <h1 className="display-4 text-blue">
                  Suzuki Auto Insurance Arrangement Program{" "}
                </h1>
                <div>
                  <p className="fs-lg text-secondary">
                    Your Suzuki car is more than just a means of transportation;
                    its a valuable asset! SuzukiPakistan car insurance
                    arrangement program provides you with one window solution
                    for all your car coverage needs together with following
                    unmatchable multiple benefits, exclusively available at Pak
                    Suzuki authorized dealerships
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>1. Best Premium Rate:</h5>
                  <p className="fs-lg text-secondary">
                    Best Premium rate of upto 2.25%
                  </p>
                  <h5>2. Online Policy Issuance:</h5>
                  <p className="fs-lg text-secondary">
                    Hassle free and convenient experience with online policy
                    issuance
                  </p>

                  <h5>3. Authorized Dealership facility:</h5>
                  <p className="fs-lg text-secondary">
                    Repairs at Suzuki Authorized 3S Dealerships, with certified
                    technicians and equipment
                  </p>
                  <h5>4. SGP</h5>
                  <p className="fs-lg text-secondary">
                    Suzuki Genuine Parts (with 6 months Warranty)
                  </p>
                  <h5>5. Depreciation:</h5>
                  <p className="fs-lg text-secondary">
                    0% Depreciation (for first 6 months)
                  </p>
                  <h5>6.Policy:</h5>
                  <p className="fs-lg text-secondary">
                    Conventional & Islamic both policies available.
                  </p>
                  <h5>7. Available for both used and new cars</h5>
                  <p className="fs-lg text-secondary">
                    Secure a peaceful journey for yourself and your Suzuki car
                    by getting insured with us today! visit Pak Suzuki
                    dealerships near you.
                  </p>
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
                      What is Suzuki insurance Program?
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
                        The Suzuki Insurance Program is a comprehensive
                        insurance solution designed to protect your Suzuki
                        vehicle. It offers competitive premium rates, easy
                        online policy issuance, and exclusive benefits at Pak
                        Suzuki authorized dealerships. Whether you own a new or
                        used Suzuki, this program provides peace of mind by
                        ensuring your vehicle is covered with genuine Suzuki
                        parts and repair services at certified 3S dealerships.
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
