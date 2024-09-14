import { Locale } from "@/i18n";
import Gallery from "../common/gallery";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import Moazzmpic from "./WhatsApp Image 2024-09-05 at 11.10.02 AM.jpeg";
import mohtashim from "./1672853464297.jpeg";
import Team from "./components/team";
import Missions from "./components/mission";
type GalleryProps = {
  params: { locale: Locale };
};

export default async function AboutUspage({
  params: { locale },
}: GalleryProps) {
  const t = await getTranslations({ locale, namespace: "page" });
  return (
    <>
      <section className="py-15 py-xl-20 bg-light">
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div
              className="col-md-8 col-lg-5 mb-5 mb-xl-0"
              data-aos-delay="100"
            >
              <Image
                src={Moazzmpic}
                alt="awais_image"
                width={600}
                height={500}
                layout="responsive"
              />
            </div>
            <div
              className="col-lg-6 text-center text-lg-start"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2>Syed Moazzam Hussain Shah</h2>
              <ul className="list-group list-group-separated">
                <li className="list-group-item py-4">
                  <p className="text-muted lead">
                    <span className="text-black">
                      Message from the Director
                    </span>{" "}
                    At Suzuki Racecourse Motors, our customers are at the heart
                    of everything we do. We are committed to delivering vehicles
                    and services that meet your highest expectations, with a
                    focus on innovation, quality, and reliability. Whether you
                    are purchasing your first car or returning for another, we
                    are here to ensure your experience is seamless and
                    satisfying. Your trust drives us to constantly improve, and
                    we look forward to continuing this journey with you. Thank
                    you for choosing Suzuki Racecourse Motors.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-center justify-content-lg-between">
            <div
              className="col-lg-6 text-center text-lg-start"
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <h2>Syed Mohtashim Hussain Shah</h2>
              <ul className="list-group list-group-separated">
                <li className="list-group-item py-4">
                  <p className="text-muted lead">
                    <span className="text-black">
                      Message from the Director
                    </span>{" "}
                    At Suzuki Racecourse Motors, our customers are at the heart
                    of everything we do. We are committed to delivering vehicles
                    and services that meet your highest expectations, with a
                    focus on innovation, quality, and reliability. Whether you
                    are purchasing your first car or returning for another, we
                    are here to ensure your experience is seamless and
                    satisfying. Your trust drives us to constantly improve, and
                    we look forward to continuing this journey with you. Thank
                    you for choosing Suzuki Racecourse Motors.
                  </p>
                </li>
              </ul>
            </div>
            <div
              className="col-md-8 col-lg-5 mb-5 mb-xl-0"
              data-aos-delay="100"
            >
              <Image
                src={mohtashim}
                alt="awais_image"
                width={600}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </section>
      <Missions />
      <Team />
      {/* <Gallery isGrey={true} title={t("gallery.title")} /> */}
    </>
  );
}
