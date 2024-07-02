import Assets from "@/data/Assets";
import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Address from "@/app/[locale]/home/address";
import Pricing from "@/app/[locale]/home/pricing";
import HomeMassageCostmetics from "@/app/[locale]/home/home-massage-costmetics";
import HeroSmallWithImage from "@/app/[locale]/common/hero-small-with-image";

type OsteopathyProps = {
  params: { locale: Locale };
};

export default async function Osteopathy({
  params: { locale },
}: OsteopathyProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  return (
    <>
      <HeroSmallWithImage
        title={t("osteopathy.title")}
        imageURL={Assets.MassagesOsteopathyHero}
      />

      {/* about */}
      <section className="py-15 py-xl-20 border-bottom">
        <div className="container">
          <div className="row justify-content-center mb-10">
            <div className="col-lg-10">
              <p className="fs-6">{t("osteopathy.description.p1")}</p>
              <p className="fs-6">{t("osteopathy.description.p2")}</p>
              <p className="fs-6">{t("osteopathy.description.p3")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Massage products */}
      <HomeMassageCostmetics locale={locale} />

      {/*  Address  */}
      <Address locale={locale} />

      {/*  Pricing  */}
      <Pricing
        locale={locale}
        description={t("osteopathy.price_description")}
      />
    </>
  );
}
