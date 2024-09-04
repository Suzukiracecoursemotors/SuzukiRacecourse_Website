import React from "react";
import { getTranslations } from "next-intl/server";
import image12 from "./Ravi/002 Ravi_page-0001.jpg";
import image13 from "./Ravi/002 Ravi_page-0002.jpg";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import Image from "next/image";
import { CarBookingForm } from "@/app/[locale]/common/form copy";
import CarosilsRavi from "./carosilcultus";

export default async function Ravi() {
  const textConfig = {
    title: "Suzuki Ravi",
    booknow: "Book Now",
    sections: [
      {
        heading: "Suzuki Ravi: A Comprehensive Review",
        content:
          "The Suzuki Ravi, a versatile and reliable light commercial vehicle, is known for its durability, practicality, and affordability. Designed to meet the needs of businesses and individuals alike, the Ravi has become a popular choice in the light truck segment. This article explores the features, performance, and advantages of the Suzuki Ravi, offering insights into why it remains a top choice for commercial transportation.",
      },
      {
        heading: "History and Evolution",
        content:
          "Since its introduction, the Suzuki Ravi has evolved significantly to meet the changing demands of the market. From its early days as a simple and robust workhorse, the Ravi has continually improved in terms of design, performance, and technology. Today, it is recognized as a dependable vehicle for various commercial applications, from small business deliveries to personal transport needs.",
      },
      {
        heading: "Design and Exterior Features",
        content:
          "The Suzuki Ravi is designed with practicality in mind. Its compact dimensions allow for easy navigation through narrow streets and tight spaces, while its sturdy construction ensures durability even in demanding conditions. The Ravi’s design is straightforward, with a focus on functionality and utility. The vehicle features a spacious cargo area, making it ideal for transporting goods and equipment.",
      },
      {
        heading: "Interior Comfort and Space",
        content:
          "Inside, the Suzuki Ravi offers a basic yet functional cabin designed to maximize comfort for the driver. The interior is simple, with easy-to-use controls and a layout that prioritizes practicality. While the Ravi is primarily focused on utility, it does not compromise on providing a comfortable driving experience, even during long hauls.",
      },
      {
        heading: "Performance and Efficiency",
        content:
          "The Suzuki Ravi is powered by a reliable and fuel-efficient engine, making it a cost-effective choice for businesses concerned about operating expenses. The vehicle’s performance is tailored to meet the demands of commercial use, offering sufficient power for carrying loads while maintaining good fuel economy. Its robust suspension and handling make it capable of handling a variety of road conditions with ease.",
      },
      {
        heading: "Safety Features",
        content:
          "Safety is a critical consideration in the design of the Suzuki Ravi. The vehicle is equipped with essential safety features such as seat belts, a reinforced body structure, and responsive braking systems to ensure the safety of the driver and cargo. The Ravi’s compact size also enhances its maneuverability, allowing drivers to navigate safely in tight spaces.",
      },
      {
        heading: "Technology and Infotainment",
        content:
          "While the Suzuki Ravi is primarily a commercial vehicle, it does offer some basic technological features to enhance the driving experience. These include a straightforward infotainment system and essential connectivity options, allowing drivers to stay connected while on the move.",
      },
      {
        heading: "Comparison with Competitors",
        content:
          "In the light truck segment, the Suzuki Ravi competes with other vehicles like the Daihatsu Hijet and the Hyundai Porter. However, the Ravi stands out due to its combination of affordability, reliability, and low maintenance costs. Its simplicity and focus on practicality make it a preferred choice for businesses that need a dependable work vehicle without the frills.",
      },
      {
        heading: "Environmental Impact",
        content:
          "The Suzuki Ravi is designed to be environmentally conscious, with a focus on fuel efficiency and reduced emissions. Its lightweight design and efficient engine contribute to lower fuel consumption, making it a more eco-friendly option in the commercial vehicle market. Suzuki’s ongoing efforts to minimize the environmental impact of its vehicles are reflected in the Ravi’s design and performance.",
      },
      {
        heading: "Conclusion",
        content:
          "The Suzuki Ravi is a practical and reliable light commercial vehicle that offers excellent value for money. Its combination of durability, efficiency, and affordability makes it an ideal choice for businesses and individuals alike. Whether you need a vehicle for daily deliveries or for transporting goods over longer distances, the Suzuki Ravi delivers the performance and reliability you need.",
      },
    ],
  };
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilsRavi />
      </section>

      <section className="py-5 py-xl-15">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4">
            {textConfig.title}
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {textConfig.booknow}
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {textConfig.sections.map((section, index) => (
                <div key={index}>
                  <h5>{section.heading}</h5>
                  <p className="fs-lg text-secondary">{section.content}</p>
                </div>
              ))}
              <br />
            </div>
          </div>
        </div>
      </section>
      <Image
        className="back-background"
        src={image13}
        alt="Suzuki Ravi"
        layout="responsive"
      />
    </article>
  );
}
