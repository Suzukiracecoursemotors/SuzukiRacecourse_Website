import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import NotFound from "../[...slug]/page";
import Address from "../common/address";
import III from "../public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import img from "../public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import Image from "next/image";
import Carosil from "../common/carosil";

async function Aftersale() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <section className="py-10 py-xl-20">
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="fw-bold mb-0">AfterSales</h2>
            </div>
          </div>
          <div className="row g-3 g-xl-5" data-masonry>
            {[
              { title: "Mechanical WorkShop", link: "/en/aftersale/service" },
              {
                title: "Extend Warrenty",
                link: "/en/aftersale/extend_warrenty",
              },
              { title: "Paint & BodyShop", link: "/en/aftersale/bodyshop" },
            ].map((department, index) => (
              <div className="col-md-4" data-aos="fade-up" key={index}>
                <a
                  href={department.link}
                  className="card equal-md-1-1 card-hover-gradient"
                >
                  {/* <Image
                    className="background  "
                    src={""}
                    layout="responsive"
                    alt={department.title}
                  /> */}
                  <div className="card-wrap">
                    <div className="card-footer my-auto">
                      <div className="text-center text-shadow">
                        <h3 className="mb-0 fw-bold text-white">
                          {department.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Aftersale;
