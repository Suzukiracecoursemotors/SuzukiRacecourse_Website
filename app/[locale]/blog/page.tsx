import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import Gallery from "../common/gallery";



async function Blog() {
  const t = await getTranslations({ namespace: "page" });

  return (
      <>
       <Gallery isGrey={false} title={""}/>
    </>

  );
}

export default Blog;
