import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { getTranslations } from "next-intl/server";

async function Footer() {
  const t = await getTranslations({ namespace: "footer" });

  return (
    <footer className="py-6 py-xl-4  bg-black">
      <div className="container">
        <div className="row g-2 g-lg-6 mb-8">
          <div className="col-lg-6">
            <Link
              href="/"
              className="navbar-brand container text-primary-hover color hover"
            >
              <h4>SUZUKI Racecourse Motors</h4>
            </Link>
          </div>
          <div className="col-lg-6 text-lg-end text-primary-hover">
            <Link href={`tel:${Constants.PHONE} `} className="navbar-brand">
              <h5 className="h5 color hover"> {Constants.PHONE}</h5>
            </Link>
          </div>
        </div>
        <div className="col color">
          <hr />
        </div>
        <div className="row align-items-center g-1 g-lg-6 text-muted">
          <div className="col-lg-6 text-lg-end order-lg-2">
            <ul className="list-inline ">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/OnlineQuranInstitute01/"
                  className="text-reset underline hover color text-primary-hover"
                >
                  {t("facebook")}
                </a>
              </li>
              <li className="list-inline-item ms-1">
                <a
                  href="https://join.skype.com/invite/m162rgScMvSk"
                  className="text-reset underline hover color text-primary-hover"
                >
                  {t("skype")}
                </a>
              </li>
              <li className="list-inline-item ms-1">
                <a
                  href="https://chat.whatsapp.com/FSboXU7xa4lJbsQ9fmYYkT"
                  className="text-reset underline hover color text-primary-hover"
                >
                  {t("watsapp")}
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-6 order-lg-1 ">
            <p className="small color">{t("copyright")}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
