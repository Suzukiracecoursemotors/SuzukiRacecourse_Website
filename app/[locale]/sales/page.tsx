import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import bannersales from "../public/bannersales.jpg";
import Carosil from "../common/carosil";

type PricingPageProps = {
  params: { locale: Locale };
};

export default async function Sale({ params: { locale } }: PricingPageProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  return (
    <section className="py-15 py-xl-20 bg-light">
      <div className="container">
        <div className="row mb-10">
          <div className="col">
            <h2 className="fw-bold text-dark"> Pricing Cars</h2>
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
              <li className="nav-item">
                <button
                  className="nav-link fs-5 active"
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
              <li className="nav-item">
                <button
                  className="nav-link fs-5"
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
                  className="nav-link fs-5"
                  id="component-1-3-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#component-1-3"
                  type="button"
                  role="tab"
                  aria-controls="component-1-3"
                  aria-selected="false"
                >
                  SWIFT
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fs-5"
                  id="component-1-4-tab"
                  data-bs-toggle="pill"
                  data-bs-target="#component-1-4"
                  type="button"
                  role="tab"
                  aria-controls="component-1-4"
                  aria-selected="false"
                >
                  WagnoR{" "}
                </button>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link fs-5"
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
                  className="nav-link fs-5"
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
          <div className="col-xl-8">
            <div className="tab-content" id="component-1-content">
              <div
                className="tab-pane fade show active"
                id="component-1-1"
                role="tabpanel"
                aria-labelledby="component-1-1-tab"
              >
                <div className="row g-3 g-xl-5">
                  <div className="col-md-6" data-aos="fade-up">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={bannersales}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-5">
                          <h4 className="card-title text-dark">ALTO VX</h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg mt-1">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="fade-up">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={bannersales}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-5">
                          <h4 className="card-title text-dark">ALTO VXR</h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg mt-1">
                            See more <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </a>
                  </div>
                  <div className="col-md-6" data-aos="fade-up">
                    <a
                      href=""
                      className="card equal-md-1-1 card-hover-border bg-white"
                    >
                      <div className="card-wrap">
                        <div className="card-header pb-0">
                          <Image
                            className="background "
                            src={bannersales}
                            layout="responsive"
                            alt="background image"
                          />
                        </div>
                        <div className="card-footer mt-20 pt-5">
                          <h4 className="card-title text-dark">ALTO VXR AGS</h4>
                          <p className="text-secondary">RS: 24,000,00/- </p>
                          <p className="underline action text-red fs-lg mt-1">
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
                <div className="col-md-6" data-aos="fade-up">
                  <a
                    href=""
                    className="card equal-md-1-1 card-hover-border bg-white"
                  >
                    <div className="card-wrap">
                      <div className="card-header pb-0">
                        <Image
                          className="background "
                          src={bannersales}
                          layout="responsive"
                          alt="background image"
                        />
                      </div>
                      <div className="card-footer mt-20 pt-5">
                        <h4 className="card-title text-dark">CULTUS VXR</h4>
                        <p className="text-secondary">RS: 24,000,00/- </p>
                        <p className="underline action text-red fs-lg mt-1">
                          See more <i className="bi bi-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-3"
                role="tabpanel"
                aria-labelledby="component-1-3-tab"
              >
                <div className="col-md-6" data-aos="fade-up">
                  <a
                    href=""
                    className="card equal-md-1-1 card-hover-border bg-white"
                  >
                    <div className="card-wrap">
                      <div className="card-header pb-0">
                        <Image
                          className="background "
                          src={bannersales}
                          layout="responsive"
                          alt="background image"
                        />
                      </div>
                      <div className="card-footer mt-20 pt-5">
                        <h4 className="card-title text-dark">Swift VXR</h4>
                        <p className="text-secondary">RS: 24,000,00/- </p>
                        <p className="underline action text-red fs-lg mt-1">
                          See more <i className="bi bi-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-4"
                role="tabpanel"
                aria-labelledby="component-1-4-tab"
              >
                <div className="col-md-6" data-aos="fade-up">
                  <a
                    href=""
                    className="card equal-md-1-1 card-hover-border bg-white"
                  >
                    <div className="card-wrap">
                      <div className="card-header pb-0">
                        <Image
                          className="background "
                          src={bannersales}
                          layout="responsive"
                          alt="background image"
                        />
                      </div>
                      <div className="card-footer mt-20 pt-5">
                        <h4 className="card-title text-dark">Wagnor VXR</h4>
                        <p className="text-secondary">RS: 24,000,00/- </p>
                        <p className="underline action text-red fs-lg mt-1">
                          See more <i className="bi bi-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-5"
                role="tabpanel"
                aria-labelledby="component-1-5-tab"
              >
                <div className="col-md-6" data-aos="fade-up">
                  <a
                    href=""
                    className="card equal-md-1-1 card-hover-border bg-white"
                  >
                    <div className="card-wrap">
                      <div className="card-header pb-0">
                        <Image
                          className="background "
                          src={bannersales}
                          layout="responsive"
                          alt="background image"
                        />
                      </div>
                      <div className="card-footer mt-20 pt-5">
                        <h4 className="card-title text-dark">Bolan</h4>
                        <p className="text-secondary">RS: 24,000,00/- </p>
                        <p className="underline action text-red fs-lg mt-1">
                          See more <i className="bi bi-arrow-right"></i>
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
              </div>
              <div
                className="tab-pane fade"
                id="component-1-6"
                role="tabpanel"
                aria-labelledby="component-1-6-tab"
              >
                <div className="col-md-6" data-aos="fade-up">
                  <a
                    href=""
                    className="card equal-md-1-1 card-hover-border bg-white"
                  >
                    <div className="card-wrap">
                      <div className="card-header pb-0">
                        <Image
                          className="background "
                          src={bannersales}
                          layout="responsive"
                          alt="background image"
                        />
                      </div>
                      <div className="card-footer mt-20 pt-5">
                        <h4 className="card-title text-dark">RAVI</h4>
                        <p className="text-secondary">RS: 24,000,00/- </p>
                        <p className="underline action text-red fs-lg mt-1">
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
    </section>
  );
}
