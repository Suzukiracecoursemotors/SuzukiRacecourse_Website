import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import NotFound from "../[...slug]/page";
import Address from "../common/address";
import III from "../public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import img from "../public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import Image from "next/image";
import Carosil from "../common/carosil";

async function Aftersale() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <Carosil />

      {/* <section className="bg-black inverted overflow-hidden">
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
          src={img}
          layout="responsive"
          alt="background image"
        />
      </section> */}

      <section className="py-15 py-xl-20 bg-light">
        <div className="container mt-5 mt-xl-10">
          <div className="row mb-10 g-3 g-xl-5 align-items-end">
            <div className="col-lg-8">
              <h2 className="display-1 h1">
                {t("lymphatic_drainage._parts.title")}
              </h2>
            </div>
          </div>

          <div
            className="row g-0 bg-white  mb-10 mb-md-5  mb-lg-10"
            data-aos="fade-up"
            data-aos-delay={150}
            key={"index"}
          >
            <div className="col-lg-6 p-4 p-md-5 order-lg-2">
              <h3 className="fw-bold h4">{"item"}</h3>
              <p className="fs-lg text-secondary">{"description"}</p>
            </div>
            <div className="col-lg-6 order-lg-1 position-relative">
              <Image
                alt={""}
                src={III}
                height={800}
                width={600}
                layout="responsive"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      <section className="py-15 py-xl-20 border-bottom">
        <div className="container">
          <div className="row mb-5">
            <div className="col-lg-6">
              <h2 className="fw-light">
                {t("lymphatic_drainage.benefits.title")}
              </h2>
            </div>
          </div>

          <div className="row mb-10">
            <div className="col-lg-10">
              <p className="fs-lg">{t("lymphatic_drainage.benefits.about")}</p>
            </div>
          </div>
          <div className="row g-3 g-xl-5">
            <div className="col-lg-4" key={"index"}>
              <div className="d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                  <i className="bi bi-check2 text-green"></i>
                </div>
                <div>
                  <p className="fs-lg">{"packageDescription"}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* accordion */}
      <section className="py-15 py-xl-20  inverted">
        <div className="container">
          <div className="row mb-20">
            <div className="col-lg-10">
              <p className="h3 fs-4 text-center">
                {t("about.therapist_intro")}
              </p>
            </div>
          </div>

          <div className="row justify-content-center mb-8">
            <div className="col-lg-10">
              <h2 className="fw-bold"> {t("about.techniques.title")}</h2>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="accordion accordion-highlight" id="accordion-1">
                {/* Render each technique directly */}
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-1">
                    <button
                      className="accordion-button fs-lg collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-1"
                      aria-expanded="false"
                      aria-controls="collapse-1"
                    >
                      <i className="bi bi-asterisk text-yellow fs-5 me-2" />
                      {t("about.techniques.question1")}
                    </button>
                  </h2>
                  <div
                    id="collapse-1"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-1"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="text-secondary">
                        {t("about.techniques.answer1")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item">
                  <h2 className="accordion-header" id="heading-2">
                    <button
                      className="accordion-button fs-lg collapsed text-white"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#collapse-2"
                      aria-expanded="false"
                      aria-controls="collapse-2"
                    >
                      <i className="bi bi-asterisk text-yellow fs-5 me-2" />
                      {t("about.techniques.question2")}
                    </button>
                  </h2>
                  <div
                    id="collapse-2"
                    className="accordion-collapse collapse"
                    aria-labelledby="heading-2"
                    data-bs-parent="#accordion-1"
                  >
                    <div className="accordion-body">
                      <p className="text-secondary">
                        {t("about.techniques.answer2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer reviews */}
      <section className="py-15 py-xl-20 bg-black inverted">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="row justify-content-center mb-5">
                <div className="col-lg-8 text-center">
                  <span className="eyebrow mb-2 text-secondary">
                    {t("about.customer_review.review_title")}
                  </span>
                  <h2 className="fw-bold">
                    {" "}
                    {t("about.customer_review.title")}
                  </h2>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <ul className="list-unstyled border-bottom">
                    {/* Review 1 */}
                    <li className="border-top py-5">
                      <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-md-4 mb-4 mb-md-0">
                          <div className="d-flex align-items-end mb-1">
                            <span className="fs-3 fw-bold lh-1 mb-0 me-1">
                              {t("about.customer_review.rating")}
                            </span>
                            <span className="text-muted">
                              {" "}
                              {t("about.customer_review.total_rating")}
                            </span>
                          </div>
                          <ul className="rating text-yellow">
                            {[...Array(4)].map((_, i) => (
                              <li key={i}>
                                <i className="bi bi-star-fill" />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-md-8">
                          <p className="mb-2 lead text-secondary">
                            {t("about.customer_review.description")}
                          </p>
                          <span className="eyebrow">
                            {t("about.customer_review.author")}
                          </span>
                        </div>
                      </div>
                    </li>
                    {/* Review 2 */}
                    <li className="border-top py-5">
                      <div className="d-flex flex-wrap justify-content-between">
                        <div className="col-md-4 mb-4 mb-md-0">
                          <div className="d-flex align-items-end mb-1">
                            <span className="fs-3 fw-bold lh-1 mb-0 me-1">
                              {t("about.customer_review.rating")}
                            </span>
                            <span className="text-muted">
                              {" "}
                              {t("about.customer_review.total_rating")}
                            </span>
                          </div>
                          <ul className="rating text-yellow">
                            {[...Array(4)].map((_, i) => (
                              <li key={i}>
                                <i className="bi bi-star-fill" />
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="col-md-8">
                          <p className="mb-2 lead text-secondary">
                            {t("about.customer_review.description")}
                          </p>
                          <span className="eyebrow">
                            {t("about.customer_review.author")}
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
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
