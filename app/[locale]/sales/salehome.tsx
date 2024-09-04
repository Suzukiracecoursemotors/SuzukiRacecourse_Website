import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import alto from "../public/Alto/alto.png";
import altovxr from "../public/Alto/vxlalto.png";
import altovxl from "../public/Alto/alto1.png";
import altovxagsl from "../public/Alto/agsvxlalto.png";
import cultus1 from "../public/Cultus/Cultus-White.jpg";
import cultus3 from "../public/cars/Cultus AGS Back.png";
import cultus2 from "../public/cars/Cultus Silver flip.png";
import wagon2 from "../public/cars/wagonr vxl.png";
import wagon1 from "../public/cars/WagonR.png";
import wagon3 from "../public/cars/WagonR Gray.png";
import swift1 from "../public/Swift/02.png";
import swift2 from "../public/Swift/Swift-Back-Side-Angle.png";
import swift3 from "../public/Swift/Swift-Grey.png";
import bolan1 from "../public/cars/Bolan.png";
import bolan2 from "../public/cars/Suzuki Bolan 3.png";
import ravi from "../public/cars/Suzuki Ravi.png";

const config = {
  sales: "Sales",
  priceLabel: "Price:",
  filerLabel: "Filer:",
  nonFilerLabel: "Non-Filer:",
  seeMore: "See more",
  booknow: "Book Now",
};
const carModels = [
  {
    id: "alto",
    name: "Alto",
    variants: [
      {
        title: "Alto VX",
        image: alto,
        price: "Rs 2,331,000/-",
        link: "/sales/cars/altovx",
        filer: "Rs 11,655/-",
        nonFiler: "Rs 34,965/-",
      },
      {
        title: "Alto VXL",
        image: altovxr,
        price: "Rs 2,707,000/-",
        link: "/sales/cars/altovx",
        filer: "Rs 12,000/-",
        nonFiler: "Rs 36,000/-",
      },
      {
        title: "Alto VXR AGS",
        image: altovxl,
        price: "Rs 2,894,000/-",
        link: "/sales/cars/altovx",
        filer: "Rs 12,500/-",
        nonFiler: "Rs 37,500/-",
      },
      {
        title: "Alto VXL AGS",
        image: altovxagsl,
        price: "Rs 3,045,000/-",
        link: "/sales/cars/altovx",
        filer: "Rs 13,000/-",
        nonFiler: "Rs 39,000/-",
      },
    ],
  },
  {
    id: "cultus",
    name: "Cultus",
    variants: [
      {
        title: "Cultus VXR",
        image: cultus1,
        price: "Rs 3,858,000/-",
        link: "/sales/cars/cultusvxr",
        filer: "Rs 14,000/-",
        nonFiler: "Rs 42,000/-",
      },
      {
        title: "Cultus VXL",
        image: cultus2,
        price: "Rs 4,244,000/-",
        link: "/sales/cars/cultusvxl",
        filer: "Rs 15,000/-",
        nonFiler: "Rs 45,000/-",
      },
      {
        title: "Cultus AGS",
        image: cultus3,
        price: "Rs 4,546,000/-",
        link: "/sales/cars/cultusags",
        filer: "Rs 16,000/-",
        nonFiler: "Rs 48,000/-",
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
        price: "Rs 3,214,000/-",
        link: "/sales/cars/wagonrvxr",
        filer: "Rs 10,000/-",
        nonFiler: "Rs 30,000/-",
      },
      {
        title: "WagonR VXL",
        image: wagon2,
        price: "Rs 3,412,000/-",
        link: "/sales/cars/wagonrvxr",
        filer: "Rs 11,000/-",
        nonFiler: "Rs 33,000/-",
      },
      {
        title: "WagonR AGS",
        image: wagon3,
        price: "Rs 3,741,000/-",
        link: "/sales/cars/wagonrvxr",
        filer: "Rs 12,000/-",
        nonFiler: "Rs 36,000/-",
      },
    ],
  },
  {
    id: "swift",
    name: "Swift",
    variants: [
      {
        title: "Swift GL MT",
        image: swift1,
        price: "Rs 4,336,000/-",
        link: "/sales/cars/swiftglvvt",
        filer: "Rs 18,000/-",
        nonFiler: "Rs 54,000/-",
      },
      {
        title: "Swift GL VT",
        image: swift2,
        price: "Rs 4,560,000/-",
        link: "/sales/cars/swiftglvvt",
        filer: "Rs 19,000/-",
        nonFiler: "Rs 57,000/-",
      },
      {
        title: "Swift GL VVT",
        image: swift3,
        price: "Rs 4,719,000/-",
        link: "/sales/cars/swiftglvvt",
        filer: "Rs 20,000/-",
        nonFiler: "Rs 60,000/-",
      },
    ],
  },
  {
    id: "bolan",
    name: "Bolan",
    variants: [
      {
        title: "Bolan VX",
        image: bolan1,
        price: "Rs 1,940,000/-",
        link: "/sales/cars/bolanvx",
        filer: "Rs 5,000/-",
        nonFiler: "Rs 15,000/-",
      },
      {
        title: "Bolan Cargo",
        image: bolan2,
        price: "Rs 1,944,000/-",
        link: "/sales/cars/bolanvx",
        filer: "Rs 5,500/-",
        nonFiler: "Rs 16,500/-",
      },
    ],
  },
  {
    id: "ravi",
    name: "Ravi",
    variants: [
      {
        title: "Ravi VX",
        image: ravi,
        price: "Rs 1,856,000/-",
        link: "/sales/cars/ravivx",
        filer: "Rs 4,500/-",
        nonFiler: "Rs 13,500/-",
      },
    ],
  },
];

const SaleHome = () => {
  return (
    <section className="py-15 py-xl-9  bg-light">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h2 className="fw-bold text-dark">{config.sales}</h2>
          </div>
        </div>
        <div className="row g-3 g-xl-5">
          <div className="col-xl-4">
            <ul
              className="nav nav-tabs flex-xl-column"
              id="carModelTabs"
              role="tablist"
            >
              {carModels.map((carModel, index) => (
                <li className="nav-item" key={carModel.id}>
                  <button
                    className={`nav-link fs-5 ${
                      index === 0 ? "active" : ""
                    } text-blue`}
                    id={`${carModel.id}-tab`}
                    data-bs-toggle="tab"
                    data-bs-target={`#${carModel.id}`}
                    type="button"
                    role="tab"
                    aria-controls={carModel.id}
                    aria-selected={index === 4}
                  >
                    {carModel.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="col-xl-8 ">
            <div className="tab-content " id="carModelTabsContent">
              {carModels.map((carModel, index) => (
                <div
                  key={carModel.id}
                  className={`tab-pane fade ${
                    index === 0 ? "show active" : ""
                  }`}
                  id={carModel.id}
                  role="tabpanel"
                  aria-labelledby={`${carModel.id}-tab`}
                >
                  <div className="row g-3  g-xl-4">
                    {carModel.variants.map((variant) => (
                      <div className="col-md-6" key={variant.title}>
                        <Link
                          href={variant.link}
                          className="card h-100  text-decoration-none"
                        >
                          <div className="card-body bg-white border d-flex flex-column">
                            <div className="mb-3 text-center">
                              <Image
                                src={variant.image}
                                alt={variant.title}
                                width={300}
                                height={200}
                                objectFit="responsive"
                              />
                            </div>
                            <h5 className="card-title text-dark text-center">
                              {variant.title}{" "}
                            </h5>{" "}
                            <p className="card-text text-center text-secondary mb-2">
                              {config.priceLabel}
                              <strong>{variant.price}</strong>{" "}
                              <span className="blinking-text">
                                {config.booknow}
                              </span>
                            </p>
                            <p className="card-text text-center">
                              <span className="badge bg-success me-2">
                                {config.filerLabel} {variant.filer}
                              </span>
                              <span className="badge bg-danger">
                                {config.nonFilerLabel} {variant.nonFiler}
                              </span>
                            </p>
                            <div className="mt-auto text-center">
                              <br />
                              <p className="underline action text-red fs-lg">
                                {config.seeMore}{" "}
                                <i className="bi bi-arrow-right"></i>
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
};

export default SaleHome;
