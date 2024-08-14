import React from "react";
import Image from "next/image";
import image1 from "../../../public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import { getTranslations } from "next-intl/server";
import Carosil from "@/app/[locale]/common/carosil";

const banner_post = {
  img: image1,
};

export default async function Post1() {
  const t = await getTranslations({
    namespace: "page.blogs",
  });

  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <div className="d-flex flex-column py-15 container min-vh-75 level-3">
          <div className="row justify-content-center mt-auto">
            <div className="col-lg-10 col-xl-8">
              <span className="badge bg-opaque-white text-white rounded-pill mb-2">
                {t("blog_page.banner_title")}
              </span>
              <h1 className="display-1">{t("blog_page.title1")}</h1>
            </div>
          </div>
        </div>
        <Image
          className="background background-gradient-horizontal"
          data-top-top="transform: translateY(0%);"
          data-top-bottom="transform: translateY(10%);"
          src={banner_post.img}
          layout="responsive"
          alt="background image"
        />
      </section>

      <section className="py-15 py-xl-20">
        <div className="container">
          <div className="row mb-5 align-items-end">
            <div className="col-lg-6">
              <h2 className="fw-bold">Latest blog posts</h2>
            </div>
            <div className="col-lg-6 text-lg-end">
              <a href="" className="action underline">
                View all <i className="bi bi-arrow-right"></i>
              </a>
            </div>
          </div>
          <div className="row g-3 g-xl-5">
            <div className="col-md-6 col-lg-4" data-aos="fade-up">
              <a
                href=""
                className="card equal equal-3-4 card-hover-gradient inverted"
              >
                <figure
                  className="background"
                  // style="background-image: url('./assets/images/job-board-2.jpg')"
                ></figure>
                <div className="card-wrap">
                  <div className="card-footer mt-auto text-shadow">
                    <time
                      // datetime="2020-12-18 20:00"
                      className="eyebrow text-secondary mb-1"
                    >
                      18 December
                    </time>
                    <h5 className="card-title">
                      Ethical Considerations In UX Research: The Need For
                      Training And Review
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <a
                href=""
                className="card equal equal-3-4 card-hover-gradient inverted"
              >
                <figure
                  className="background"
                  // style="background-image: url('./assets/images/job-board-3.jpg')"
                ></figure>
                <div className="card-wrap">
                  <div className="card-footer mt-auto text-shadow">
                    <time
                      // datetime="2020-12-18 20:00"
                      className="eyebrow text-secondary mb-1"
                    >
                      18 December
                    </time>
                    <h5 className="card-title">
                      Ethical Considerations In UX Research: The Need For
                      Training And Review
                    </h5>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="col-md-6 col-lg-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <a
                href=""
                className="card equal equal-3-4 card-hover-gradient inverted"
              >
                <figure
                  className="background"
                  // style="background-image: url('./assets/images/job-board-4.jpg')"
                ></figure>
                <div className="card-wrap">
                  <div className="card-footer mt-auto text-shadow">
                    <time
                      // datetime="2020-12-18 20:00"
                      className="eyebrow text-secondary mb-1"
                    >
                      18 December
                    </time>
                    <h5 className="card-title">
                      Ethical Considerations In UX Research: The Need For
                      Training And Review
                    </h5>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 py-xl-15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <div>
                <h6 className="lead text-secondary">{t("blog_page.title")}</h6>
                <div>
                  <h5>{t("blog_page.title11")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description11")}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>{t("blog_page.title22")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description22")}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>{t("blog_page.title33")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description33")}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>{t("blog_page.title44")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description44")}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>{t("blog_page.title55")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description55")}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>{t("blog_page.title66")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description66")}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>{t("blog_page.title77")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description77")}
                  </p>
                </div>
              </div>
              <Carosil />

              <div>
                <div>
                  <h5>{t("blog_page.title88")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description88")}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>{t("blog_page.title99")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description99")}
                  </p>
                </div>
              </div>
              <div>
                <div>
                  <h5>{t("blog_page.title1010")}</h5>
                  <p className="fs-lg text-secondary">
                    {t("blog_page.description1010")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
