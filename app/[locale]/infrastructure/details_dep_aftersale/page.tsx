import Image from "next/image";
import React from "react";
import sale from "../../public/sale.jpeg"; // Replace with actual images
import { Link } from "@/navigation";

const DepartmentsDetailsAfterSales = async () => {
  const departmentDetails = [
    {
      href: "/aftersale/service",
      image: sale,
      alt: "Workshop",
      title: "Workshop",
      description:
        "Our state-of-the-art workshops provide expert maintenance and repair services. With certified technicians, we ensure your vehicle is in top condition.",
    },
    {
      href: "/aftersale/spareparts",
      image: sale,
      alt: "Spare Parts",
      title: "Spare Parts ",
      description:
        "We offer genuine spare parts to ensure your vehicle performs optimally. Our extensive inventory covers all your vehicle’s needs.",
    },
    {
      href: "/aftersale/bodyshop",
      image: sale,
      alt: "Body and Paint",
      title: "Body and Paint Shop",
      description:
        "Our body and paint department provides top-notch repair services, ensuring your vehicle looks brand new. We use advanced tools and high-quality materials.",
    },
    {
      href: "/sales/extend_warranty",
      image: sale,
      alt: "Extended Warranty",
      title: "Extended Warranty ",
      description:
        "With our extended warranty programs, you can enjoy peace of mind long after your vehicle’s original warranty expires, covering repairs and services as needed.",
    },
  ];

  return (
    <section className="py-8 py-xl-10">
      <div className="container">
        <div className="row mb-10 g-3 g-xl-5 align-items-end">
          <div className="col-lg-8">
            <h1 className="display-1"> After Sales Departments</h1>
          </div>
          <div className="col-lg-4 text-lg-end">
            <p className="fs-lg text-muted">
              Trusted by <span className="text-black">250k+</span>{" "}
              <span className="d-block">customers worldwide</span>
            </p>
          </div>
        </div>

        <div className="row mb-5 g-3 g-xl-5">
          {departmentDetails.map((department, index) => (
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
                    <div className="col-xl-7">
                      <div className="card-body">
                        <h3 className="card-title mt-2 fs-4 lh-2 pe-xl-10 text-black">
                          {department.title}
                        </h3>
                        <small className="d-block">
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

export default DepartmentsDetailsAfterSales;
