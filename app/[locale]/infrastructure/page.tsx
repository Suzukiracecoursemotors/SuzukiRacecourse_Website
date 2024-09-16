import { getTranslations } from "next-intl/server";
import Departments from "./components/departments";
import Landingpage from "./components/landing_page";

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
