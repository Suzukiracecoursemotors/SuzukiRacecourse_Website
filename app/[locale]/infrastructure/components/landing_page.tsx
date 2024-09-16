import Image from "next/image";
import { getTranslations } from "next-intl/server";
import banner from "../../public/banner2.jpg";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
export default async function Landingpage() {
  const t = await getTranslations({
    namespace: "page.home",
  });
  return (
    <>
      <section className="overflow-hidden inverted mt-10 ">
        <div className="d-flex flex-column container py-20 min-vh-100 level-1 ">
          <div className="row align-items-center justify-content-center justify-content-lg-end my-auto">
            <div className="col-md-8 col-lg-6 text-center text-lg-start">
              <span className="badge bg-opaque-yellow text-yellow rounded-pill">
                {t("banner_span")}
              </span>
              <h1 className="display-3 text-dark fw-bold lh-sm my-2 my-xl-2">
                {" "}
                {t("banner_title")}
              </h1>
              {/* <BookingForm /> */}
              <p className="text-dark">7S | Authorized Suzuki Dealership.</p>
              <p className="text-dark">
                Location: 229/A, Lane no. 1, Main Peshawar Road, Rawalpindi
                Cantt, Pakistan.{" "}
              </p>
              <Link
                href={"tel:" + Constants.PHONE}
                className="btn btn-with-icon btn-yellow rounded-pill "
              >
                <i className="bi bi-telephone-fill ms-1"></i>{" "}
                {t("banner_btn_text")}{" "}
              </Link>
            </div>
          </div>
        </div>
        <div className="container-fluid back back-background ">
          <div className="row ">
            <div className="col-lg-6 ">
              <Image
                className="back-background h100"
                src={banner}
                alt={""}
                height={1000}
                width={725}
                layout="contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
