import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilBolan from "./carosilalto";

const bolanConfig = {
  title: "Suzuki Bolan",
  booknow: "Book Now",
  overview: {
    heading: "Suzuki Bolan: The Versatile Van for All Needs",
    content: `The Suzuki Bolan is a reliable and spacious van, widely appreciated for its practicality and versatility. Available in both VX and Cargo variants, the Bolan is perfect for transporting families, goods, or as a commercial vehicle for businesses. Its efficient engine and ample space make it a preferred choice for urban and rural transportation.`,
  },
  sections: [
    {
      title: "Performance and Efficiency",
      content: `The Suzuki Bolan is powered by a 0.8L engine, designed to offer a balance of performance and fuel efficiency. The van's robust design allows it to carry heavy loads while maintaining good mileage, making it economical for daily use.`,
    },
    {
      title: "Safety Features",
      content: `Safety is essential in the Suzuki Bolan. It includes features such as seatbelts, a strong body structure, and reliable braking systems. These safety elements ensure the protection of passengers and cargo during travel.`,
    },
  ],
  specifications: [
    {
      feature: "Engine Displacement",
      value: "0.8L",
    },
    {
      feature: "Seating Capacity (VX)",
      value: "5 passengers",
    },
    {
      feature: "Cargo Capacity (Cargo)",
      value: "650 kg",
    },
    {
      feature: "Power Steering",
      value: "No",
    },

    {
      feature: "Seating Capacity (Cargo)",
      value: "2 passengers",
    },
  ],
};

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

export default function Bolan() {
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilBolan />
      </section>

      <section className="py-1 py-xl-1">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {bolanConfig.title}
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {bolanConfig.booknow}
          </Link>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h5 className="py-2">Suzuki Bolan Specifications</h5>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {bolanConfig.specifications.map((spec, index) => (
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
