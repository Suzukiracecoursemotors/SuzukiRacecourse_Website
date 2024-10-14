import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilEvery from "./CarosilEvery";

const everyConfig = {
  title: "Every For Everyone",
  booknow: "Book Now",
  prices: {
    vx: "Rs 2,749,000",
    vxr: "Rs 2,799,000",
  },

  specifications: [
    {
      feature: "Power Steering",
      vx: true,
      vxr: true,
    },
    {
      feature: "Air Conditioning",
      vx: false,
      vxr: true,
    },
    {
      feature: "Air Bags",
      vx: true,
      vxr: true,
    },
    {
      feature: "Power Windows",
      vx: false,
      vxr: true,
    },
    {
      feature: "ABS + EBD",
      vx: true,
      vxr: true,
    },
    {
      feature: "Central Locking",
      vx: true,
      vxr: true,
    },
    {
      feature: "MP3 Player",
      vx: false,
      vxr: true,
    },
    {
      feature: "Keyless Entry",
      vx: false,
      vxr: true,
    },
    {
      feature: "Security Alarm",
      vx: false,
      vxr: true,
    },
    {
      feature: "Rear Wiper",
      vx: false,
      vxr: true,
    },
  ],
};

const TickCrossIcon = ({ value }: { value: boolean }) => {
  return value ? "✔️" : "❌";
};

export default function Every() {
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilEvery />
      </section>

      <section className="py-1 py-xl-1">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {everyConfig.title}
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
            aria-label="Book now via phone"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {everyConfig.booknow}
          </Link>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h5 className="py-2">Every Model Specifications</h5>

              {/* Adding Prices Row */}
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>VX</th>
                    <th>VXR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Price</strong>
                    </td>
                    <td>{everyConfig.prices.vx}</td>
                    <td>{everyConfig.prices.vxr}</td>
                  </tr>

                  {everyConfig.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.feature}</td>
                      <td>
                        <TickCrossIcon value={spec.vx} />
                      </td>
                      <td>
                        <TickCrossIcon value={spec.vxr} />
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
