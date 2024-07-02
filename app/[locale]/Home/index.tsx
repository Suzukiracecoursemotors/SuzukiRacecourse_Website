import type { Locale } from "@/i18n";
import { Metadata, ResolvingMetadata } from "next";
import HomePageGallery from "@/app/[locale]/common/gallery";
import HomeMassageProducts from "@/app/[locale]/home/home-massage-costmetics";
import HomeAddress from "@/app/[locale]/home/address";
import Pricing from "@/app/[locale]/home/pricing";
import HomeHero from "@/app/[locale]/home/home-hero";
import AboutMe from "@/app/[locale]/home/about-me";
import HomeMassageList from "@/app/[locale]/home/home-massage-list";
import { getTranslations } from "next-intl/server";
type RouteProps = {
  params: { locale: Locale };
  searchParams: { [key: string]: string | string[] | undefined };
};

/** TODO */
// export async function generateMetadata(
//   props: RouteProps,
//   parent: ResolvingMetadata
// ): Promise<Metadata> {
//   const intl = await getIntl(props.params.locale);

//   return {
//     title: intl.formatMessage({ id: "page.home.title" }),
//     description: intl.formatMessage({ id: "page.home.description" }),
//     alternates: {
//       canonical: "https://example.com",
//       languages: {
//         bg: "http://example.com",
//         en: "http://example.com/en",
//         "x-default": "http://example.com",
//       },
//     },
//   };
// }

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
