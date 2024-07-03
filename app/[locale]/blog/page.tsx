import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import Gallery from "../common/gallery";

type AboutMeProps = {
  locale: Locale;
};

async function Blog({ locale }: AboutMeProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  return (
      <>
       <Gallery isGrey={false} title={""}/>
    </>

  );
}

export default Blog;
