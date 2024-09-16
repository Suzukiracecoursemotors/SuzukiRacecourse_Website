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
  sale_des: "Select Your Favourite Car Today !",
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
        filer: "Rs 13,535/-",
        nonFiler: "Rs 40,605/-",
      },
      {
        title: "Alto VXR AGS",
        image: altovxl,
        price: "Rs 2,894,000/-",
        link: "/sales/cars/altovx",
        filer: "Rs 14,470/-",
        nonFiler: "Rs 43,410/-",
      },
      {
        title: "Alto VXL AGS",
        image: altovxagsl,
        price: "Rs 3,045,000/-",
        link: "/sales/cars/altovx",
        filer: "Rs 15,255/-",
        nonFiler: "Rs 46,675/-",
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
        filer: "Rs 38,580/-",
        nonFiler: "Rs 115,740/-",
      },
      {
        title: "Cultus VXL",
        image: cultus2,
        price: "Rs 4,244,000/-",
        link: "/sales/cars/cultusvxl",
        filer: "Rs 42,440/-",
        nonFiler: "Rs 127,320/-",
      },
      {
        title: "Cultus AGS",
        image: cultus3,
        price: "Rs 4,546,000/-",
        link: "/sales/cars/cultusags",
        filer: "Rs 45,460/-",
        nonFiler: "Rs 136,380/-",
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
        filer: "Rs 32,140/-",
        nonFiler: "Rs 96,420/-",
      },
      {
        title: "WagonR VXL",
        image: wagon2,
        price: "Rs 3,412,000/-",
        link: "/sales/cars/wagonrvxr",
        filer: "Rs 34,120/-",
        nonFiler: "Rs 102,360/-",
      },
      {
        title: "WagonR AGS",
        image: wagon3,
        price: "Rs 3,741,000/-",
        link: "/sales/cars/wagonrvxr",
        filer: "Rs 37,410/-",
        nonFiler: "Rs 112,230/-",
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
        filer: "Rs 65,040/-",
        nonFiler: "Rs 195,120/-",
      },
      {
        title: "Swift GL VT",
        image: swift2,
        price: "Rs 4,560,000/-",
        link: "/sales/cars/swiftglvvt",
        filer: "Rs 68,400/-",
        nonFiler: "Rs 105,200/-",
      },
      {
        title: "Swift GL VVT",
        image: swift3,
        price: "Rs 4,719,000/-",
        link: "/sales/cars/swiftglvvt",
        filer: "Rs 70,785/-",
        nonFiler: "Rs 212,355/-",
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
        filer: "Rs 9,700/-",
        nonFiler: "Rs 29,100/-",
      },
      {
        title: "Bolan Cargo",
        image: bolan2,
        price: "Rs 1,944,000/-",
        link: "/sales/cars/bolanvx",
        filer: "Rs 00/-",
        nonFiler: "Rs 00/-",
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
        filer: "Rs 9,280/-",
        nonFiler: "Rs 27,840/-",
      },
    ],
  },
];

const SaleHome = () => {
  return (
    <section className="py-3 py-xl-9 bg-light">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h2 className="fw-bold text-dark">{config.sales}</h2>
            <h6 className="fw-bold text-dark">{config.sale_des}</h6>
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
                                layout="responsive"
                              />
                            </div>
                            <h5 className="card-title text-dark d-centre text-center">
                              {variant.title}{" "}
                            </h5>{" "}
                            <p className="card-text text-center d-centre text-secondary mb-2">
                              <strong>{variant.price}</strong>{" "}
                              <span className="blinking-text">
                                {config.booknow}
                              </span>
                            </p>
                            <p className="card-text text-center d-centre flexcoloum">
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
