"use client";

import Image from "next/image";
import React, { useState } from "react";
import Cultuspng from "../../public/Cultus/Cultus-Gray.jpg";
import Swiftpng from "../../public/Swift/Swift-Back-Side-Angle.png";
import { BookingForm } from "../../common/form";
import { CarBookingForm } from "../../common/form copy";
import { Link } from "@/navigation";
import { Seemore } from "../../common/seemore";
import { DropdownDivider } from "react-bootstrap";

const carData = [
  {
    model: "Cultus VXL",
    price: 360000,
    mileage: "60,000 km",
    year: 2018,
    brand: "Cultus",
    img: Cultuspng,
  },
  {
    model: "Swift vvt",
    price: 400000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
  },
  {
    model: "Swift vvt",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
  },
];

export default function CUC() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("priceHighToLow");

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const sortedCars = [...carData].sort((a, b) => {
    if (sortOption === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "newestFirst") {
      return b.year - a.year;
    } else if (sortOption === "oldestFirst") {
      return a.year - b.year;
    } else {
      return b.price - a.price; // Default: priceHighToLow
    }
  });

  const filteredCars = sortedCars.filter(
    (car) => selectedBrands.length === 0 || selectedBrands.includes(car.brand)
  );

  return (
    <section className="py-15 py-xl-20">
      <div className="container mt-5">
        {/* Header Section */}
        <div className="row g-3 g-md-5 align-items-end mb-5">
          <div className="col-md-6">
            <h1 className="mb-2">Available Used Cars</h1>
            <p className="text-muted">
              Choose from our wide range of used cars.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            {/* <div className="dropdown">
              <a
                className="underline text-black"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by:{" "}
                {sortOption === "priceLowToHigh"
                  ? "Price low to high"
                  : sortOption === "newestFirst"
                  ? "Newest first"
                  : sortOption === "oldestFirst"
                  ? "Oldest first"
                  : "Price high to low"}
                <i className="bi bi-chevron-down"></i>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSortChange("priceLowToHigh")}
                  >
                    Price low to high
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSortChange("newestFirst")}
                  >
                    Newest first
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSortChange("oldestFirst")}
                  >
                    Oldest first
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => handleSortChange("priceHighToLow")}
                  >
                    Price high to low
                  </a>
                </li>
              </ul>
            </div> */}
            <CarBookingForm />
          </div>
        </div>
        {/* Main Content Section */}
        <div className="row justify-content-between">
          {/* Sidebar Section */}
          <aside className="col-xl-3 d-none d-xl-block">
            <div className="widget">
              <h5 className="d-flex  text-muted mb-2">Car Brands</h5>
              <ul className="list-unstyled">
                {[
                  "Alto",
                  "Mehran",
                  "Cultus",
                  "Wagno-R",
                  "Swift",
                  "Bolan",
                  "Ravi",
                ].map((brand, index) => (
                  <li key={index} className="mt-1">
                    <div className="form-check form-check-minimal">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`brand-${index}`}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      <label
                        className="form-check-label "
                        htmlFor={`brand-${index}`}
                      >
                        {brand}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
          {/* Product Listing Section */}
          <div className="col-xl-9">
            <div className="row g-3">
              {filteredCars.length > 0 ? (
                filteredCars.map((car, index) => (
                  <div key={index} className="col-md-6 col-xl-4">
                    <div className="border card flex-1 flex  ">
                      <div className="card-header ">
                        <Image
                          src={car.img}
                          alt={car.model}
                          layout="responsive"
                          width={700}
                          height={700}
                          className=" card "
                        />
                      </div>

                      <div className="card-footer card  flex-1">
                        <h5 className="">{car.model}</h5>
                        <div className="text-muted">
                          {car.year} • {car.mileage}
                        </div>
                        <span className="product-price text-blue underline">
                          Rs: {car.price}
                        </span>
                        <br />
                        <Seemore />
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-12">
                  <p>No cars match the selected filters.</p>
                </div>
              )}
            </div>
          </div>
        </div>
        {/* Pagination Section */}
        <div className="row mt-6">
          <div className="col text-center">
            <nav aria-label="Page navigation">
              <ul className="pagination">
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
