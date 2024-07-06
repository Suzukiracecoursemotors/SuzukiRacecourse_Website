import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function Landingpage() {
  const t = await getTranslations({
    namespace: "page.home",
  });

  return (
    <>
      <section className="py-10 py-xl-20">
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="fw-bold mb-0">Departments</h2>
            </div>
          </div>
          <div className="row g-3 g-xl-5" data-masonry>
            {[
              { title: "CUC", link: "/en/sales/cuc" },
              { title: "Finance", link: "/en/sales/finance" },
              { title: "Parts", link: "/en/aftersale/parts" },
              { title: "Service", link: "/en/aftersale/service" },
              { title: "Sale", link: "/en/sales" },
              { title: "Body Shop", link: "/en/aftersale/bodyshop" },
            ].map((department, index) => (
              <div className="col-md-4" data-aos="fade-up" key={index}>
                <a
                  href={department.link}
                  className="card equal-md-1-1 card-hover-gradient"
                >
                  <Image
                    className="background"
                    src={""}
                    width={1000}
                    height={1000}
                    layout="responsive"
                    alt={department.title}
                  />
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
