import { Locale } from "@/i18n";
import Gallery from "../common/gallery";
import { getTranslations } from "next-intl/server";
type GalleryProps = {
  params: { locale: Locale };
};

export default async function GalleryPage({
  params: { locale },
}: GalleryProps) {
  const t = await getTranslations({ locale, namespace: "page" });
  return (
    <>
      <Gallery isGrey={true} title={t("gallery.title")} />
    </>
  );
}
