import { Locale } from "@/i18n";
import HomeMassageList from "@/app/[locale]/home/home-massage-list";
import HeroSmallWithImage from "@/app/[locale]/common/hero-small-with-image";
import Assets from "@/data/Assets";
import { getTranslations } from "next-intl/server";
import NotFound from "../[...slug]/page";

type MassagePageProps = {
  params: { locale: Locale };
};

export default async function MassagePage({
  params: { locale },
}: MassagePageProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  return (
    <>
      {/* <HeroSmallWithImage
        title={t("massages.hero_title")}
        imageURL={Assets.MassagesLymphaticDrainageHero}
      />
      <HomeMassageList locale={locale} /> */}


      <NotFound/>
    </>
  );
}
