import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import mapimg from "../public/map.png";
import { Link } from "@/navigation";
import Image from "next/image";
import Constants from "@/data/Constants";
import Landingpage from "../Home/landing_page";
import Departments from "./components/departments";

async function Infrastructure() {
  const t = await getTranslations({ namespace: "page" });
  return (
    <>
      <Landingpage />
      <Departments />
    </>
  );
}

export default Infrastructure;
