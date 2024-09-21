import { Link } from "@/navigation";
import Image from "next/image";
import React from "react";
import sale from "../../public/retaildep.png";
import aftersale from "../../public/aftersale.png";
import ecvhange from "../../public/cucdep.png";
import lease from "../../public/leaseandfinance.png";
import insurance from "../../public/insurance.png";
import workshop from "../../public/workshop.png";
import sapreparts from "../../public/spareparts.png";
import bodyshop from "../../public/bodyshop.png";
import extend from "../../public/extendwarrenty.png";

const Departments = async () => {
  const departmentData = [
    {
      href: "sales",
      image: sale,
      alt: "Sales",
      title: "Sales Department",
      description:
        "Offering the best deals and a wide range of vehicles to meet your needs. Our dedicated team ensures a smooth buying experience for every customer. From selection to financing, we guide you every step of the way. With exclusive promotions and personalized services, we make car ownership hassle-free. Trust us to deliver a seamless experience tailored to your preferences.",
    },
    {
      href: "aftersale",
      image: aftersale,
      alt: "After Sales",
      title: "After Sales Department",
      description:
        "Providing top-notch maintenance, service, and support to keep your vehicle running smoothly. We prioritize customer satisfaction long after the sale. Our certified technicians use the latest tools and genuine parts to ensure quality service. Whether it's routine maintenance or complex repairs, we've got you covered.",
    },
    {
      href: "/sales/cuc",
      image: ecvhange,
      alt: "Exchange and CUC",
      title: "Exchange and CUC Department",
      description:
        "Facilitating seamless vehicle exchanges and offering competitive CUC rates. We ensure you get the best value when trading in your old car for a new one.",
    },
    {
      href: "/sales/finance",
      image: lease,
      alt: "Lease and Finance",
      title: "Lease and Finance Department",
      description:
        "Offering flexible leasing and financing options tailored to your needs. Our team works with top financial institutions to secure the best rates for you.",
    },
    {
      href: "/sales/insurance",
      image: insurance,
      alt: "Insurance",
      title: "Insurance Department",
      description:
        "Providing comprehensive insurance solutions for your vehicle. We work with leading providers to ensure maximum coverage and peace of mind.",
    },
    {
      href: "/aftersale/service",
      image: workshop,
      alt: "Workshop",
      title: "Workshop",
      description:
        "Our state-of-the-art workshops provide expert maintenance and repair services. With certified technicians, we ensure your vehicle is in top condition.",
    },
    {
      href: "/aftersale/spareparts",
      image: sapreparts,
      alt: "Spare Parts",
      title: "Spare Parts ",
      description:
        "We offer genuine spare parts to ensure your vehicle performs optimally. Our extensive inventory covers all your vehicle’s needs.",
    },
    {
      href: "/aftersale/bodyshop",
      image: bodyshop,
      alt: "Body and Paint",
      title: "Body and Paint Shop",
      description:
        "Our body and paint department provides top-notch repair services, ensuring your vehicle looks brand new. We use advanced tools and high-quality materials.",
    },
    {
      href: "/sales/extend_warranty",
      image: extend,
      alt: "Extended Warranty",
      title: "Extended Warranty ",
      description:
        "With our extended warranty programs, you can enjoy peace of mind long after your vehicle’s original warranty expires, covering repairs and services as needed.",
    },
  ];

  return (
    <section className="py-8">
      <div className="container">
        <div className="row mb-10 g-3 g-xl-5 align-items-end">
          <div className="col-lg-8">
            <h1 className="display-1">Departments</h1>
          </div>
          <div className="col-lg-4 text-lg-end">
            <p className="fs-lg text-muted">
              Trusted by <span className="text-black">250k+</span>{" "}
              <span className="d-block">customers worldwide</span>
            </p>
          </div>
        </div>

        <div className="row mb-5 g-3 g-xl-5">
          {departmentData.map((department, index) => (
            <Link href={department.href} key={index}>
              <div className="col-md-12">
                <div className="card card-arrow card-hover-border bg-white">
                  <div className="row g-0">
                    <div className="col-xl-5">
                      <Image
                        className="media equal-16-10"
                        layout="responsive"
                        width={100}
                        height={80}
                        src={department.image}
                        alt={department.alt}
                      />
                    </div>
                    <div className="col-xl-7 dflex">
                      <div className="card-body">
                        <small className="d-block ">
                          {department.description}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Departments;
