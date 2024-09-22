import React from "react";

const config = {
  title: "Suzuki Spare Parts",

  whyChoose: [
    {
      title: "1. Genuine Suzuki Parts",
      description:
        "All our spare parts are 100% authentic, sourced directly from Suzuki to ensure perfect compatibility with your vehicle.",
    },
    {
      title: "2. Warranty Support",
      description:
        "All parts come with a Suzuki-backed warranty, giving you peace of mind and confidence in the longevity of your vehicle.",
    },
    {
      title: "3. Expert Guidance",
      description:
        "Our trained staff is here to guide you in selecting the right part for your Suzuki model, ensuring you get exactly what your vehicle needs.",
    },
  ],
};

export default function SuzukiSpareParts() {
  return (
    <article>
      <section className="py-9">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h1 className="display-3 text-blue">
                Why Choose Suzuki Spare Parts?
              </h1>
              {config.whyChoose.map((item, index) => (
                <div key={index}>
                  <h5>{item.title}</h5>
                  <p className="fs-lg text-secondary">{item.description}</p>
                  <br />
                </div>
              ))}

              <p>
                By choosing Suzuki genuine spare parts, you are ensuring your
                vehicle maintains its reliability, safety, and performance for
                years to come.
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
