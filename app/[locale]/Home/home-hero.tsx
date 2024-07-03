import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import Assets from "@/data/Assets";
import { getTranslations } from "next-intl/server";
import { Locale } from "@/i18n";
import Designhome from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import Image from "next/image";


export default async function HomeHero() {
  const t = await getTranslations();

  return (
    <section className="bg-black inverted overflow-hidden">
      <div className="d-flex flex-column py-15 container min-vh-75 level-3">
        <div className="row justify-content-center mt-auto">
          <div className="col-lg-11 col-xl-10">
            <h1 className="display-1">{t("page.home.banner_title")}</h1>

            <Link
              href={"tel:" + Constants.PHONE}
              className="btn btn-with-icon btn-yellow rounded-pill"
            >
              <i className="bi bi-telephone-fill"></i>
              {t("header.reserve_appointment")}
            </Link>
          </div>
        </div>
      </div>
      
      <Image
          className="background background-gradient-horizontal"
          data-top-top="transform: translateY(0%);"
          data-top-bottom="transform: translateY(10%);"
          src={Designhome}
          layout="responsive"
          alt="background image"
        />

      
    </section>
  );
}
