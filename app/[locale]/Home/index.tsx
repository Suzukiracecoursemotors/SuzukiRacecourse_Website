import type {locales } from "@/i18n";
import { getTranslations } from "next-intl/server";
import HomeHero from "../Home/home-hero";
import HomeAddress from "../Home/address";



export default async function HomePage() {
  const t = await getTranslations();
  return (
    <>
      <HomeHero  />
      <HomeAddress />
    </>
  );
}
