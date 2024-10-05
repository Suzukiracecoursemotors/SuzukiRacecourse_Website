import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import alto from "../public/Alto/Alto White.png";
import cultus1 from "../public/Cultus/Cultus-White.jpg";
import swift1 from "../public/Swift/03-(1).png";
import bolan1 from "../public/cars/Bolan.png";
import ravi from "../public/cars/Suzuki Ravi.png";
import wagon1 from "../public/cars/wagonr vxl.png";
import { CarBookingForm } from "../common/booking-form-new-cars";

const config = {
  sales: "Sales",
  priceLabel: "Price:",
  filerLabel: "Filer:",
  nonFilerLabel: "Non-Filer:",
  seeMore: "See more",
  booknow: "Book Now",
  sale_des: "Select Your Favourite Car Today!",
};

const carModels = [
  {
    id: "swift",
    name: "Swift",
    variant: {
      title: "Swift ",
      image: swift1,
      price: "Rs 4,336,000/-",
      link: "/sales/cars/swiftglvvt",
      filer: "Rs 65,040/-",
      nonFiler: "Rs 195,120/-",
    },
  },

  {
    id: "cultus",
    name: "Cultus",
    variant: {
      title: "Cultus",
      image: cultus1,
      price: "Rs 3,858,000/-",
      link: "/sales/cars/cultusvxr",
      filer: "Rs 38,580/-",
      nonFiler: "Rs 115,740/-",
    },
  },
  {
    id: "alto",
    name: "Alto",
    variant: {
      title: "Alto",
      image: alto,
      price: "Rs 2,331,000/-",
      link: "/sales/cars/altovx",
      filer: "Rs 11,655/-",
      nonFiler: "Rs 34,965/-",
    },
  },
  {
    id: "wagonr",
    name: "Wagon-R",
    variant: {
      title: "Wagon-R",
      image: wagon1,
      price: "Rs 3,214,000/-",
      link: "/sales/cars/wagonrvxr",
      filer: "Rs 32,140/-",
      nonFiler: "Rs 96,420/-",
    },
  },
  {
    id: "bolan",
    name: "Bolan",
    variant: {
      title: "Bolan",
      image: bolan1,
      price: "Rs 1,940,000/-",
      link: "/sales/cars/bolanvx",
      filer: "Rs 9,700/-",
      nonFiler: "Rs 29,100/-",
    },
  },
  {
    id: "ravi",
    name: "Ravi",
    variant: {
      title: "Ravi",
      image: ravi,
      price: "Rs 1,856,000/-",
      link: "/sales/cars/ravivx",
      filer: "Rs 9,280/-",
      nonFiler: "Rs 27,840/-",
    },
  },
];

const CarsPage = () => {
  return (
    <section className="py-9 py-xl-9 bg-light ">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h2 className="fw-bold text-dark">{config.sales}</h2>
            <h6 className="fw-bold text-dark">{config.sale_des}</h6>
            <br />
          </div>
          <div className="col-lg-4 text-lg-end">
            <CarBookingForm />
          </div>
        </div>
        <div className="row  ">
          <div className="">
            <div id="carModelTabsContent">
              <div className="row g-3 g-xl-4">
                {carModels.map((carModel) => (
                  <div className="col-md-4" key={carModel.id}>
                    <Link
                      href={carModel.variant.link}
                      className="card h-100 text-decoration-none"
                    >
                      <div className="card-body bg-white border d-flex flex-column">
                        <div className="mb-3 text-center">
                          <Image
                            src={carModel.variant.image}
                            alt={carModel.variant.title}
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </div>
                        <h5 className="card-title text-dark text-center">
                          {carModel.variant.title}
                        </h5>
                        <p className="card-text text-center text-secondary mb-2">
                          <strong>{carModel.variant.price}</strong>{" "}
                          <span className="blinking-text">
                            {config.booknow}
                          </span>
                        </p>
                        <p className="card-text text-center">
                          <span className="badge bg-success me-2">
                            {config.filerLabel} {carModel.variant.filer}
                          </span>
                          <span className="badge bg-danger">
                            {config.nonFilerLabel} {carModel.variant.nonFiler}
                          </span>
                        </p>
                        <div className="text-center">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsPage;
