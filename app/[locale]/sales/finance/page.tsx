import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import bannersales from "../../public/bannersales.jpg";
import Carosil from "../../common/carosil";

type PricingPageProps = {
  params: { locale: Locale };
};

export default async function Finance({
  params: { locale },
}: PricingPageProps) {
  const t = await getTranslations({ locale, namespace: "page" });

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
          className="background "
          src={bannersales}
          layout="responsive"
          alt="background image"
        />
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
