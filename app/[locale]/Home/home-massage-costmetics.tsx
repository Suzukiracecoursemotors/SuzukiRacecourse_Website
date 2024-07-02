import React from "react";
import Assets from "@/data/Assets";
import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";

type MassageProductsProps = {
  locale: Locale;
};

async function HomeMassageCostmetics({ locale }: MassageProductsProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  const features = [
    t("home.cosmetics_products.feature1"),
    t("home.cosmetics_products.feature2"),
    t("home.cosmetics_products.feature3"),
    t("home.cosmetics_products.feature4"),
  ];
  return (
    <section className="bg-black">
      <div className="container-fluid back back-static">
        <div className="row justify-content-end h-100">
          <div className="col-lg-6 overflow-hidden position-relative">
            <Image
              className="background background-parallax"
              style={{
                backgroundImage: `url(${Assets.MassageOils})`,
              }}
              data-bottom-top="transform: translateY(0%);"
              data-top-bottom="transform: translateY(20%);"
              src={""}
              alt={""}
            ></Image>
          </div>
        </div>
      </div>

      <div className="container py-15 pb-10 py-xl-20 level-3">
        <div className="row">
          <div className="col-lg-6 inverted">
            <h2 className="fw-bold">{t("home.cosmetics_products.title")}</h2>
            <p className="text-secondary pe-5">
              {t("home.cosmetics_products.description")}
            </p>
            <ul className="list-group list-group-minimal">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="list-group-item d-flex align-items-center"
                >
                  <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                    <i className="bi bi-check2 text-yellow" />
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeMassageCostmetics;
