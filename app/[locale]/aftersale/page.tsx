import { getTranslations } from "next-intl/server";
import Image from "next/image";
import oil from "../public/aftersalejpg.jpg";
import Constants from "@/data/Constants";
async function Aftersale() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <section className="py-5 py-xl-2">
        <div className="container mt-15">
          <div className="row mb-9">
            <div className="col text-center">
              <h2 className="fw-bold mb-0">AfterSales</h2>
            </div>
          </div>
          <div className="row g-5 ">
            <div className="col-md-6 col-lg-4 text-center" data-aos="fade-up">
              <i className="bi bi-gear-fill fs-1 text-primary"></i>
              <h4 className="fs-5 mt-4">Mechanical WorkShop</h4>
              <p className="text-secondary mx-2">
                At Suzuki, our mechanical workshops are designed to provide
                top-tier service and expertise for all Suzuki vehicles. Whether
                its routine maintenance, engine diagnostics, our skilled
                technicians ensure that your vehicle is treated with the utmost
                care.
              </p>
              <a href="/en/aftersale/service" className="underline">
                Learn More
              </a>
            </div>
            <div
              className="col-md-6 col-lg-4 text-center"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <i className="bi bi-bookmark-star fs-1 text-primary"></i>
              <h4 className="fs-5 mt-4">Extend Warrenty </h4>
              <p className="text-secondary mx-2">
                We prioritize our customers preferences when it comes to engine
                oil selection. Suzuki vehicles require precision and
                high-quality products to maintain their performance. Our
                workshop offers a variety of engine oils, tailored to meet the
                diverse needs of each Suzuki model.
              </p>
              <a href="/en/aftersale/extend_warrenty" className="underline">
                Learn More
              </a>
            </div>
            <div
              className="col-md-6 col-lg-4 text-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <i className="bi bi-paint-bucket fs-1 text-primary"></i>
              <h4 className="fs-5 mt-4">Paint & BodyShop </h4>
              <p className="text-secondary mx-2">
                Our state-of-the-art body shop provides expert repairs for all
                Suzuki models.If your vehicles frame has been compromised in an
                accident, our team specializes in restoring its structural
                integrity, ensuring safety and performance.
              </p>
              <a href="/en/aftersale/bodyshop" className="underline">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-15 py-xl-20">
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="frame">
                <Image
                  src={oil}
                  layout="responsive"
                  className="img-fluid"
                  alt=""
                />{" "}
                <span></span>
              </div>
            </div>
            <div className="col-lg-6 col-xl-5">
              <h2 className="fw-bold">Why Choose Suzuki?</h2>
              <h6 className="text-secondary">1. Genuine Parts</h6>
              <h6 className="text-secondary">2. Certified Technicians</h6>
              <h6 className="text-secondary">3. State-of-the-art Equipment</h6>
            </div>
          </div>
        </div>
      </section>
      <section className="">
        <div className="container">
          <div className="row mb-10">
            <div className="col-lg-6">
              <h2 className="fw-light">
                <span className="fw-bold">
                  We maintain all types of vehicles.
                </span>
              </h2>
            </div>{" "}
            <div className="col-md-auto">
              <a
                href={`tel:${Constants.PHONE}`}
                className="btn btn-yellow btn-with-icon   rounded-pill btn-lg"
                data-aos="zoom-out"
                data-aos-delay="300"
              >
                {" "}
                Reserve Appointment <i className="bi bi-telephone-fill"></i>
              </a>
            </div>
          </div>
          <div className="row g-3 g-xl-5">
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">First Free Inspection (1,000 Km)</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">Second Free Inspection (5,000 Km)</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">Schedule Maintenance (every 5,000 Km)</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">
                    A/C Service, Repair, Replacement & Installation
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">Engine Tuning Petrol & CNG</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">Wheel Balancing & Alignment</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">Brake Overhauling</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">Suspension Repair & Overhauling</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="d-flex">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">Washing & Interior Cleaning</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aftersale;
