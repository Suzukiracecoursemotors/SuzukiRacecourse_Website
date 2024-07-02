import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import Assets from "@/data/Assets";
import { Locale } from "@/i18n";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

type BannerProps = { locale: Locale };

export default async function HeroSection({ locale }: BannerProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  return (
    <section className="bg-black inverted overflow-hidden d-flex h-50 h-lg-100 ">
      <div className="d-flex flex-column py-15  min-vh-75 level-3">
        <div className="row justify-content-center mt-auto">
          <div className="col-lg-11 col-xl-10">
            <h1 className="display-1 text-center">{t("home.banner_title")}</h1>

            <Link
              href={"tel:" + Constants.PHONE}
              className="btn btn-with-icon btn-yellow rounded-pill d-block mx-auto mt-3"
              style={{ maxWidth: "200px" }}
            >
              <i className="bi bi-telephone-fill"></i>
              {t("header.reserve_appointment")}
            </Link>
          </div>
        </div>
      </div>
      <div className="banner-container">
        <Image
          src={Assets.HomeBanner}
          alt="banner-bg"
          width={500}
          height={500}
          layout="responsive"
          className="background background-gradient-horizontal  background-overlay text-black"
        />
      </div>
    </section>
  );
}
