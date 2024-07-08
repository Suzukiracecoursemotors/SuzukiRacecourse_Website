// import Image from "next/image";
import { getTranslations } from "next-intl/server";
// import S from "../public/3275466.png";
export default async function Landingpage() {
  const t = await getTranslations({
    namespace: "page.home",
  });

  return (
    <>
      {/* <section classNameName="py-10 py-xl-20">
        <div classNameName="container">
          <div classNameName="row mb-5">
            <div classNameName="col text-center">
              <h2 classNameName="fw-bold mb-0">Departments</h2>
            </div>
          </div>
          <div classNameName="row g-3 g-xl-5" data-masonry>
            {[
              { title: "Sale", link: "/en/sales" },
              { title: "CUC", link: "/en/sales/cuc" },
              { title: "Finance", link: "/en/sales/finance" },
              { title: "Parts", link: "/en/aftersale/parts" },
              { title: "Service", link: "/en/aftersale/service" },
              { title: "Body Shop", link: "/en/aftersale/bodyshop" },
            ].map((department, index) => (
              <div classNameName="col-md-4" data-aos="fade-up" key={index}>
                <a
                  href={department.link}
                  classNameName="card equal-md-1-1 card-hover-gradient"
                >
                  <Image
                    classNameName="background  "
                    src={S}
                    layout="responsive"
                    alt={department.title}
                  />
                  <div classNameName="card-wrap">
                    <div classNameName="card-footer my-auto">
                      <div classNameName="text-center text-shadow">
                        <h3 classNameName="mb-0 fw-bold text-white">
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
      </section> */}

      <section className="py-15 py-xl-20 bg-light text-dark">
        <div className="container">
          <div className="row align-items-end mb-5">
            <div className="col-lg-8">
              <h2 className="fw-light">Spare Parts</h2>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col">
              <ul className="list-unstyled">
                <li>
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <button>Book now</button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-1">
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <button>Book now</button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-1">
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <button>Book now</button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-1">
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <button>Book now</button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <li className="mt-1">
                  <a href="" className="card bg-white card-hover-border">
                    <div className="card-body py-4">
                      <div className="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div className="col-md-9">
                          <p className="fs-lg mb-0">Senior Visual Designer</p>
                          <ul className="list-inline list-inline-separated text-muted">
                            <li className="list-inline-item">at Spotify</li>
                            <li className="list-inline-item">
                              San Francisco, CA
                            </li>
                          </ul>
                        </div>
                        <div className="col-md-3 text-lg-end">
                          <button>Book now</button>
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
