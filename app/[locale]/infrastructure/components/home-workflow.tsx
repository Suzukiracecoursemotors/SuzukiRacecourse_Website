import React from "react";
import Bannerimg from "../../public/banner1.jpeg";
import Image from "next/image";
import Constants from "@/data/Constants";

function Workflow() {
  return (
    <section className="overflow-hidden">
      <div className="container d-flex flex-column py-20 min-vh-100 level-3">
        <div className="row align-items-center justify-content-center justify-content-lg-between my-auto">
          <div className="col-md-8 col-lg-5 order-lg-2 mb-5 mb-lg-0">
            <Image
              src={Bannerimg}
              alt="awais_image"
              width={450}
              height={500}
              data-aos="zoom-out"
              data-aos-delay="300"
              // layout="responsive"
            />
          </div>
          <div className="col-md-10 col-lg-6 col-xl-5 text-center text-lg-start order-lg-1">
            <h3 data-aos="zoom-out" data-aos-delay="100">
              Suzuki Racecourse Motors{" "}
            </h3>
            <p
              className="lead text-secondary mb-5"
              data-aos="zoom-out"
              data-aos-delay="200"
            >
              7S | Authorized Suzuki Dealership. Location: 229/A, Lane no. 1,
              Main Peshawar Road, Rawalpindi Cantt, Pakistan.
            </p>
            <div className="row align-items-center g-3">
              <div className="col-md-auto">
                <a
                  href={`tel:${Constants.PHONE}`}
                  className="btn btn-primary btn-with-icon   rounded-pill btn-lg"
                  data-aos="zoom-out"
                  data-aos-delay="300"
                >
                  Reserve Appointment <i className="bi bi-telephone-fill"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <figure className="background">
        <svg
          width="100%"
          height="100%"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            data-aos="fade-up"
            data-aos-delay="200"
            cx="100%"
            cy="-35%"
            r="50%"
            stroke="#dddddd"
            stroke-opacity="1"
            data-center-top="@r: 50%;"
            data-top-bottom="@r: 70%;"
          />
          <circle
            data-aos="fade-up"
            data-aos-delay="400"
            cx="85%"
            cy="135%"
            r="75%"
            stroke="#dddddd"
            stroke-opacity="1"
            data-center-top="@r: 75%;"
            data-top-bottom="@r: 95%;"
          />
          <circle
            data-aos="fade-up"
            data-aos-delay="600"
            cx="-25%"
            cy="125%"
            r="50%"
            stroke="#dddddd"
            stroke-opacity="1"
            data-center-top="@cx: -25%;"
            data-top-bottom="@cx: 45%;"
          />
        </svg>
      </figure>
    </section>
  );
}

export default Workflow;
