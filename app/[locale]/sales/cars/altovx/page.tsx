import React from "react";
import CarosilAltoVX from "./carosilalto";
import Image from "next/image";
import image12 from "../../cars/altovx/New folder/Untitled.png";
import image1 from "../../cars/altovx/New folder/Untitled1.png";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";

// Configuration object for the text content
const altoConfig = {
  title: "Suzuki Alto",
  booknow: "Book Now",
  overview: {
    heading: "Suzuki Alto: A Comprehensive Review",
    content: `The Suzuki Alto is a small car with a big reputation. Over the years, it has become synonymous with affordability, reliability, and practicality. Since its introduction, Suzuki has continuously refined the Alto to meet the evolving demands of drivers, particularly in urban settings where space and efficiency are paramount. This article delves into the various aspects of the Suzuki Alto, offering an in-depth look at why it remains a top choice for many motorists around the world.`,
  },
  sections: [
    {
      title: "History and Evolution",
      content: `The Suzuki Alto was first introduced in 1979 as a kei car in Japan, designed to meet the specific needs of urban drivers seeking a compact, efficient vehicle. Over the decades, the Alto has undergone significant changes, with each new generation offering improved performance, technology, and comfort. Today, the Alto is recognized globally as a versatile and dependable vehicle, available in various markets with different specifications to suit local preferences.`,
    },
    {
      title: "Design and Exterior Features",
      content: `The Suzuki Alto's design has always been focused on practicality and efficiency. Its compact dimensions make it easy to maneuver through crowded city streets and park in tight spaces. Despite its small size, the Alto's design is modern and appealing, with smooth lines and a sleek profile that contribute to its aerodynamic efficiency. The contemporary design elements, such as stylish headlights and a distinctive grille, give the Alto a fresh and youthful appearance.`,
    },
    {
      title: "Interior Comfort and Space",
      content: `Step inside the Suzuki Alto, and you'll be surprised by how spacious it feels for a compact car. The interior is thoughtfully designed to maximize space, providing ample room for both the driver and passengers. The seats are comfortable, offering good support even during longer journeys. The dashboard is laid out in a user-friendly manner, with controls that are intuitive and easy to reach. Despite its budget-friendly price tag, the Alto does not skimp on quality, with durable materials used throughout the cabin.`,
    },
    {
      title: "Performance and Efficiency",
      content: `Under the hood, the Suzuki Alto is powered by a fuel-efficient engine that delivers a balance of power and economy. Whether you're driving through city traffic or on the open road, the Alto's engine provides adequate performance while keeping fuel consumption to a minimum. This makes it an ideal choice for those looking to reduce their carbon footprint without sacrificing the convenience of a personal vehicle. The lightweight construction of the Alto further enhances its efficiency, allowing for nimble handling and a responsive driving experience.`,
    },
    {
      title: "Safety Features",
      content: `Safety is a key consideration in the design of the Suzuki Alto. The car is equipped with essential safety features to protect both the driver and passengers. These include seat belts with pre-tensioners, child safety locks, an immobilizer, and airbags in some models. The Alto's compact size and responsive handling also contribute to its safety, making it easier to avoid potential hazards on the road. Suzuki's commitment to safety is evident in the build quality of the Alto, ensuring that it meets or exceeds safety standards in all markets where it is sold.`,
    },
    {
      title: "Technology and Infotainment",
      content: `While the Suzuki Alto is designed as a budget-friendly car, it doesn't skimp on technology. Depending on the trim level, the Alto can be equipped with various infotainment options, including a touchscreen display, Bluetooth connectivity, and a sound system that delivers clear and crisp audio. The controls are straightforward, allowing drivers to focus on the road while enjoying their favorite music or making hands-free calls.`,
    },
    {
      title: "Comparison with Competitors",
      content: `In the compact car segment, the Suzuki Alto faces stiff competition from other manufacturers. However, it holds its own thanks to its exceptional value for money, reliability, and low running costs. Compared to competitors like the Kia Picanto, Hyundai i10, and Toyota Aygo, the Alto is often more affordable both in terms of purchase price and maintenance. Its simplicity is its strength, appealing to drivers who prioritize function over luxury.`,
    },
    {
      title: "Environmental Impact",
      content: `The Suzuki Alto is not only economical but also environmentally friendly. Its small engine size and lightweight design contribute to lower emissions, making it a greener choice in the urban car market. Suzuki has also been working on further reducing the environmental impact of the Alto by incorporating more sustainable materials and manufacturing processes. For eco-conscious drivers, the Alto represents a responsible choice that doesn't compromise on practicality or affordability.`,
    },
    {
      title: "Conclusion",
      content: `The Suzuki Alto is a car that perfectly embodies the concept of less is more. Its compact size, efficient engine, and practical features make it an ideal choice for urban drivers. Whether you're a first-time car buyer, looking for a reliable second car, or simply want a vehicle that is easy to drive and maintain, the Alto delivers on all fronts. With its long history of reliability and continuous improvement, the Suzuki Alto remains a top contender in the compact car market.`,
    },
  ],
};

export default async function Alto() {
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <CarosilAltoVX />
      </section>

      <section className="py-5 py-xl-15">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4">
            {altoConfig.title}
          </h1>
          <CarBookingForm />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill"
          >
            <i className="bi bi-telephone-fill ms-1"></i> {altoConfig.booknow}
          </Link>
        </div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div>
                <h3 style={{ textAlign: "center" }}>
                  {altoConfig.overview.heading}
                </h3>
                <p className="fs-lg text-secondary">
                  {altoConfig.overview.content}
                </p>
              </div>

              {altoConfig.sections.map((section, index) => (
                <div key={index}>
                  <h5>{section.title}</h5>
                  <p className="fs-lg text-secondary">{section.content}</p>
                </div>
              ))}

              <br />
              <Image src={image12} layout="responsive" alt="Suzuki Alto" />
              <Image src={image1} layout="responsive" alt="Suzuki Alto" />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
