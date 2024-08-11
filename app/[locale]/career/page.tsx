import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
// import Image from "next/image";
import mapimg from "../public/map.png";
import { Link } from "@/navigation";
import Image from "next/image";
import Constants from "@/data/Constants";

async function Careers() {
  const t = await getTranslations({ namespace: "page" });
  return (
    <>
      <section className="py-15 py-xl-20">
        <div className="container mt-5 mt-xl-10">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow text-muted mb-1">We are hiring</span>
              <h1 className="display-1">Visual Designer</h1>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <p className="lead">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur.
              </p>
              <p className="text-secondary">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui ratione voluptatem sequi
                nesciunt. Neque porro quisquam est.
              </p>
              <p className="text-secondary">
                Ut enim ad minima veniam, quis nostrum exercitationem ullam
                corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                consequatur? Quis autem vel eum iure reprehenderit qui in ea
                voluptate velit esse quam nihil molestiae consequatur, vel illum
                qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos
                et accusamus et iusto odio dignissimos ducimus qui blanditiis
                praesentium voluptatum deleniti atque corrupti quos dolores et
                quas molestias excepturi sint occaecati cupiditate non
                provident, similique sunt in culpa qui officia deserunt mollitia
                animi.
              </p>
              <ul className="list-group list-group-minimal">
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check2 fs-5 me-2 text-primary"></i>
                  Personally passionate and up to date with current trends and
                  technologies, committed to quality and comfortable working
                  with adult media.
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check2 fs-5 me-2 text-primary"></i>
                  Bachelor or Master degree level educational background.
                </li>
                <li className="list-group-item d-flex align-items-center">
                  <i className="bi bi-check2 fs-5 me-2 text-primary"></i>4 years
                  relevant PHP dev experience.
                </li>
              </ul>
            </div>
            <div className="col-lg-5 col-xl-4">
              <div className="card border mb-2">
                <div className="card-body">
                  <ul className="list-group list-group-minimal">
                    <li className="list-group-item d-flex align-items-center">
                      <i className="bi bi-geo fs-3 text-primary me-3"></i>
                      <div>
                        <span className="eyebrow d-block text-muted">
                          Location
                        </span>
                        Pakistan
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center mt-3">
                      <i className="bi bi-bar-chart fs-3 text-primary me-3"></i>
                      <div>
                        <span className="eyebrow d-block text-muted">
                          Experience
                        </span>
                        2+ years
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center mt-3">
                      <i className="bi bi-clock-history fs-3 text-primary me-3"></i>
                      <div>
                        <span className="eyebrow d-block text-muted">
                          Expiration Date
                        </span>
                        December, 2024
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-grid">
                <a
                  href=""
                  className="btn btn-block btn-lg btn-with-icon btn-primary"
                >
                  Apply <i className="bi bi-arrow-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Careers;
