import { getTranslations } from "next-intl/server";
import Image from "next/image";
import oil from "../public/aftersalejpg.jpg";
import Constants from "@/data/Constants";
import Maintain from "./maintainpoint";
import Whychose from "./whychose";
import Cards from "./maintainpoint";

const aftersaleConfig = {
  title: "AfterSales",
  sections: [
    {
      icon: "bi-gear-fill",
      title: "Mechanical WorkShop",
      description:
        "At Suzuki, our mechanical workshops are designed to provide top-tier service and expertise for all Suzuki vehicles. Whether its routine maintenance, engine diagnostics, our skilled technicians ensure that your vehicle is treated with the utmost care.",
      link: "/en/aftersale/service",
      linkText: "Learn More",
    },
    {
      icon: "bi-bookmark-star",
      title: "Extended Warranty",
      description:
        "We prioritize our customers preferences when it comes to engine oil selection. Suzuki vehicles require precision and high-quality products to maintain their performance. Our workshop offers a variety of engine oils, tailored to meet the diverse needs of each Suzuki model.",
      link: "/en/aftersale/extend_warrenty",
      linkText: "Learn More",
    },
    {
      icon: "bi-paint-bucket",
      title: "Paint & BodyShop",
      description:
        "Our state-of-the-art body shop provides expert repairs for all Suzuki models. If your vehicle's frame has been compromised in an accident, our team specializes in restoring its structural integrity, ensuring safety and performance.",
      link: "/en/aftersale/bodyshop",
      linkText: "Learn More",
    },
  ],
  whyChooseUs: {
    title: "Why Choose Suzuki?",
    features: [
      "1. Genuine Parts",
      "2. Certified Technicians",
      "3. State-of-the-art Equipment",
    ],
    buttonText: "Reserve Appointment",
  },
  services: [
    "First Free Inspection (1,000 Km)",
    "Second Free Inspection (5,000 Km)",
    "Schedule Maintenance (every 5,000 Km)",
    "A/C Service, Repair, Replacement & Installation",
    "Engine Tuning Petrol & CNG",
    "Wheel Balancing & Alignment",
    "Brake Overhauling",
    "Suspension Repair & Overhauling",
    "Washing & Interior Cleaning",
    "Transmission Repair & Replacement",
    "Battery Check & Replacement",
    "Fuel System Cleaning",
    "Exhaust System Repair & Replacement",
    "Tire Rotation & Replacement",
    "Oil Change & Filter Replacement",
    "Radiator & Cooling System Service",
    "Headlight & Taillight Replacement",
    "Windshield & Window Repair",
    "Electrical Diagnostics & Repair",
    "Steering & Suspension Inspection",
  ],

  maintenanceTitle: "We maintain all types of vehicles.",
};

async function Aftersale() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <Cards />

      <Whychose />

      <Maintain />
    </>
  );
}

export default Aftersale;
