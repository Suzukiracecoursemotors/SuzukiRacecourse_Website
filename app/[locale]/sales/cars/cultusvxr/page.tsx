import React from "react";
import { getTranslations } from "next-intl/server";
import image12 from "./Cultus/006 Cultus_page-0001.jpg";
import image1 from "./Cultus/006 Cultus_page-0007.jpg";
import { CarBookingForm } from "@/app/[locale]/common/form copy";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import Image from "next/image";
import CarosilCultus from "./carosilcultus";

export default async function Cultus() {
  const t = await getTranslations({
    namespace: "page.blogs",
  });

  return (
    <article>
      <section className="relative bg-black inverted overflow-hidden">
        <CarosilCultus />
      </section>

      <section className="py-5 py-xl-15">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4">
            Suzuki Cultus
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill "
          >
            <i className="bi bi-telephone-fill ms-1"></i> Book Now
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div>
                <h3 style={{ textAlign: "center" }}>
                  Suzuki Cultus: A Comprehensive Review
                </h3>
                <p className="fs-lg text-secondary">
                  The Suzuki Cultus is a versatile compact car known for its
                  blend of style, performance, and practicality. With a long
                  history of satisfying drivers, the Cultus has evolved to meet
                  the demands of modern motoring. This article provides an
                  in-depth look at what makes the Suzuki Cultus a standout
                  choice in its segment.
                </p>
              </div>

              <div>
                <h5>History and Evolution</h5>
                <p className="fs-lg text-secondary">
                  Introduced in the 1980s, the Suzuki Cultus quickly gained
                  popularity due to its affordability and reliability. Over the
                  years, the Cultus has undergone several transformations, each
                  enhancing its design, performance, and technology. From its
                  early days as a basic compact car to its current status as a
                  well-rounded vehicle, the Cultus has remained a favorite among
                  drivers looking for a dependable and stylish option.
                </p>
              </div>

              <div>
                <h5>Design and Exterior Features</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Cultus boasts a sleek and modern design that makes
                  it stand out on the road. Its aerodynamic profile, stylish
                  headlights, and distinctive grille contribute to its
                  contemporary look. The Cultus is designed to be both
                  functional and attractive, with a focus on aerodynamic
                  efficiency and visual appeal.
                </p>
              </div>

              <div>
                <h5>Interior Comfort and Space</h5>
                <p className="fs-lg text-secondary">
                  Inside, the Suzuki Cultus offers a comfortable and spacious
                  environment for both the driver and passengers. The cabin is
                  designed with quality materials and thoughtful layout,
                  providing a pleasant driving experience. Features such as
                  supportive seats and an intuitive dashboard layout enhance
                  overall comfort and usability.
                </p>
              </div>

              <div>
                <h5>Performance and Efficiency</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Cultus is equipped with an efficient engine that
                  strikes a balance between power and fuel economy. Its
                  performance is well-suited for both city driving and longer
                  journeys, making it a practical choice for various driving
                  needs. The Cultus is engineered to deliver reliable
                  performance while keeping operating costs low.
                </p>
              </div>

              <div>
                <h5>Safety Features</h5>
                <p className="fs-lg text-secondary">
                  Safety is a key focus in the design of the Suzuki Cultus. The
                  car is equipped with essential safety features, including
                  airbags, anti-lock braking systems, and stability control.
                  These features work together to ensure the safety of both the
                  driver and passengers.
                </p>
              </div>

              <div>
                <h5>Technology and Infotainment</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Cultus offers a range of modern technology and
                  infotainment options, including a touchscreen display,
                  Bluetooth connectivity, and a quality sound system. These
                  features enhance the driving experience by providing
                  convenient access to entertainment and communication tools.
                </p>
              </div>

              <div>
                <h5>Comparison with Competitors</h5>
                <p className="fs-lg text-secondary">
                  In its segment, the Suzuki Cultus faces competition from
                  various compact cars. However, it stands out due to its
                  combination of value for money, reliability, and practicality.
                  Compared to competitors, the Cultus offers a compelling mix of
                  features at a competitive price point.
                </p>
              </div>

              <div>
                <h5>Environmental Impact</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Cultus is designed with environmental
                  considerations in mind. Its efficient engine and lightweight
                  design contribute to lower emissions and reduced fuel
                  consumption. Suzuki is also committed to minimizing the
                  environmental impact of its vehicles through sustainable
                  practices.
                </p>
              </div>

              <div>
                <h5>Conclusion</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Cultus is a well-rounded compact car that offers a
                  blend of style, performance, and practicality. Its history of
                  reliability and continuous improvement make it a strong choice
                  for drivers seeking a dependable and efficient vehicle.
                  Whether for daily commuting or longer trips, the Cultus
                  delivers on all fronts.
                </p>
              </div>

              <br />
            </div>
          </div>
        </div>
      </section>
      <Image
        className="back-background "
        src={image1}
        alt={""}
        layout="responsive"
      />
    </article>
  );
}
