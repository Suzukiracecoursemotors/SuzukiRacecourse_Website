import { Locale } from "@/i18n";
import Image from "next/image";
import React from "react";
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
import { Link } from "@/navigation";
import { BookingForm } from "../common/form";
import { CarBookingForm } from "../common/form copy";

const carModels = [
  {
    id: "alto",
    name: "ALTO",
    variants: [
      {
        title: "ALTO VX",
        image: alto,
        price: "Rs : 2,331,000/-",
        link: "/sales/cars/altovx",
      },
      {
        title: "ALTO VXL",
        image: altovxr,

        price: "Rs : 2,707,000/-",
        link: "/sales/cars/altovxl",
      },
      {
        title: "ALTO VXR AGS",
        image: altovxl,
        price: "Rs : 2,894,000/-",
        link: "/sales/cars/altovxrags",
      },
      {
        title: "ALTO VXL AGS",
        image: altovxagsl,
        price: "Rs : 3,045,000/-",
        link: "/sales/cars/altovxlags",
      },
    ],
  },
  {
    id: "cultus",
    name: "CULTUS",
    variants: [
      {
        title: "Cultus VXR",
        image: cultus1,
        price: "Rs: 3,858,000/-",
        link: "/sales/cars/cultusvxr",
      },
      {
        title: "Cultus VXL",
        image: cultus2,
        price: "Rs: 4,244,00/-",
        link: "/sales/cars/cultusvxl",
      },
      {
        title: "Cultus AGS",
        image: cultus3,
        price: "Rs: 4,546,00/-",
        link: "/sales/cars/cultusags",
      },
    ],
  },
  {
    id: "wagonr",
    name: "WagonR",
    variants: [
      {
        title: "WagonR VXR",
        image: wagon1,
        price: "Rs: 3,214,00/-",
        link: "/sales/cars/wagonrvxr",
      },
      {
        title: "WagonR VXL",
        image: wagon2,
        price: "Rs: 3,412,00/-",
        link: "/sales/cars/wagonrvxl",
      },
      {
        title: "WagonR AGS",
        image: wagon3,
        price: "Rs: 37,410,00/-",
        link: "/sales/cars/wagonrags",
      },
    ],
  },
  {
    id: "swift",
    name: "SWIFT",
    variants: [
      {
        title: "Swift GL MT",
        image: swift1,
        price: "Rs: 4,336,00/-",
        link: "/sales/cars/swiftglmt",
      },
      {
        title: "Swift GL VT",
        image: swift2,
        price: "Rs: 4,560,00/-",
        link: "/sales/cars/swiftglvt",
      },
      {
        title: "Swift GL VVT",
        image: swift3,
        price: "Rs: 4,719,00/-",
        link: "/sales/cars/swiftglvvt",
      },
    ],
  },
  {
    id: "bolan",
    name: "BOLAN",
    variants: [
      {
        title: "Bolan VX",
        image: bolan1,
        price: "Rs: 1,940,00/-",
        link: "/sales/cars/bolanvx",
      },
      {
        title: "Bolan CARGO",
        image: bolan2,
        price: "Rs: 1,944,00/-",
        link: "/sales/cars/bolancargo",
      },
    ],
  },
  {
    id: "ravi",
    name: "RAVI",
    variants: [
      {
        title: "Ravi VX",
        image: ravi,
        price: "Rs: 1,856,00/-",
        link: "/sales/cars/ravivx",
      },
    ],
  },
];

function SaleHome() {
  return (
    <section className="py-15 py-xl-20 bg-light">
      <div className="container">
        <div className="row mb-10 d-flex">
          <div className="col">
            <h2 className="fw-bold text-dark">Sales</h2>
          </div>
        </div>
        <div className="row g-3 g-xl-5 justify-content-between">
          <div className="col-xl-4">
            <ul
              className="nav nav-tabs flex-xl-column"
              id="component-1"
              role="tablist"
            >
              {carModels.map((carModel, index) => (
                <li className="nav-item" key={carModel.id}>
                  <button
                    className={`nav-link fs-5 ${
                      index === 0 ? "active" : ""
                    } text-blue`}
                    id={`component-1-${index + 1}-tab`}
                    data-bs-toggle="pill"
                    data-bs-target={`#component-1-${index + 1}`}
                    type="button"
                    role="tab"
                    aria-controls={`component-1-${index + 1}`}
                    aria-selected={index === 0 ? "true" : "false"}
                  >
                    {carModel.name}
                  </button>
                </li>
              ))}
            </ul>
            <CarBookingForm />
          </div>

          <div className="col-xl-8">
            <div className="tab-content" id="component-1-content">
              {carModels.map((carModel, index) => (
                <div
                  key={carModel.id}
                  className={`tab-pane fade ${
                    index === 0 ? "show active" : ""
                  }`}
                  id={`component-1-${index + 1}`}
                  role="tabpanel"
                  aria-labelledby={`component-1-${index + 1}-tab`}
                >
                  <div className="row g-3 g-xl-5">
                    {carModel.variants.map((variant, variantIndex) => (
                      <div
                        className="col-md-6"
                        data-aos="flip-left"
                        key={variantIndex}
                      >
                        <Link
                          href={variant.link}
                          className="card equal-md-1-1 card-hover-border bg-white"
                        >
                          <div className="card-wrap">
                            <div className="card-header pb-0">
                              <Image
                                className="background"
                                src={variant.image}
                                layout="responsive"
                                alt={`${variant.title} image`}
                              />
                            </div>
                            <div className="card-footer mt-20 pt-9">
                              <h4 className="card-title text-dark text-blue">
                                {variant.title}
                              </h4>
                              <h6 className="text-secondary text-dark margin0">
                                <span>
                                  {variant.price}{" "}
                                  <span className="blinking-text">
                                    Book now
                                  </span>
                                </span>
                              </h6>

                              <br />
                              <p className="underline action text-red fs-lg">
                                See more <i className="bi bi-arrow-right"></i>
                              </p>
                            </div>
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SaleHome;
