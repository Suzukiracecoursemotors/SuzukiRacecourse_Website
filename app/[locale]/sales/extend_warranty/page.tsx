import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import warrentypic from "./Pics/EW-Ecstarbanner-1920x400.jpg";
import freeoilpic from "./Pics/exchangecontent.jpg";
import un1 from "./Pics/Untitled.png";
import un2 from "./Pics/111.png";

type PricingPageProps = {
  params: { locale: Locale };
};

export default async function ExtendWarrenty({
  params: { locale },
}: PricingPageProps) {
  const t = await getTranslations({ locale, namespace: "" });

  return (
    <article>
      <section className="py-10">
        <Image
          src={warrentypic}
          layout="responsive"
          alt=" background-image background "
        />{" "}
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <Image
              src={freeoilpic}
              layout="responsive"
              alt=" background-image background "
            />{" "}
          </div>
          <br />
          <div className="row justify-content-center">
            <Image
              src={un1}
              layout="responsive"
              alt=" background-image background "
            />{" "}
          </div>{" "}
          <h5>Customer choice of Engine Oil selection is as follows:</h5>
          <div className="row justify-content-center">
            <Image
              src={un2}
              layout="responsive"
              alt=" background-image background "
            />{" "}
          </div>
          <h5>NOTE: √: Applicable X: Not Applicable</h5>
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
