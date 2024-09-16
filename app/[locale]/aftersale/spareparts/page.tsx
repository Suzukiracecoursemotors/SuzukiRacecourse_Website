// import Image from "next/image";
import { getTranslations } from "next-intl/server";
// import S from "../public/3275466.png";
export default async function Landingpage() {
  const t = await getTranslations({
    namespace: "page.home",
  });

  return (
    <>
      {/* <section classNameName="py-15 py-xl-20 bg-light text-dark">
        <div classNameName="container">
          <div classNameName="row align-items-end mb-5">
            <div classNameName="col-lg-8">
              <h2 classNameName="fw-light">Spare Parts</h2>
            </div>
          </div>
          <div classNameName="row justify-content-between">
            <div classNameName="col">
              <ul classNameName="list-unstyled">
                <li>
                  <a href="" classNameName="card bg-white card-hover-border">
                    <div classNameName="card-body py-4">
                      <div classNameName="row align-items-center g-2 g-md-4 text-center text-md-start">
                        <div classNameName="col-md-9">
                          <p classNameName="fs-lg mb-0">Senior Visual Designer</p>
                          <ul classNameName="list-inline list-inline-separated text-muted">
                            <li classNameName="list-inline-item">at Spotify</li>
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
      </section> */}
      <section className="py-15 py-xl-20">
        <div className="container">
          <div className="row mb-5">
            <div className="col text-center">
              <h2 className="fw-bold mb-0">Categories</h2>
            </div>
          </div>
          <div className="row g-3 g-xl-4" data-masonry>
            <div className="col-md-6" data-aos="fade-up">
              <a
                href="https://suzukiparts.pk/collections/all"
                className="card equal-md-16-9 card-hover-gradient"
              >
                <div className="card-wrap">
                  <div className="card-footer my-auto">
                    <div className="text-center text-shadow">
                      <h3 className="mb-0 fw-bold text-white">All Products</h3>
                    </div>
                  </div>
                </div>
                <figure className="background"></figure>
              </a>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <a
                href="https://suzukiparts.pk/collections"
                className="card equal-md-16-9 card-hover-gradient"
              >
                <div className="card-wrap">
                  <div className="card-footer my-auto">
                    <div className="text-center text-shadow">
                      <h3 className="mb-0 fw-bold text-white">Collections</h3>
                    </div>
                  </div>
                </div>
                <figure className="background"></figure>
              </a>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <a
                href="https://suzukiparts.pk/collections/accessories-equipment"
                className="card equal-md-16-9 card-hover-gradient"
              >
                <div className="card-wrap">
                  <div className="card-footer my-auto">
                    <div className="text-center text-shadow">
                      <h3 className="mb-0 fw-bold text-white">Accessories</h3>
                    </div>
                  </div>
                </div>
                <figure className="background"></figure>
              </a>
            </div>
            <div className="col-md-6" data-aos="fade-up">
              <a
                href="https://suzukiparts.pk/collections/all"
                className="card equal-md-16-9 card-hover-gradient"
              >
                <div className="card-wrap">
                  <div className="card-footer my-auto">
                    <div className="text-center text-shadow">
                      <h3 className="mb-0 fw-bold text-white">Equipments</h3>
                    </div>
                  </div>
                </div>
                <figure className="background"></figure>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
