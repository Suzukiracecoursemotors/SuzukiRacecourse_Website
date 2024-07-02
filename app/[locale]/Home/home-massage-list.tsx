import React from "react";
import { Link } from "@/navigation";
import Assets from "@/data/Assets";
import Constants from "@/data/Constants";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n";
import Image from "next/image";

type MassagesProps = {
  locale: Locale;
};

type MassageService = {
  slug: string;
  page_url: string;
  image_url: string;
  title: string;
  description: string;
};

async function HomeMassageList({ locale }: MassagesProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  let massageCards: MassageService[] = [
    {
      slug: "lymphatic-drainage",
      page_url: "/massages/lymphatic-drainage",
      image_url: Assets.MassagesLymphaticDrainageHero,
      title: t("massages.types.lymphatic_drainage.title"),
      description: t("massages.types.lymphatic_drainage.description"),
    },
    {
      slug: "osteopathy",
      page_url: "/massages/osteopathy",
      image_url: Assets.MassagesOsteopathyHero,
      title: t("massages.types.osteopathy.title"),
      description: t("massages.types.osteopathy.description"),
    },
    {
      slug: "myofascial",
      page_url: "/massages/myofascial",
      image_url: Assets.MassagesMyofascialHero,
      title: t("massages.types.myofascial.title"),
      description: t("massages.types.myofascial.description"),
    },
  ];

  return (
    <section className="py-15 py-xl-20 bg-light">
      <div className="container mt-5 mt-xl-10">
        <div className="row mb-10 g-3 g-xl-5 align-items-end">
          <div className="col-md-8">
            <h2 className="display-1">{t("massages.types_title")}</h2>
          </div>
          <div className="col-md-4 text-lg-end">
            <div className="d-inline-flex align-items-center mb-0">
              <span className="fs-2 me-2 lh-1 fw-bold">
                {Constants.GOOGLE_REVIEW_SCORE}
              </span>
              <ul className="rating text-black fs-5">
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
                <li>
                  <i className="bi bi-star-fill"></i>
                </li>
              </ul>
            </div>
            <small className="d-block text-muted">
              {t("massages.reviews_count", {
                reviews_count: Constants.GOOGLE_REVIEWS_COUNT,
              })}
            </small>
          </div>
        </div>

        <div className="row mb-5 g-3 g-xl-5">
          {massageCards.map((massageCard: MassageService) => {
            return (
              <div className="col-md-12" key={massageCard.slug}>
                <Link
                  locale={locale}
                  href={massageCard.page_url}
                  className="card card-arrow card-hover-border bg-white"
                >
                  <div className="row g-0">
                    <div className="col-xl-6">
                      <Image
                        className="media equal-16-10"
                        style={{
                          backgroundImage: `url(${massageCard.image_url})`,
                          objectFit: "cover",
                        }}
                        layout="responsive"
                        width={800}
                        height={500}
                        src={""}
                        alt={""}
                      ></Image>
                    </div>
                    <div className="col-xl-6">
                      <div className="card-body">
                        <h3 className="card-title mt-2 fs-4 lh-2 pe-xl-10">
                          {massageCard.title}
                        </h3>
                        <p className="lead text-secondary">
                          {massageCard.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomeMassageList;
