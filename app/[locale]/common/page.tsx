import Image from "next/image";
import image1 from "../../public/img10.jpg";
import React from "react";
import Carosil from "../../common/carosil";
import { getTranslations } from "next-intl/server";

export default async function Quaid() {
  const t = await getTranslations({
    namespace: "page.course_page.qaida_page",
  });
  return (
    <article>
      <section className="bg-black inverted overflow-hidden">
        <div className="d-flex flex-column py-15 container min-vh-75 level-3">
          <div className="row justify-content-center mt-auto">
            <div className="col-lg-10 col-xl-8">
              <span className="badge bg-opaque-white text-white rounded-pill mb-2">
                {t("badgeText")}{" "}
              </span>
              <h1 className="display-1">{t("titleText")}</h1>
            </div>
          </div>
        </div>
        <Image
          className="background background-gradient-horizontal"
          data-top-top="transform: translateY(0%);"
          data-top-bottom="transform: translateY(10%);"
          src={image1}
          layout="responsive"
          alt="background image"
        />
      </section>
      <section className="py-10 py-xl-15">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <p className="lead text-secondary">{t("paragraphs1")}</p>
              <p className="lead text-secondary">{t("paragraphs2")}</p>
              <p className="fs-lg text-secondary">{t("paragraphs3")}</p>
              <p className="fs-lg text-secondary">{t("paragraphs4")}</p>

              <blockquote className="blockquote my-5">
                <p className="fs-4  fw-bold mb-0 lh-sm">
                  {t("blockquoteText")}
                </p>
                <cite className="fs-sm text-muted">
                  {t("blockquoteAuthor")}
                </cite>
              </blockquote>

              <p className="fs-lg text-secondary">{t("paragraphs5")}</p>
              <p className="fs-lg text-secondary">{t("paragraphs6")}</p>

              <Carosil />
              <p className="fs-lg text-secondary">{t("paragraphs7")}</p>

              <div className="alert alert-primary my-5" role="alert">
                {t("alertMessage")}{" "}
              </div>

              <p className="fs-lg text-secondary">{t("finalParagraph")}</p>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
