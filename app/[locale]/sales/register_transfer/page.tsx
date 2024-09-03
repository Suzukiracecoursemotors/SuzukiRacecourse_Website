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
      <section className="py-15 py-xl-20 bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div className="col-md-10 col-lg-6 mb-5 mb-lg-0">
              <h2 className="lh-sm mb-5">
                We create beautiful, functional spaces
              </h2>
              <div className="row g-2">
                <div className="col-md-6">
                  <ul className="list-group list-group-minimal">
                    <li className="list-group-item d-flex align-items-center mb-1">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Powerfull Tools
                    </li>
                    <li className="list-group-item d-flex align-items-center mb-1">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Online Booking
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      24/7 Availability
                    </li>
                  </ul>
                </div>
                <div className="col-md-6">
                  <ul className="list-group list-group-minimal">
                    <li className="list-group-item d-flex align-items-center mb-1">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Quick delivery{" "}
                      <span className="badge bg-green rounded-pill ms-2">
                        New
                      </span>
                    </li>
                    <li className="list-group-item d-flex align-items-center mb-1">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      100% Guarantee
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Disscounts
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div
              className="col-md-10 col-lg-5 position-relative"
              data-aos="fade-up"
            >
              <div className="equal-1-1 rounded-circle">
                {/* <figure className="background" style="background-image: url('./assets/images/service-2.jpg')"></figure> */}
              </div>
              {/* <img className="position-absolute bottom-0 start-0 rotate" src="./assets/images/svg/featured.svg" alt=""> */}
            </div>
          </div>
        </div>
      </section>
      <section className="pb-15 pb-xl-20">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-5">
              <h2>Get closer to your customers.</h2>
              <ul className="list-group list-group-minimal">
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-check2 text-green"></i>
                  </div>
                  High-fidelity interactive design
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-check2 text-green"></i>
                  </div>
                  Immersive prototyping experience
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-check2 text-green"></i>
                  </div>
                  Outstranding component animations
                </li>
              </ul>
            </div>
            <div className="col-lg-6" data-aos="fade-up">
              <div className="browser bg-white shadow-lg">
                {/* <img src="./assets/images/pages/event.jpg" className="img-fluid" alt="Image"> */}
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="pb-15 pb-xl-20 overflow-hidden">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="carousel carousel-with-nav">
                <div data-carousel='{"controls": false, "autoHeight": true ,"gutter": 200, "center": true, "mouseDrag": true }'>
                  <div>
                    <blockquote className="text-center">
                      {/* <span className="logo"><img src="./assets/images/logo/logo-1.svg" alt="Logo"></span> */}
                      <h4 className="fs-2 my-3">
                        “Amazing experience I love it a lot. Thanks to the team
                        that dreams come true.”
                      </h4>
                      <footer className="blockquote-footer">
                        <span>
                          <span className="text-black">Michael Doe</span>{" "}
                          Creative Director
                        </span>
                      </footer>
                    </blockquote>
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
