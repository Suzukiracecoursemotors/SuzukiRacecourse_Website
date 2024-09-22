import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
import Image from "next/image";
import Bannerimg from "../public/banner1.jpeg";
import Constants from "@/data/Constants";
import sale from "../public/retaildep.png";
import aftersale from "../public/aftersale.png";
import ecvhange from "../public/cucdep.png";
import lease from "../public/leaseandfinance.png";
import insurance from "../public/insurance.png";
import workshop from "../public/workshop.png";
import sapreparts from "../public/spareparts.png";
import bodyshop from "../public/bodyshop.png";
import extend from "../public/extendwarrenty.png";
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

async function Infrastructure() {
  const t = await getTranslations({ namespace: "page.infrastructure" });
  return (
    <>
      <section className="overflow-hidden">
        <div className="container d-flex flex-column py-20 min-vh-100 level-3">
          <div className="row align-items-center justify-content-center justify-content-lg-between my-auto">
            <div className="col-md-8 col-lg-5 order-lg-2 mb-5 mb-lg-0">
              <Image
                src={Bannerimg}
                alt="awais_image"
                width={450}
                height={500}
                data-aos="zoom-out"
                data-aos-delay="300"
                // layout="responsive"
              />
            </div>
            <div className="col-md-10 col-lg-6 col-xl-5 text-center text-lg-start order-lg-1">
              <h3 data-aos="zoom-out" data-aos-delay="100">
                {t("title")}
              </h3>
              <p
                className="lead text-secondary mb-5"
                data-aos="zoom-out"
                data-aos-delay="200"
              >
                {" "}
                {t("adress")}
              </p>
              <div className="row align-items-center g-3">
                <div className="col-md-auto">
                  <a
                    href={`tel:${Constants.PHONE}`}
                    className="btn btn-primary btn-with-icon   rounded-pill btn-lg"
                    data-aos="zoom-out"
                    data-aos-delay="300"
                  >
                    {" "}
                    {t("reserve_appointment")}
                    <i className="bi bi-telephone-fill"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <figure className="background">
          <svg
            width="100%"
            height="100%"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              data-aos="fade-up"
              data-aos-delay="200"
              cx="100%"
              cy="-35%"
              r="50%"
              stroke="#dddddd"
              stroke-opacity="1"
              data-center-top="@r: 50%;"
              data-top-bottom="@r: 70%;"
            />
            <circle
              data-aos="fade-up"
              data-aos-delay="400"
              cx="85%"
              cy="135%"
              r="75%"
              stroke="#dddddd"
              stroke-opacity="1"
              data-center-top="@r: 75%;"
              data-top-bottom="@r: 95%;"
            />
            <circle
              data-aos="fade-up"
              data-aos-delay="600"
              cx="-25%"
              cy="125%"
              r="50%"
              stroke="#dddddd"
              stroke-opacity="1"
              data-center-top="@cx: -25%;"
              data-top-bottom="@cx: 45%;"
            />
          </svg>
        </figure>
      </section>

      <section className="py-8">
        <div className="container">
          <div className="row mb-10 g-3 g-xl-5 align-items-end">
            <div className="col-lg-8">
              <h1 className="display-1">{t("deptitle")}</h1>
            </div>
            {/* <div className="col-lg-4 text-lg-end">
              <p className="fs-lg text-muted">
                Trusted by <span className="text-black">250k+</span>{" "}
                <span className="d-block">customers worldwide</span>
              </p>
            </div> */}
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
    </>
  );
}

export default Infrastructure;
