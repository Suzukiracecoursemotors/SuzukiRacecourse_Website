import { Locale } from "@/i18n";
import Image from "next/image";
import React, { useEffect } from "react";
import alto from "../public/Alto/alto.png";
import altovxr from "../public/Alto/vxlalto.png";
import altovxl from "../public/Alto/alto1.png";
import altovxagsl from "../public/Alto/agsvxlalto.png";
import cultus1 from "../public/Cultus/Cultus-White.jpg";
import cultus2 from "../public/Cultus/Cultus-Gray.jpg";
import cultus3 from "../public/Cultus/New-Cultus-Brochure-title-.png";
import wagon1 from "../public/Wagonr/Wagonr-Back.png";
import wagon2 from "../public/Wagonr/Wagonr.png";
import wagon3 from "../public/Wagonr/Wagonr-Back.png";
import swift1 from "../public/Swift/02.png";
import swift2 from "../public/Swift/Swift-Back-Side-Angle.png";
import swift3 from "../public/Swift/Swift-Grey.png";
import bolan1 from "../public/Suzuki-Bolan-Front.jpg";
import bolan2 from "../public/Suzuki-Bolan-Front.jpg";
import ravi from "../public/suzuki-ravi6.jpg";
import Carosil from "../common/carosil";
import { useTranslations } from "next-intl";
type PricingPageProps = {
  params: { locale: Locale };
};

export default function SaleHome({ params: { locale } }: PricingPageProps) {
  const t = useTranslations({ locale, namespace: "page" });

  return (
    <section className="py-15 py-xl-20 bg-light">
      <div className="container">
        <div className="row mb-10">
          <div className="col">
            <h2 className="fw-bold text-dark"> Sales</h2>
          </div>
        </div>
        <div className="row g-3 g-xl-5 justify-content-between">
          {/* //carheadings */}
          <div className="col-xl-4">
            <ul
              className="nav nav-tabs flex-xl-column"
              id="component-1"
              role="tablist"
            >
              <li className="nav-item ">
                <button
                  className="nav-link fs-5 active text-blue"
                  id="component-1-1-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#component-1-1"
                  type="button"
                  role="tab"
                  aria-controls="component-1-1"
                  aria-selected="true"
                >
                  ALTO
                </button>
              </li>
              <li className="nav-item ">
                <button
                  className="nav-link fs-5 text-blue"
                  id="component-1-2-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#component-1-2"
                  type="button"
                  role="tab"
                  aria-controls="component-1-2"
                  aria-selected="false"
                >
                  CULTUS
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fs-5 text-blue"
                  id="component-1-3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#component-1-3"
                  type="button"
                  role="tab"
                  aria-controls="component-1-3"
                  aria-selected="false"
                >
                  WagnoR{" "}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fs-5 text-blue"
                  id="component-1-4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#component-1-4"
                  type="button"
                  role="tab"
                  aria-controls="component-1-4"
                  aria-selected="false"
                >
                  SWIFT
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fs-5 text-blue"
                  id="component-1-5-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#component-1-5"
                  type="button"
                  role="tab"
                  aria-controls="component-1-5"
                  aria-selected="false"
                >
                  BOLAN
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fs-5 text-blue"
                  id="component-1-6-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#component-1-6"
                  type="button"
                  role="tab"
                  aria-controls="component-1-6"
                  aria-selected="false"
                >
                  RAVI
                </button>
              </li>
            </ul>
          </div>
          {/* //cardbody */}

          <div className="col-xl-8">
            <div className="tab-content" id="component-1-content">
              <div
                className="tab-pane fade show active"
                id="component-1-1"
                role="tabpanel"
                aria-labelledby="component-1-1-tab"
              >
                <div className="row g-3 g-xl-5">
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={alto}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            ALTO VX
                          </h4>
                          <p className="text-secondary">Rs: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={altovxr}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            ALTO VXL
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={altovxl}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            ALTO VXR AGS
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={altovxagsl}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            ALTO VXL AGS
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-2"
                role="tabpanel"
                aria-labelledby="component-1-2-tab"
              >
                <div className="row g-3 g-xl-5">
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={cultus1}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Cultus VXR
                          </h4>
                          <p className="text-secondary">Rs: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={cultus2}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Cultus VXL
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={cultus3}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Cultus AGS
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-3"
                role="tabpanel"
                aria-labelledby="component-1-3-tab"
              >
                <div className="row g-3 g-xl-5">
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={wagon1}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Wagnon-R VXR{" "}
                          </h4>
                          <p className="text-secondary">Rs: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={wagon2}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Wagnon-R VXL{" "}
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={wagon3}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Wagnon-R AGS{" "}
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-4"
                role="tabpanel"
                aria-labelledby="component-1-4-tab"
              >
                <div className="row g-3 g-xl-5">
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={swift1}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Swift GL MT{" "}
                          </h4>
                          <p className="text-secondary">Rs: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={swift2}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Swift GL VT{" "}
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={swift3}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Swift GL VVT{" "}
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-5"
                role="tabpanel"
                aria-labelledby="component-1-5-tab"
              >
                <div className="row g-3 g-xl-5">
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={bolan1}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Bolan VX
                          </h4>
                          <p className="text-secondary">Rs: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={bolan2}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Bolan CARGO
                          </h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-6"
                role="tabpanel"
                aria-labelledby="component-1-6-tab"
              >
                <div className="row g-3 g-xl-5">
                  <div className="col-md-6" data-aos="flip-left">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={ravi}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-9">
                          <h4 className="card-title text-dark text-blue">
                            Ravi VX
                          </h4>
                          <p className="text-secondary">Rs: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg ">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
