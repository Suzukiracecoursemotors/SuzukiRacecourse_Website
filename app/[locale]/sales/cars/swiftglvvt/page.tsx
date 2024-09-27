import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import Carosilswift from "./carosilswift";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";

// Configuration object for the Swift text content
const swiftConfig = {
  title: "Suzuki Swift",
  booknow: "Book Now",
  overview: {
    heading: "Suzuki Swift: A Comprehensive Review",
    content: `The Suzuki Swift is a dynamic and sporty hatchback that combines excellent performance with stylish looks. It’s a favorite among city drivers and those who love a car with nimble handling and modern features.`,
  },
  sections: [
    {
      title: "Performance and Efficiency",
      content: `The Suzuki Swift offers a responsive driving experience with its powerful 1.2L engine. Available in manual and automatic variants, the Swift delivers smooth acceleration and impressive fuel efficiency, perfect for both daily commutes and longer drives.`,
    },
    {
      title: "Safety Features",
      content: `The Swift is equipped with a wide range of safety features, including airbags, ABS with EBD, and an electronic stability program, ensuring driver and passenger safety. The higher models also come with additional safety tech like parking sensors and a rearview camera.`,
    },
  ],
  specifications: [
    {
      feature: "Power Steering",
      glmt: true,
      glvt: true,
      glvvt: true,
    },
    {
      feature: "Air Conditioning",
      glmt: true,
      glvt: true,
      glvvt: true,
    },
    {
      feature: "Alloy Wheels",
      glmt: false,
      glvt: true,
      glvvt: true,
    },
    {
      feature: "Keyless Entry",
      glmt: false,
      glvt: true,
      glvvt: true,
    },
    {
      feature: "ABS with EBD",
      glmt: true,
      glvt: true,
      glvvt: true,
    },
    {
      feature: "Dual Airbags",
      glmt: true,
      glvt: true,
      glvvt: true,
    },
    {
      feature: "Automatic Gear Shift (AGS)",
      glmt: false,
      glvt: true,
      glvvt: true,
    },
    {
      feature: "Hill Hold Control",
      glmt: false,
      glvt: false,
      glvvt: true,
    },
    {
      feature: "Push Start System",
      glmt: false,
      glvt: true,
      glvvt: true,
    },
  ],
};

// Component to display tick or cross icons
const TickCrossIcon = ({ value }: { value: boolean }) => {
  return value ? "✔️" : "❌";
};

export default function Swift() {
  return (
    <article>
      {/* Carousel Section */}
      <section className="bg-black inverted overflow-hidden">
        <Carosilswift />
      </section>

      {/* Suzuki Swift Article */}
      <section className="py-1 py-xl-1">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {swiftConfig.title}
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {swiftConfig.booknow}
          </Link>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {/* Overview Section */}
              <div>
                <h3 style={{ textAlign: "center" }}>
                  {swiftConfig.overview.heading}
                </h3>
                <p className="fs-lg text-secondary">
                  {swiftConfig.overview.content}
                </p>
              </div>

              {/* Sections */}
              {swiftConfig.sections.map((section, index) => (
                <div key={index}>
                  <h5 className="py-1">{section.title}</h5>
                  <p className="fs-lg text-secondary">{section.content}</p>
                </div>
              ))}

              {/* Specifications Table */}
              <h5 className="py-2">Suzuki Swift Model Specifications</h5>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>GLMT</th>
                    <th>GLVT</th>
                    <th>GLVVT</th>
                  </tr>
                </thead>
                <tbody>
                  {swiftConfig.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.feature}</td>
                      <td>
                        <TickCrossIcon value={spec.glmt} />
                      </td>
                      <td>
                        <TickCrossIcon value={spec.glvt} />
                      </td>
                      <td>
                        <TickCrossIcon value={spec.glvvt} />
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
