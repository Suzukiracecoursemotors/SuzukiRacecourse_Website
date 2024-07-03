import Designhome from "../../[locale]/public/banner2.jpg";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import Image from "next/image";


export default async function HomeHero() {

  return (
    <section className="overflow-hidden bg-black inverted">
    <div className="d-flex flex-column container py-20 min-vh-100 level-1">
      <div className="row align-items-center justify-content-center justify-content-lg-end my-auto">
        <div className="col-md-8 col-lg-5 text-center text-lg-start">
          <span className="badge bg-opaque-yellow text-yellow rounded-pill">
Pakistan          </span>
          <h1 className="display-3 fw-bold lh-sm my-2 my-xl-2">
            {" "}
SUZUKI RaceCourse Motor</h1>
          <br />
          <Link
            href={"tel:" + Constants.PHONE}
            className="btn btn-with-icon btn-yellow rounded-pill ms-2"
          >
            <i className="bi bi-telephone-fill ms-1"></i> Book Your Car Now
          </Link>
        </div>
      </div>
    </div>
    <div className="container-fluid back back-background">
      <div className="row h-100">
        <div className="col-lg-6 h-100">
          <Image
            className="back-background h-100"
            src={Designhome}
            alt={""}
            layout="cover"
            width={700}
            height={700}
          />
        </div>
      </div>
    </div>
  </section>
  );
}
