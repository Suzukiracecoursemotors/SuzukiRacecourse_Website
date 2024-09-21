"use client";

import Image from "next/image";
import React, { useState } from "react";
import Cultuspng from "../../public/Cultus/Cultus-Gray.jpg";
import Swiftpng from "../../public/Swift/Swift-Back-Side-Angle.png";
import alto from "../../public/Alto/Studio Session-328.png";
import { Seemore } from "../../common/seemore";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";

const carData = [
  {
    model: "Cultus VXL",
    price: 360000,
    mileage: "60,000 km",
    year: 2018,
    brand: "Cultus",
    img: Cultuspng,
    isSold: false,
  },
  {
    model: "Swift MT",
    price: 400000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
  {
    model: "Swift VVT",
    price: 300000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Swift",
    img: Swiftpng,
    isSold: true,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto,
    isSold: false,
  },
];

export default function CUC() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("priceHighToLow");
  const [minPrice, setMinPrice] = useState<number>(10000);
  const [maxPrice, setMaxPrice] = useState<number>(5000000);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const carsPerPage = 6;
  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [brand]
    );
  };

  const handleSortChange = (option: string) => {
    setSortOption(option);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "minPrice") {
      setMinPrice(Number(value));
    } else {
      setMaxPrice(Number(value));
    }
  };
  const sortedCars = [...carData].sort((a, b) => {
    if (sortOption === "priceLowToHigh") {
      return a.price - b.price;
    } else if (sortOption === "newestFirst") {
      return b.year - a.year;
    } else if (sortOption === "oldestFirst") {
      return a.year - b.year;
    } else {
      return b.price - a.price;
    }
  });
  const filteredCars = sortedCars.filter(
    (car) =>
      (selectedBrands.length === 0 || selectedBrands.includes(car.brand)) &&
      car.price >= minPrice &&
      car.price <= maxPrice
  );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  return (
    <section className="py-15 py-xl-20">
      <div className="container mt-5">
        <div className="row g-3 g-md-5 align-items-end mb-5">
          <div className="col-md-6">
            <h1 className="mb-2">Available Used Cars</h1>
            <p className="text-muted">
              Choose from our wide range of used cars.
            </p>
          </div>
          <div className="col-md-6 text-md-end">
            <div className="dropdown d-inline-block me-3">
              <a
                className="underline text-black"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Sort by:{" "}
                {sortOption === "priceHighToLow"
                  ? "Price high to low"
                  : sortOption === "priceLowToHigh"
                  ? "Price low to high"
                  : sortOption === "newestFirst"
                  ? "Newest first"
                  : "Oldest first"}
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
              </ul>
            </div>
          </div>
        </div>

        <div className="row justify-content-between">
          <aside className="col-xl-3 d-xl-block mb-4">
            <div className="widget">
              <h5 className="text-muted mb-2">Car Brands</h5>
              <ul className="list-unstyled d-flex flex-wrap flex-xl-column">
                {[
                  "Alto",
                  "Mehran",
                  "Cultus",
                  "Wagon-R",
                  "Swift",
                  "Bolan",
                  "Ravi",
                ].map((brand, index) => (
                  <li key={index} className="mt-1 me-2">
                    <div className="form-check form-check-minimal">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id={`brand-${index}`}
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      <label
                        className="form-check-label brand-label"
                        htmlFor={`brand-${index}`}
                      >
                        {brand}
                      </label>
                    </div>
                  </li>
                ))}
              </ul>
              {/* Price Range */}
              <div className="price-range d-inline-block">
                <h5 className="">Price Range</h5>
                <input
                  type="number"
                  className="form-control d-inline-block me-2"
                  name="minPrice"
                  value={minPrice}
                  onChange={handlePriceChange}
                  placeholder="Min Price"
                  style={{ width: "100px", height: "40px" }}
                />

                <input
                  type="number"
                  className="form-control d-inline-block"
                  name="maxPrice"
                  value={maxPrice}
                  onChange={handlePriceChange}
                  placeholder="Max Price"
                  style={{ width: "100px", height: "40px" }}
                />
              </div>
            </div>
          </aside>
          <div className="col-xl-9">
            <div className="row g-3">
              {currentCars.length > 0 ? (
                currentCars.map((car, index) => (
                  <div key={index} className="col-md-6 col-xl-4">
                    <div className="border card flex-1">
                      <div className="card-header position-relative">
                        <Image
                          src={car.img}
                          alt={car.model}
                          layout="responsive"
                          width={700}
                          height={700}
                          className="card-img-top"
                        />
                        {car.isSold ? (
                          <span
                            className="position-absolute top-0 start-0 badge bg-danger"
                            style={{ fontSize: "1rem", padding: "0.5em" }}
                          >
                            Sold
                          </span>
                        ) : (
                          <span
                            className="position-absolute top-0 start-0 badge bg-success"
                            style={{ fontSize: "1rem", padding: "0.5em" }}
                          >
                            Available
                          </span>
                        )}
                      </div>
                      <div className="card-footer">
                        <h5 className="car-model-title">{car.model}</h5>
                        <div className="text-muted">
                          Model: {car.year} • {car.mileage}
                        </div>
                        <span className="product-price text-blue underline">
                          Rs: {car.price}
                        </span>
                        <br />
                        <Link
                          href={"tel:" + Constants.PHONE}
                          className="btn btn-with-icon rounded-pill"
                        >
                          <i className="bi bi-telephone-fill"></i> Contact Now
                        </Link>
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

            <div className="mt-4 d-flex justify-content-between">
              <button
                className="btn btn-outline-primary"
                disabled={currentPage === 1}
                onClick={prevPage}
              >
                Previous
              </button>
              <button
                className="btn btn-outline-primary"
                disabled={indexOfLastCar >= filteredCars.length}
                onClick={nextPage}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
