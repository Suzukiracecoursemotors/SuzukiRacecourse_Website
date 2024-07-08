import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import CUCbanner from "../../public/WhatsApp Image 2024-07-08 at 11.26.08 AM.jpeg";
import Carosil from "../../common/carosil";

type PricingPageProps = {
  params: { locale: Locale };
};

export default async function CUC({ params: { locale } }: PricingPageProps) {
  const t = await getTranslations({ locale, namespace: "" });

  return (
    <article>
      <section className="py-10 py-xl-15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div>
                <h1 className="display-1 text-blue">Insurance </h1>
                <div>
                  <p className="fs-lg text-secondary">
                    Welcome to Suzuki Racecourse Motor Sales Team, your trusted
                    source for high-quality Suzuki vehicles and exceptional
                    customer service. Our dealership offers a wide range of new
                    and pre-owned Suzuki cars, SUVs, and trucks, ensuring you
                    find the perfect vehicle to meet your needs. Our
                    knowledgeable sales team is dedicated to providing a
                    seamless car buying experience, with transparent pricing and
                    flexible financing options. Whether you're looking for the
                    latest models or certified pre-owned vehicles, we have
                    something for everyone.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>Insurance</h5>
                  <p className="fs-lg text-secondary">
                    Welcome to Suzuki Racecourse Motor Sales Team, your trusted
                    source for high-quality Suzuki vehicles and exceptional
                    customer service. Our dealership offers a wide range of new
                    and pre-owned Suzuki cars, SUVs, and trucks, ensuring you
                    find the perfect vehicle to meet your needs. Our
                    knowledgeable sales team is dedicated to providing a
                    seamless car buying experience, with transparent pricing and
                    flexible financing options. Whether you're looking for the
                    latest models or certified pre-owned vehicles, we have
                    something for everyone.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <p className="fs-lg text-secondary">
                    Welcome to Suzuki Racecourse Motor Sales Team, your trusted
                    source for high-quality Suzuki vehicles and exceptional
                    customer service. Our dealership offers a wide range of new
                    and pre-owned Suzuki cars, SUVs, and trucks, ensuring you
                    find the perfect vehicle to meet your needs. Our
                    knowledgeable sales team is dedicated to providing a
                    seamless car buying experience, with transparent pricing and
                    flexible financing options. Whether you're looking for the
                    latest models or certified pre-owned vehicles, we have
                    something for everyone.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Insurance Method</h5>
                  <p className="fs-lg text-secondary">
                    Welcome to Suzuki Racecourse Motor Sales Team, your trusted
                    source for high-quality Suzuki vehicles and exceptional
                    customer service. Our dealership offers a wide range of new
                    and pre-owned Suzuki cars, SUVs, and trucks, ensuring you
                    find the perfect vehicle to meet your needs. Our
                    knowledgeable sales team is dedicated to providing a
                    seamless car buying experience, with transparent pricing and
                    flexible financing options. Whether you're looking for the
                    latest models or certified pre-owned vehicles, we have
                    something for everyone.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <p className="fs-lg text-secondary">
                    Welcome to Suzuki Racecourse Motor Sales Team, your trusted
                    source for high-quality Suzuki vehicles and exceptional
                    customer service. Our dealership offers a wide range of new
                    and pre-owned Suzuki cars, SUVs, and trucks, ensuring you
                    find the perfect vehicle to meet your needs. Our
                    knowledgeable sales team is dedicated to providing a
                    seamless car buying experience, with transparent pricing and
                    flexible financing options. Whether you're looking for the
                    latest models or certified pre-owned vehicles, we have
                    something for everyone.
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
