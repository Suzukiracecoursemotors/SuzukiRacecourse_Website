import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilCultus from "./carosilcultus";

const cultusConfig = {
  title: "Suzuki Cultus",
  booknow: "Book Now",
  prices: {
    vxr: "Rs 3,858,000",
    vxl: "Rs 4,244,000",
    ags: "Rs 4,546,000",
  },
  overview: {
    heading: "Suzuki Cultus: A Comprehensive Review",
    content: `The Suzuki Cultus is a stylish and practical compact car that delivers excellent performance and features at an affordable price. With multiple variants, the Cultus offers something for everyone, whether you're looking for basic features or a fully loaded option.`,
  },
  sections: [
    {
      title: "Performance and Efficiency",
      content: `The Suzuki Cultus is powered by an efficient K10B engine, delivering a balanced mix of power and fuel economy for both urban and highway driving.`,
    },
    {
      title: "Safety Features",
      content: `Suzuki Cultus offers modern safety features such as airbags, Anti-lock Braking System (ABS), and seat belts with pretensioners to ensure driver and passenger safety.`,
    },
  ],
  specifications: [
    {
      feature: "Power Steering",
      vxr: true,
      vxl: true,
      ags: true,
    },
    {
      feature: "Air Conditioning",
      vxr: true,
      vxl: true,
      ags: true,
    },
    {
      feature: "Alloy Wheels",
      vxr: false,
      vxl: true,
      ags: true,
    },
    {
      feature: "Remote Central Lock",
      vxr: true,
      vxl: true,
      ags: true,
    },
    {
      feature: "ABS",
      vxr: false,
      vxl: true,
      ags: true,
    },
    {
      feature: "Dual Airbags",
      vxr: false,
      vxl: true,
      ags: true,
    },
    {
      feature: "Automatic Gear Shift (AGS)",
      vxr: false,
      vxl: false,
      ags: true,
    },
  ],
};

const TickCrossIcon = ({ value }: { value: boolean }) => {
  return value ? "✔️" : "❌";
};

export default function Cultus() {
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilCultus />
      </section>

      <section className="py-1 py-xl-1">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {cultusConfig.title}
          </h1>
          {/* <CarBookingForm /> */}
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {cultusConfig.booknow}
          </Link>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h5 className="py-2">Cultus Model Specifications</h5>

              {/* Adding Prices Row */}
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>VXR</th>
                    <th>VXL</th>
                    <th>AGS</th>
                  </tr>
                </thead>
                <tbody>
                  {/* Prices Row */}
                  <tr>
                    <td>
                      <strong>Price</strong>
                    </td>
                    <td>{cultusConfig.prices.vxr}</td>
                    <td>{cultusConfig.prices.vxl}</td>
                    <td>{cultusConfig.prices.ags}</td>
                  </tr>

                  {/* Specifications Rows */}
                  {cultusConfig.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.feature}</td>
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
