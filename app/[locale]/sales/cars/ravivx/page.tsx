import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilsRavi from "./carosilcultus";

// Configuration object for the Ravi text content
const raviConfig = {
  title: "Suzuki Ravi",
  booknow: "Book Now",
  overview: {
    heading: "Suzuki Ravi: A Practical and Versatile Mini Truck",
    content: `The Suzuki Ravi is a compact and versatile mini truck designed for urban and rural use. Known for its durability, practicality, and fuel efficiency, the Ravi is an ideal choice for small businesses and individuals needing reliable transportation for goods.`,
  },
  sections: [
    {
      title: "Performance and Efficiency",
      content: `The Suzuki Ravi is powered by a 0.8L engine that delivers a balance of performance and fuel efficiency. Its lightweight construction helps in achieving great mileage, making it a cost-effective solution for transporting goods over short distances.`,
    },
    {
      title: "Safety Features",
      content: `Safety is a priority in the Suzuki Ravi, which comes equipped with features such as seatbelts, a sturdy frame, and a reliable braking system. These elements ensure the safety of the driver and passengers during transportation.`,
    },
  ],
  specifications: [
    {
      feature: "Payload Capacity",
      value: "750 kg",
    },
    {
      feature: "Engine Displacement",
      value: "0.8L",
    },
    {
      feature: "Power Steering",
      value: "Yes",
    },
    {
      feature: "Air Conditioning",
      value: "Available in select variants",
    },
    {
      feature: "ABS",
      value: "No",
    },
    {
      feature: "Seating Capacity",
      value: "2 passengers",
    },
  ],
};

// Component to display specifications
const SpecificationRow = ({
  feature,
  value,
}: {
  feature: string;
  value: string;
}) => {
  return (
    <tr>
      <td>{feature}</td>
      <td>{value}</td>
    </tr>
  );
};

export default function Ravi() {
  return (
    <article>
      {/* Carousel Section */}
      <section className="bg-black inverted overflow-hidden">
        <CarosilsRavi />
      </section>

      {/* Suzuki Ravi Article */}
      <section className="py-5 py-xl-15">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {raviConfig.title}
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {raviConfig.booknow}
          </Link>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {/* Overview Section */}
              <div>
                <h3 style={{ textAlign: "center" }}>
                  {raviConfig.overview.heading}
                </h3>
                <p className="fs-lg text-secondary">
                  {raviConfig.overview.content}
                </p>
              </div>

              {/* Sections */}
              {raviConfig.sections.map((section, index) => (
                <div key={index}>
                  <h5 className="py-1">{section.title}</h5>
                  <p className="fs-lg text-secondary">{section.content}</p>
                </div>
              ))}

              {/* Specifications Table */}
              <h5 className="py-2">Suzuki Ravi Specifications</h5>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {raviConfig.specifications.map((spec, index) => (
                    <SpecificationRow
                      key={index}
                      feature={spec.feature}
                      value={spec.value}
                    />
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
