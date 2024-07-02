import Assets from "@/data/Assets";
import Constants from "@/data/Constants";
import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
import React from "react";
import Image from "next/image";

type PricingProps = {
  locale: Locale;
  title?: string | null;
  description?: string | null;
};
async function Pricing({ locale, description = null }: PricingProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  const Description = description ?? t("home.price.description");
  const durationPrices = [
    t("home.price.duration_price_60"),
    t("home.price.duration_price_90"),
    t("home.price.duration_price_120"),
  ];

  return (
    <section className="py-20 overflow-hidden bg-black inverted">
      <div className="container foreground">
        <div className="row justify-content-between">
          <div className="col-lg-3"></div>
          <div className="col-lg-9">
            <h2 className="fw-bold"> {Description}</h2>
            <div className="row mt-5 mb-2">
              <div className="col-12 fs-4">
                <ul className="list-group list-group-minimal">
                  {durationPrices.map((price) => (
                    <li
                      key={price}
                      className="list-group-item d-flex align-items-center"
                    >
                      <i className="bi bi-clock fs-5 me-2 text-yellow" />
                      {price}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <Link
              href={"tel:" + Constants.PHONE}
              className="btn btn-yellow btn-lg btn-with-icon mt-4 rounded-pill"
            >
              <i className="bi bi-telephone-fill"></i>
              {t("home.price.cta")}
            </Link>
          </div>
        </div>
      </div>
      <Image
        className="position-absolute top-0 start-0 translate-middle"
        src={Assets.Pricingpage}
        width={3553}
        height={3553}
        alt="background image"
      />
    </section>
  );
}

export default Pricing;
