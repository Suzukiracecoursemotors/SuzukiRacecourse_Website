import type { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import HomeHero from "../Home/home-hero";
import HomeAddress from "../Home/address";
type RouteProps = {
  params: { locale: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};


type HomeProps = {
  params: { locale: Locale };
};

export default async function HomePage({ params: { locale } }: HomeProps) {
  const t = await getTranslations({ locale, namespace: "page" });
  return (
    <>
      <HomeHero locale={locale} />
      {/* <HomeMassageList locale={locale} />
      <AboutMe locale={locale} />
      <HomePageGallery isGrey={false} title={t("home.gallery.title")} />
      <HomeMassageProducts locale={locale} /> */}
      <HomeAddress locale={locale} />
      {/* <Pricing locale={locale} /> */}
    </>
  );
}
