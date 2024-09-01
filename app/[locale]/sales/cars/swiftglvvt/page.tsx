import React from "react";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import imageSwift from "./Swift/001 Swift_page-0001.jpg";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/form copy";
import CarosilSwift from "./carosilcultus";

export default async function Swift() {
  const t = await getTranslations({
    namespace: "page.blogs",
  });

  return (
    <article>
      {/* Carousel Section */}
      <section className="bg-black inverted overflow-hidden">
        <CarosilSwift />
      </section>

      {/* Suzuki Swift Article */}
      <section className="py-5 py-xl-15">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-white mb-4">
            Suzuki Swift
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
                <h3 style={{ textAlign: "center" }}>
                  Suzuki Swift: A Sporty Hatchback with Style
                </h3>
                <p className="fs-lg text-secondary">
                  The Suzuki Swift is a compact hatchback that combines sporty
                  design with a fun driving experience. Renowned for its agile
                  handling and stylish appearance, the Swift has been a popular
                  choice for drivers who value both performance and aesthetics.
                  This article provides an in-depth look at the Suzuki Swift,
                  highlighting its key features and what sets it apart from
                  other hatchbacks in its class.
                </p>
              </div>

              <div>
                <h5>History and Evolution</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Swift first made its debut in 1983 and has since
                  undergone several generations of refinement. Known for its
                  dynamic performance and contemporary design, the Swift has
                  continually evolved to meet modern driving demands. With each
                  new iteration, Suzuki has introduced advanced features and
                  improved the Swift's overall driving experience, maintaining
                  its status as a popular choice in the compact car segment.
                </p>
              </div>

              <div>
                <h5>Design and Exterior Features</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Swift stands out with its bold and dynamic design.
                  Its sporty stance is characterized by a low profile,
                  aggressive front grille, and sleek lines that convey a sense
                  of motion. The Swift's exterior design is complemented by
                  stylish alloy wheels and distinctive headlamp designs, which
                  enhance its overall visual appeal. The compact dimensions make
                  it ideal for urban driving, while its aerodynamic shape
                  contributes to improved performance and fuel efficiency.
                </p>
              </div>

              <div>
                <h5>Interior Comfort and Features</h5>
                <p className="fs-lg text-secondary">
                  Inside, the Suzuki Swift offers a driver-focused cockpit with
                  intuitive controls and modern technology. The cabin features
                  quality materials and ergonomic design, providing a
                  comfortable driving environment. The Swift's spacious interior
                  offers ample legroom and headroom for both front and rear
                  passengers, and the rear seats can be folded to expand the
                  cargo space. Notable interior features include a touchscreen
                  infotainment system, automatic climate control, and steering
                  wheel-mounted controls for added convenience.
                </p>
              </div>

              <div>
                <h5>Performance and Handling</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Swift delivers a lively and engaging driving
                  experience, thanks to its responsive handling and efficient
                  engine options. Available with various engine configurations,
                  including petrol and diesel variants, the Swift offers a
                  balance of performance and fuel economy. Its lightweight
                  construction and precise steering contribute to nimble
                  handling, making it well-suited for both city driving and
                  spirited weekend drives. The Swift's suspension system ensures
                  a smooth ride while maintaining excellent road feedback.
                </p>
              </div>

              <div>
                <h5>Safety and Security</h5>
                <p className="fs-lg text-secondary">
                  Safety is a key priority in the Suzuki Swift, which is
                  equipped with a range of safety features to protect occupants.
                  Standard safety equipment includes multiple airbags, ABS with
                  EBD, and electronic stability control. The Swift also features
                  a robust body structure and advanced safety technologies such
                  as rear parking sensors and a rearview camera. These features
                  contribute to the Swift's strong safety performance and
                  enhance driver and passenger confidence.
                </p>
              </div>

              <div>
                <h5>Technology and Infotainment</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Swift is equipped with a range of technology and
                  infotainment features that enhance the driving experience. The
                  car comes with a modern touchscreen infotainment system that
                  supports smartphone connectivity through Apple CarPlay and
                  Android Auto. Other technological amenities include Bluetooth
                  hands-free calling, USB ports, and a high-quality audio
                  system. These features ensure that drivers and passengers stay
                  connected and entertained during their journeys.
                </p>
              </div>

              <div>
                <h5>Comparison with Competitors</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Swift competes with other compact hatchbacks such
                  as the Hyundai i20, Ford Fiesta, and Honda Jazz. What sets the
                  Swift apart is its sporty design, engaging driving dynamics,
                  and strong value for money. While some competitors may offer
                  more luxury features, the Swift excels in delivering a fun
                  driving experience and practicality at an accessible price
                  point. Its blend of style, performance, and affordability
                  makes it a compelling option in its segment.
                </p>
              </div>

              <div>
                <h5>Environmental Impact</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Swift is designed with environmental considerations
                  in mind. Its efficient engines contribute to lower carbon
                  emissions, and Suzuki has focused on incorporating
                  eco-friendly materials and sustainable manufacturing
                  processes. The Swift's fuel-efficient performance helps reduce
                  the overall environmental footprint, making it a suitable
                  choice for environmentally-conscious drivers who seek a
                  balance between performance and ecological responsibility.
                </p>
              </div>

              <div>
                <h5>Conclusion</h5>
                <p className="fs-lg text-secondary">
                  The Suzuki Swift stands out as a sporty and practical
                  hatchback that delivers a blend of performance, style, and
                  value. With its engaging driving experience, modern features,
                  and strong safety profile, the Swift remains a popular choice
                  among drivers seeking a compact car with character. Whether
                  for daily commuting or weekend adventures, the Suzuki Swift
                  offers a well-rounded package that continues to impress and
                  appeal to a wide range of drivers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
