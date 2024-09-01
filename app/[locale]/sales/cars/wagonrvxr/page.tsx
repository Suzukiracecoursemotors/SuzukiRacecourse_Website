import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import imageWagonR from "./Wagonr/005 Wagon R_page-0003.jpg";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import CarosilWagonR from "./carosilwagonr";
import { CarBookingForm } from "@/app/[locale]/common/form copy";

export default async function WagonR() {
  const t = await getTranslations({
    namespace: "page.blogs",
  });

  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilWagonR />
      </section>

      <section className="py-5 py-xl-15">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4">
            Suzuki WagonR
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> Book Now
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div>
                <div>
                  <h3 style={{ textAlign: "center" }}>
                    Suzuki WagonR: A Comprehensive Review
                  </h3>
                  <p className="fs-lg text-secondary">
                    The Suzuki WagonR is one of the most popular hatchbacks in
                    the world, known for its boxy design, spacious interior, and
                    excellent practicality. Since its launch, the WagonR has
                    consistently delivered a unique blend of affordability,
                    efficiency, and versatility, making it a favorite among
                    urban drivers. This article takes an in-depth look at the
                    Suzuki WagonR, exploring its various features and what makes
                    it stand out in the crowded hatchback segment.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>History and Evolution</h5>
                  <p className="fs-lg text-secondary">
                    The Suzuki WagonR was first introduced in 1993, and it
                    quickly gained popularity due to its unconventional design
                    and functional approach. Over the years, Suzuki has refined
                    the WagonR, making it more fuel-efficient, spacious, and
                    technologically advanced. The WagonR has evolved with each
                    generation, adapting to changing market demands while
                    retaining its core values of practicality and economy.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Design and Exterior Features</h5>
                  <p className="fs-lg text-secondary">
                    The Suzuki WagonRs design is instantly recognizable with its
                    tall-boy stance, providing excellent headroom and a
                    commanding view of the road. The boxy shape not only
                    maximizes interior space but also gives the car a distinct
                    identity. The WagonR features modern design elements such as
                    sharp headlamps, a bold grille, and clean lines, all of
                    which contribute to its urban appeal. Its compact dimensions
                    make it easy to navigate through tight city streets, while
                    the high roofline ensures that the car feels airy and
                    spacious inside.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Interior Comfort and Space</h5>
                  <p className="fs-lg text-secondary">
                    Inside the Suzuki WagonR, youll find a surprisingly roomy
                    and comfortable cabin. The tall-boy design allows for ample
                    headroom, and the clever use of space ensures that even
                    taller passengers can sit comfortably. The seats are well
                    cushioned, providing good support during long drives. The
                    WagonRs interior is practical, with numerous storage
                    compartments and a large boot space, making it ideal for
                    families and those who need extra room for their belongings.
                    The dashboard is user-friendly, with easy-to-reach controls
                    and a simple, yet functional layout.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Performance and Efficiency</h5>
                  <p className="fs-lg text-secondary">
                    The Suzuki WagonR is powered by a fuel-efficient engine that
                    delivers a balance of performance and economy. The car is
                    available in various engine options, including a
                    fuel-sipping petrol engine and a more powerful variant for
                    those who desire a bit more oomph. The lightweight
                    construction of the WagonR ensures that it remains nimble
                    and responsive, making it easy to drive in city traffic. Its
                    excellent fuel efficiency is one of the key reasons for its
                    popularity, as it helps keep running costs low, making it an
                    economical choice for daily commuting.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Safety Features</h5>
                  <p className="fs-lg text-secondary">
                    Safety is a top priority in the design of the Suzuki WagonR.
                    The car comes equipped with essential safety features,
                    including airbags, ABS with EBD, and a robust body structure
                    that enhances crash protection. The high seating position
                    and large windows provide excellent visibility, further
                    contributing to the safety of the vehicle. Suzuki has
                    ensured that the WagonR meets or exceeds safety standards,
                    making it a reliable choice for families and individual
                    drivers alike.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Technology and Infotainment</h5>
                  <p className="fs-lg text-secondary">
                    The Suzuki WagonR may be a budget-friendly car, but it
                    doesnt compromise on technology. The car is equipped with a
                    range of features, including a touchscreen infotainment
                    system, Bluetooth connectivity, and steering-mounted
                    controls. These features make driving the WagonR a pleasant
                    experience, allowing you to stay connected and entertained
                    on the go. The infotainment system is easy to use, with a
                    responsive interface that provides access to various
                    functions without distracting the driver.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Comparison with Competitors</h5>
                  <p className="fs-lg text-secondary">
                    The Suzuki WagonR competes with other popular hatchbacks in
                    the market, such as the Hyundai Santro, Tata Tiago, and
                    Maruti Suzuki Celerio. What sets the WagonR apart is its
                    spacious interior, high seating position, and excellent fuel
                    efficiency. While some competitors may offer more luxurious
                    features, the WagonR excels in practicality and value for
                    money. It is an ideal choice for those who prioritize
                    functionality and economy over frills.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Environmental Impact</h5>
                  <p className="fs-lg text-secondary">
                    The Suzuki WagonR is designed with an emphasis on
                    environmental responsibility. Its fuel-efficient engine
                    reduces carbon emissions, making it a greener choice in the
                    hatchback segment. Suzuki has also focused on using
                    eco-friendly materials and sustainable manufacturing
                    processes, further minimizing the environmental impact of
                    the WagonR. For environmentally-conscious buyers, the WagonR
                    offers a sensible choice without compromising on
                    practicality or affordability.
                  </p>
                </div>
              </div>

              <div>
                <div>
                  <h5>Conclusion</h5>
                  <p className="fs-lg text-secondary">
                    The Suzuki WagonR is a car that combines practicality,
                    efficiency, and affordability in a unique package. Its
                    spacious interior, reliable performance, and budget-friendly
                    price make it a top choice for urban drivers. Whether youre
                    looking for a family car or a vehicle for your daily
                    commute, the WagonR offers everything you need in a compact
                    and stylish design. With its proven track record and
                    continuous improvements, the Suzuki WagonR remains a strong
                    contender in the hatchback market.
                  </p>
                </div>
              </div>

              <br />
              <Image
                src={imageWagonR}
                layout="responsive"
                alt="Suzuki WagonR"
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
