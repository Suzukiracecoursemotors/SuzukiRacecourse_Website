import React from "react";
import { Link } from "@/navigation";
import Assets from "@/data/Assets";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n";
import Image from "next/image";

type PostsProps = {
  locale: Locale;
};

async function AboutMe({ locale }: PostsProps) {
  const t = await getTranslations({ locale, namespace: "page" });
  return (
    <section className="pt-15 pt-xl-20 position-relative overflow-hidden bg-black inverted">
      <div className="container level-3">
        <div className="row align-items-center justify-content-center justify-content-lg-between">
          <div className="col-md-10 col-lg-6 mb-5 mb-lg-0">
            <h2 className="lh-sm mb-5">{t("home.title")}</h2>
            <p className="lead text-secondary">{t("home.description")}</p>

            <p className="lead text-secondary">
              <Link
                locale={locale}
                href="/about_me"
                className="underline action text-yellow fs-lg mt-5"
              >
                {t("home.about_me.learn_more")}
                <i className="bi bi-arrow-right"></i>
              </Link>
            </p>
          </div>
          <div
            className="col-md-10 col-lg-5 position-relative"
            data-aos="fade-up"
          >
            <div className="equal-1-2">
              <div
                className="background"
                style={{
                  backgroundImage: `url(${Assets.Ulia2})`,
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        className="position-absolute top-50 start-50 translate-middle"
        src={Assets.PatternLayout}
        width={3553}
        height={3553}
        alt="background image"
      />
    </section>
  );
}

export default AboutMe;
