import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Page not found",
  description: "Seems this page does not exist",
};
export default function NotFound() {
  return (
    <>
      <section className="bg-red inverted">
        <div className="d-flex flex-column container min-vh-100 py-20">
          <div className="row align-items-center justify-content-center justify-content-lg-between my-auto">
            <div className="col-lg-6 order-lg-2">
              <Image
                className="img-fluid"
                src={""}
                layout="responsive"
                width={100}
                height={100}
                alt="Figure"
              />
            </div>

            <div className="col-md-8 col-lg-5 order-lg-1 text-center text-lg-start">
              <h1 className="display-2">Sorry, page not found.</h1>
              <a
                href="/"
                className="btn btn-rounded btn-outline-white rounded-pill"
              >
                Go back to homepage
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
