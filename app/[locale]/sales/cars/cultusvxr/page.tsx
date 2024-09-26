import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilCultus from "./carosilcultus";

// Configuration object for the Cultus text content
const cultusConfig = {
  title: "Suzuki Cultus",
  booknow: "Book Now",
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
      feature: "Keyless Entry",
      vxr: false,
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
      vxr: true,
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

// Component to display tick or cross icons
const TickCrossIcon = ({ value }: { value: boolean }) => {
  return value ? "✔️" : "❌";
};

export default function Cultus() {
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilCultus />
      </section>

      <section className="py-5 py-xl-15">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {cultusConfig.title}
          </h1>
          <CarBookingForm />
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
              <div>
                <h3 style={{ textAlign: "center" }}>
                  {cultusConfig.overview.heading}
                </h3>
                <p className="fs-lg text-secondary">
                  {cultusConfig.overview.content}
                </p>
              </div>

              {cultusConfig.sections.map((section, index) => (
                <div key={index}>
                  <h5 className="py-1">{section.title}</h5>
                  <p className="fs-lg text-secondary">{section.content}</p>
                </div>
              ))}

              <h5 className="py-2">Cultus Model Specifications</h5>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>VXR</th>
                    <th>VXL</th>
                    <th>AGS</th>
                  </tr>
                </thead>
                <tbody>
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
