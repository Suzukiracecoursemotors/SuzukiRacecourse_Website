import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import Address from "../Home/address";

type AboutMeProps = {
  locale: Locale;
};

async function Contact({ locale }: AboutMeProps) {
  const t = await getTranslations({ locale, namespace: "page" });

  return (
      <>
<Address locale={undefined}/>
    </>

  );
}

export default Contact;
