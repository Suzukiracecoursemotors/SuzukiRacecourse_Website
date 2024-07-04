import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import Address from "../common/address";
import { Link } from "@/navigation";
import Image from "next/image";
import Constants from "@/data/Constants";



async function Contact() {
  const t = await getTranslations({  namespace: "page" });
  return (
    <section className="py-15 py-xl-20 bg-white">
      <div className="container mt-5 mt-lg-10">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1                   className="text-dark "
            >{t("home.addresses.title")}</h1>
            <p                   className="text-dark "
            >{t("home.addresses.description")}</p>
            <hr className="my-4 fw-25 ml-0" />
            <ul className="list-group list-group-minimal">
              <li className="list-group-item d-flex align-items-top">
                <span className="w-25 text-dark">
                  {" "}
                  {t("home.addresses.address")}
                </span>
                <Link
                  href={Constants.GOOGLE_MAP}
                  className="text-dark underline"
                  target="_blank"
                >
                  {t("home.addresses.address_area")}
                </Link>
              </li>
              <li className="list-group-item d-flex align-items-top">
                <span className="w-25 text-dark">
                  {" "}
                  {t("home.addresses.phone")}
                </span>
                <Link
                  href={"tel:" + Constants.PHONE}
                  className="text-dark underline"
                >
                  {" "}
                  {Constants.PHONE}
                </Link>
              </li>
              <li className="list-group-item d-flex align-items-top text-dark">
                <span className="w-25 text-dark">
                  {" "}
                  {t("home.addresses.work_time")}
                </span>
                {t("home.addresses.working_days")}{" "}
                {t("home.addresses.working_hours")}
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="media equal-1-1">
              <Link href={Constants.GOOGLE_MAP} target="_blank">
                <Image
                  fill
                  src={""}
                  alt="map"
                  className="card-img-top"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    

  );
}

export default Contact;
