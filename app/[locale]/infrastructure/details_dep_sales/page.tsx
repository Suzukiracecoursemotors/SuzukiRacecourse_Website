import Image from "next/image";
import React from "react";
import sale from "../../public/sale.jpeg";
import { Link } from "@/navigation";

const DepartmentsDetailsSales = async () => {
  const departmentDetails = [
    {
      href: "/sales/cuc",
      image: sale,
      alt: "Exchange and CUC",
      title: "Exchange and CUC Department",
      description:
        "Facilitating seamless vehicle exchanges and offering competitive CUC rates. We ensure you get the best value when trading in your old car for a new one.",
    },
    {
      href: "/sales/finance",
      image: sale,
      alt: "Lease and Finance",
      title: "Lease and Finance Department",
      description:
        "Offering flexible leasing and financing options tailored to your needs. Our team works with top financial institutions to secure the best rates for you.",
    },
    {
      href: "/sales/insurance",
      image: sale,
      alt: "Insurance",
      title: "Insurance Department",
      description:
        "Providing comprehensive insurance solutions for your vehicle. We work with leading providers to ensure maximum coverage and peace of mind.",
    },
  ];

  return (
    <section className="py-8 py-xl-10">
      <div className="container">
        <div className="row mb-10 g-3 g-xl-5 align-items-end">
          <div className="col-lg-8">
            <h1 className="display-1">Sales Departments</h1>
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

export default DepartmentsDetailsSales;
