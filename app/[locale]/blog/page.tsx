import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import Gallery from "../common/gallery";
import Blogs from "./index";

async function Blog() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <Blogs />
      <Gallery isGrey={false} title={""} />
    </>
  );
}

export default Blog;
