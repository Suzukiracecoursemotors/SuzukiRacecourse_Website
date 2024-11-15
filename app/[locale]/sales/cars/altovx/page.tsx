import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilAltoVX from "./carosilalto";

const altoConfig = {
  title: "Suzuki Alto",
  booknow: "Book Now",
  prices: {
    vx: "Rs 2,331,000",
    vxr: "Rs 2,707,000",
    vxl: "Rs 2,894,000",
    ags: "Rs 3,045,000",
  },
  overview: {
    heading: "Suzuki Alto: A Comprehensive Review",
    content: `The Suzuki Alto is a small car with a big reputation. Over the years, it has become synonymous with affordability, reliability, and practicality. Since its introduction, Suzuki has continuously refined the Alto to meet the evolving demands of drivers, particularly in urban settings where space and efficiency are paramount.`,
  },

  sections: [
    {
      title: "Performance and Efficiency",
      content: `Under the hood, the Suzuki Alto is powered by a fuel-efficient engine that delivers a balance of power and economy.`,
    },
    {
      title: "Safety Features",
      content: `Safety is a key consideration in the design of the Suzuki Alto, with essential safety features like seat belts, child safety locks, and airbags in some models.`,
    },
  ],
  specifications: [
    {
      feature: "Power Steering",
      vx: true,
      vxr: true,
      vxl: true,
      ags: true,
    },
    {
      feature: "Air Conditioning",
      vx: false,
      vxr: true,
      vxl: true,
      ags: true,
    },
    {
      feature: "Air Bags",
      vx: false,
      vxr: true,
      vxl: true,
      ags: true,
    },
    {
      feature: "Power Window",
      vx: false,
      vxr: false,
      vxl: false,
      ags: true,
    },
    {
      feature: "ABS",
      vx: false,
      vxr: false,
      vxl: true,
      ags: true,
    },
  ],
};

const TickCrossIcon = ({ value }: { value: boolean }) => {
  return value ? "✔️" : "❌";
};

export default function Alto() {
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilAltoVX />
      </section>

      <section className="py-1 py-xl-1">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {altoConfig.title}
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {altoConfig.booknow}
          </Link>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h5 className="py-2">Alto Model Specifications</h5>

              {/* Adding Prices Row */}
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>VX</th>
                    <th>VXR</th>
                    <th>VXL</th>
                    <th>AGS</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Price</strong>
                    </td>
                    <td>{altoConfig.prices.vx}</td>
                    <td>{altoConfig.prices.vxr}</td>
                    <td>{altoConfig.prices.vxl}</td>
                    <td>{altoConfig.prices.ags}</td>
                  </tr>

                  {altoConfig.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.feature}</td>
                      <td>
                        <TickCrossIcon value={spec.vx} />
                      </td>
                      <td>
                        <TickCrossIcon value={spec.vxr} />
                      </td>
                      <td>
                        <TickCrossIcon value={spec.vxl} />
                      </td>
                      <td>
                        <TickCrossIcon value={spec.ags} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
