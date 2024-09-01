import React from "react";
import { getTranslations } from "next-intl/server";
import CarosilBolan from "./carosilalto";
import { CarBookingForm } from "@/app/[locale]/common/form copy";
import Constants from "@/data/Constants";
import { Link } from "@/navigation";

export default async function BolanSuzuki() {
  const t = await getTranslations({ namespace: "page.blogs" });

  return (
    <article>
      {/* Banner Section */}
      <section className="bg-black inverted overflow-hidden">
        <CarosilBolan />
      </section>

      {/* Suzuki Bolan Article */}
      <section className="py-15 py-xl-20">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4">
            Suzuki Bolan
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
                  Suzuki Bolan: A Versatile Workhorse
                </h3>
                <p className="fs-lg text-secondary">
                  The Suzuki Bolan, also known as the Suzuki Carry in some
                  markets, is a compact and versatile van that has served as a
                  reliable workhorse for businesses and individuals alike. With
                  its robust design and practical features, the Bolan is a
                  popular choice for those needing a dependable vehicle for
                  transporting goods, passengers, or both.
                </p>
              </div>

              <div>
                <h5>Design and Exterior</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Bolan features a straightforward and utilitarian
                  design that prioritizes functionality. Its compact size allows
                  it to navigate tight city streets with ease, while its sturdy
                  build ensures it can handle the demands of daily use. The
                  Bolans exterior design is minimalistic, with a focus on
                  maximizing interior space for cargo and passengers.
                </p>
              </div>

              <div>
                <h5>Interior Comfort and Utility</h5>
                <p className="fs-lg text-secondary">
                  Inside, the Bolan is designed for practicality. The cabin is
                  spacious enough to comfortably seat passengers or carry cargo,
                  depending on the configuration. While the interior is basic,
                  it is functional, with easy-to-use controls and a layout that
                  makes the most of the available space. The Bolan is
                  particularly popular in the commercial sector, where its
                  versatility is highly valued.
                </p>
              </div>

              <div>
                <h5>Performance and Fuel Efficiency</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Bolan is equipped with a reliable engine that
                  balances performance with fuel efficiency. Whether used for
                  transporting goods or passengers, the Bolan offers a smooth
                  and efficient driving experience. Its fuel economy is one of
                  its key strengths, making it an economical choice for
                  businesses looking to minimize operating costs.
                </p>
              </div>

              <div>
                <h5>Safety and Reliability</h5>
                <p className="fs-lg text-secondary">
                  Safety is a crucial consideration in the design of the Suzuki
                  Bolan. The vehicle is equipped with essential safety features,
                  including seat belts and a reinforced body structure, to
                  ensure the safety of both the driver and passengers. The
                  Bolans reputation for reliability further enhances its appeal,
                  particularly in regions where dependability is critical.
                </p>
              </div>

              <div>
                <h5>Market Comparison</h5>
                <p className="fs-lg text-secondary">
                  In the market, the Suzuki Bolan competes with other compact
                  vans and light commercial vehicles. However, it stands out due
                  to its affordability, reliability, and versatility. Compared
                  to its competitors, the Bolan offers a unique combination of
                  features that make it a preferred choice for many businesses
                  and individuals.
                </p>
              </div>

              <div>
                <h5>Conclusion</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Bolan is a practical and reliable vehicle that
                  excels in both commercial and personal use. Its combination of
                  durability, efficiency, and versatility makes it a strong
                  contender in the light commercial vehicle market. Whether used
                  for transporting goods, passengers, or a mix of both, the
                  Bolan delivers the performance and reliability that users
                  expect from Suzuki.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
