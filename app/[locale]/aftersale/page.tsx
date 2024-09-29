import { getTranslations } from "next-intl/server";
import Maintaince from "./maintainpoint";
import Whychose from "./whychose";
import Cards from "./cards";

async function Aftersale() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <Cards />

      <Whychose />

      <Maintaince />
    </>
  );
}

export default Aftersale;
