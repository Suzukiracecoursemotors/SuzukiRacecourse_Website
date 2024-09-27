import React from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilWagonR from "./carosilwagonr";

// Configuration object for the Wagon R text content
const wagonRConfig = {
  title: "Suzuki Wagon R",
  booknow: "Book Now",
  overview: {
    heading: "Suzuki Wagon R: A Comprehensive Review",
    content: `The Suzuki Wagon R is a practical and spacious hatchback that offers a unique combination of comfort, performance, and affordability. Its tall-boy design maximizes interior space, making it a popular choice for families and urban commuters alike.`,
  },
  sections: [
    {
      title: "Performance and Efficiency",
      content: `The Suzuki Wagon R comes with a fuel-efficient engine that provides great performance for both city driving and long journeys. The engine's low fuel consumption makes it a great choice for budget-conscious drivers.`,
    },
    {
      title: "Safety Features",
      content: `The Wagon R is equipped with modern safety features such as seatbelts with pretensioners, dual airbags in higher variants, and ABS, ensuring the safety of passengers during travel.`,
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

// Component to display tick or cross icons
const TickCrossIcon = ({ value }: { value: boolean }) => {
  return value ? "✔️" : "❌";
};

export default function WagonR() {
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilWagonR />
      </section>

      <section className="py-1 py-xl-1">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {wagonRConfig.title}
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {wagonRConfig.booknow}
          </Link>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div>
                <h3 style={{ textAlign: "center" }}>
                  {wagonRConfig.overview.heading}
                </h3>
                <p className="fs-lg text-secondary">
                  {wagonRConfig.overview.content}
                </p>
              </div>

              {wagonRConfig.sections.map((section, index) => (
                <div key={index}>
                  <h5 className="py-1">{section.title}</h5>
                  <p className="fs-lg text-secondary">{section.content}</p>
                </div>
              ))}

              <h5 className="py-2">Wagon R Model Specifications</h5>
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
                  {wagonRConfig.specifications.map((spec, index) => (
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
