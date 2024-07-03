import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import Address from "../Home/address";



async function Contact() {
  const t = await getTranslations({ namespace: "page" });

  return (
      <>
<Address/>
    </>

  );
}

export default Contact;
