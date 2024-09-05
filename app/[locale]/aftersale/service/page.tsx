import Image from "next/image";
import React from "react";
import homepic from "./WhatsApp Image 2024-09-05 at 11.10.02 AM.jpeg";
const config = {
  title: "Mechanical Workshop",
  note: "NOTE: √: Applicable X: Not Applicable",
};
export default async function MechanicalWorkshop() {
  return (
    <article>
      <section className="py-10">
        <Image
          src={homepic}
          layout="responsive"
          alt=" background-image background "
        />{" "}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div>
                <h1 className="display-1 text-blue">{config.title} </h1>
                <div>
                  <p className="fs-lg text-secondary">
                    At Suzuki, our mechanical workshops are designed to provide
                    top-tier service and expertise for all Suzuki vehicles.
                    Whether its routine maintenance, engine diagnostics, or
                    complex repairs, our skilled technicians ensure that your
                    vehicle is treated with the utmost care. We believe in
                    delivering excellence through advanced tools, genuine Suzuki
                    parts, and a team of certified professionals.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>Customer Choice of Engine Oil</h5>
                  <p className="fs-lg text-secondary">
                    We prioritize our customers preferences when it comes to
                    engine oil selection. Suzuki vehicles require precision and
                    high-quality products to maintain their performance. Our
                    workshop offers a variety of engine oils, tailored to meet
                    the diverse needs of each Suzuki model.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Comprehensive Services</h5>
                  <p className="fs-lg text-secondary">
                    We offer a wide range of services at our mechanical
                    workshop, including:
                  </p>
                </div>
                <div>
                  <ul className="list-group">
                    <li className="list-group-item d-flex align-items-center">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Engine Overhauling{" "}
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Transmission Repair{" "}
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Brake System Maintenance{" "}
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Suspension Tuning{" "}
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Electrical Diagnostics{" "}
                    </li>
                    <li className="list-group-item d-flex align-items-center">
                      <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                        <i className="bi bi-check2 text-green"></i>
                      </div>
                      Air Conditioning Repair
                    </li>
                  </ul>
                </div>
              </div>
              <h1 className="display-1 text-blue">{config.title} </h1>
              <div>
                <div>
                  <h5>Genuine Parts</h5>
                  <p className="fs-lg text-secondary">
                    We use only authentic Suzuki parts to maintain the integrity
                    of your vehicle.
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>Certified Technicians</h5>
                  <p className="fs-lg text-secondary">
                    Our team is trained to handle every Suzuki model with
                    expertise.{" "}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>State-of-the-art Equipment</h5>
                  <p className="fs-lg text-secondary">
                    Our workshops are equipped with the latest tools and
                    technology to ensure accurate and efficient repairs.
                  </p>
                </div>
              </div>
              <p>
                By choosing Suzuki, youre ensuring that your vehicle receives
                the best care possible, keeping it in peak condition for years
                to come
              </p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
