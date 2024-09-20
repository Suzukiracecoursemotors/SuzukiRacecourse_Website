import { getTranslations } from "next-intl/server";
import Departments from "./components/departments";
import Landingpage from "./components/landing_page";
import Workflow from "./components/home-workflow";

async function Infrastructure() {
  const t = await getTranslations({ namespace: "page" });
  return (
    <>
      <Workflow />
      {/* <Landingpage /> */}
      <Departments />
    </>
  );
}

export default Infrastructure;
