import Assets from "@/data/Assets";
import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import NotFound from "../[...slug]/page";
import Gallery from "../common/gallery";

type PricingPageProps = {
  params: { locale: Locale };
};


export default async function Sale({
  params: { locale },
}: PricingPageProps) {
  const t = await getTranslations({ locale, namespace: "page" });

 

  return (
    
    <Gallery isGrey={false} title={""}/>

  );
}
