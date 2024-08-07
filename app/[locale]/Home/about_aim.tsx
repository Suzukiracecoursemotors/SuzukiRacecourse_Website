import React from "react";
import Image from "next/image";
import missionimg from "../../[locale]/public/misison.jpg";
import vissionimg from "../../[locale]/public/vission.jpg";
import { getTranslations } from "next-intl/server";

async function AimsandMissions() {
  const t = await getTranslations({
    namespace: "page.home.Aims",
  });

  return (
    <section className="pt-7 pt-xl-1 position-relative overflow-hidden bg-white inverted">
      <div className="container level-3">
        <div className="row align-items-center justify-content-center justify-content-lg-between">
          <div className="col-md-5 col-lg-4 mb-1 mb-lg-0">
            <h2 className="lh-sm text-black mb-5">{t("title")}</h2>

            <ul className="list-group list-group-minimal">
              <li className="list-group-item d-flex text-black align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                  <i className="bi bi-check2 text-yellow" />
                </div>
                {t("description")}
              </li>
              <li className="list-group-item text-black d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                  <i className="bi bi-check2 text-yellow" />
                </div>
                {t("description1")}
              </li>
              <li className="list-group-item text-black d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                  <i className="bi bi-check2 text-yellow" />
                </div>
                {t("description2")}
              </li>
            </ul>

            {/* <p className="lead text-secondary">
              <Link href="/" className="underline action text-red fs-lg mt-5">
                {t("learnmore")} <i className="bi bi-arrow-right"></i>
              </Link>
            </p> */}
          </div>
          <div
            className="col-md-10 col-lg-5 position-relative"
            data-aos="fade-up"
          >
            <div className="equal-1-1">
              <div>
                <Image
                  className="position-absolute top-50 start-50 translate-middle"
                  src={missionimg}
                  width={300}
                  height={300}
                  layout="responsive"
                  alt="background image"
                />
              </div>
            </div>
          </div>

          <div className="col-md-5 col-lg-4 mb-1 mb-lg-0">
            <h2 className="lh-sm text-black mb-5">{t("titlem")}</h2>

            <ul className="list-group list-group-minimal">
              <li className="list-group-item d-flex text-black align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                  <i className="bi bi-check2 text-yellow" />
                </div>
                {t("descriptionm")}
              </li>
              <li className="list-group-item text-black d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                  <i className="bi bi-check2 text-yellow" />
                </div>
                {t("descriptionm1")}
              </li>
              <li className="list-group-item text-black d-flex align-items-center">
                <div className="icon-box icon-box-sm bg-opaque-white rounded-circle me-2">
                  <i className="bi bi-check2 text-yellow" />
                </div>
                {t("descriptionm2")}
              </li>
            </ul>
            {/* 
            <p className="lead text-secondary">
              <Link href="/" className="underline action text-red fs-lg mt-5">
                {t("learnmore")} <i className="bi bi-arrow-right"></i>
              </Link>
            </p> */}
          </div>
          <div
            className="col-md-10 col-lg-5 position-relative"
            data-aos="fade-up"
          >
            <div className="equal-1-1">
              <div>
                <Image
                  className="position-absolute top-50 start-50 translate-middle"
                  src={vissionimg}
                  width={300}
                  height={300}
                  layout="responsive"
                  alt="background image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AimsandMissions;
