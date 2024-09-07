import { Link } from "@/navigation";
import Image from "next/image";
import React from "react";
import sale from "../../public/sale.jpeg";
import Constants from "@/data/Constants";

const Departments = async () => {
  return (
    <section className="py-15 ">
      <div className="container mt-5 mt-xl-10">
        <div className="row mb-10 g-3 g-xl-5 align-items-end">
          <div className="col-lg-8">
            <h1 className="display-1">Departments </h1>
          </div>
          <div className="col-lg-4 text-lg-end">
            <p className="fs-lg text-muted">
              Trusted by <span className="text-black">250k+</span>{" "}
              <span className="d-block">customers worldwide</span>
            </p>
          </div>
        </div>
        <div className="row mb-5 g-3 g-xl-5">
          <div className="col-md-6 col-xl-12">
            <a href="" className="card card-arrow card-hover-border bg-white">
              <div className="row g-0">
                <div className="col-xl-6">
                  <figure className="media equal-16-10">
                    <Image src={sale} alt="Sale-dep" />
                  </figure>{" "}
                </div>
                <div className="col-xl-6">
                  <div className="card-body">
                    <h2 className="card-title mt-2 fs-4 lh-2 pe-xl-10">
                      Sales Departments{" "}
                    </h2>
                    <span className="eyebrow text-muted">
                      Architecture Architecture Architecture
                      ArchitectureArchitecture ArchitectureArchitecture
                      ArchitectureArchitecture ArchitectureArchitecture
                      ArchitectureArchitecture ArchitectureArchitecture
                      ArchitectureArchitecture ArchitectureArchitecture
                      ArchitectureArchitecture ArchitectureArchitecture
                      Architecture
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-6 col-xl-12">
            <a href="" className="card card-arrow card-hover-border bg-white">
              <div className="row g-0">
                <div className="col-xl-6">
                  <figure className="media equal-16-10">
                    <Image src={sale} alt="Sale-dep" />
                  </figure>{" "}
                </div>
                <div className="col-xl-6">
                  <div className="card-body">
                    <h2 className="card-title mt-2 fs-4 lh-2 pe-xl-10">
                      Aftersales Departments
                    </h2>
                    <span className="eyebrow text-muted">Architecture</span>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Departments;
