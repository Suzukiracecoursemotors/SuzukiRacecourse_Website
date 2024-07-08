import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import mapimg from "../public/map.png";
import { Link } from "@/navigation";
import Image from "next/image";
import Constants from "@/data/Constants";

async function Contact() {
  const t = await getTranslations({ namespace: "page" });
  return (
    <section className="py-15 py-xl-20 bg-white">
      <div className="container mt-5 mt-lg-10">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="text-dark ">RaceCourse</h1>
            <p className="text-dark ">home.addresses.description</p>
            <hr className="my-4 fw-25 ml-0" />
            <ul className="list-group list-group-minimal">
              <li className="list-group-item d-flex align-items-top">
                <span className="w-25 text-dark"> Email</span>
                <Link
                  href={Constants.GOOGLE_MAP}
                  className="text-dark underline"
                  target="_blank"
                >
                  Suzukiracecoursemotors.pk{" "}
                </Link>
              </li>
              <li className="list-group-item d-flex align-items-top">
                <span className="w-25 text-dark"> Phone </span>
                <Link
                  href={"tel:" + Constants.PHONE}
                  className="text-dark underline"
                >
                  {" "}
                  {Constants.PHONE}
                </Link>
              </li>
              <li className="list-group-item d-flex align-items-top text-dark">
                <span className="w-25 text-dark"> Work Time </span>
                Monday to Saturday 9:00am to 5:00pm
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="media equal-1-1">
              <Link href={Constants.GOOGLE_MAP} target="_blank">
                <Image fill src={mapimg} alt="map" className="card-img-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
