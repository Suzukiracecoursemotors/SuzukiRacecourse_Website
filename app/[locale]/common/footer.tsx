import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";

async function Footer() {
  return (
    <footer className="py-6 py-xl-4 bg-black">
      <div className="container">
        <div className="row g-2 g-lg-6 mb-8">
          <div className="col-lg-6">
            <Link
              href="/"
              className="navbar-brand container text-primary-hover color hover"
            >
              <h4>Suzuki Racecourse Motors</h4>
            </Link>
            <br />
            <Link
              href="https://maps.app.goo.gl/rCKVAV9QwJbRsXhz7"
              className="navbar-brand container text-primary-hover color hover"
            >
              <i className="bi bi-geo-alt-fill" style={{ color: "red" }}></i>
              <span> Main Peshawar Road, Rawalpindi Cantt</span>
            </Link>

            <br />
            <Link
              href="https://maps.app.goo.gl/rCKVAV9QwJbRsXhz7"
              className="navbar-brand container text-primary-hover color hover"
            >
              <i className="bi "> Email : info@suzukiracecoursemotors.com </i>
            </Link>
          </div>
          <div className="col-lg-6 text-lg-end text-primary-hover">
            <Link href={`tel:${Constants.PHONE} `} className="navbar-brand">
              <h6 className="h6 color hover">UAN : {Constants.PHONE}</h6>
              <h6 className="h6 color hover">Phone : +92 51 5174333-34</h6>
            </Link>
          </div>
        </div>
        <div className="col color">
          <hr />
        </div>
        <div className="row align-items-center g-1 g-lg-6 text-muted">
          <div className="col-lg-6 text-lg-end order-lg-2">
            <ul className="list-inline ">
              <li className="list-inline-item">
                <a
                  href="https://www.facebook.com/suzukiracecourse"
                  className="text-reset underline hover color text-primary-hover"
                >
                  <i
                    className="bi bi-facebook"
                    style={{ color: "#3b5998", fontSize: "24px" }} // Facebook blue color
                  ></i>
                </a>
              </li>
              <li className="list-inline-item ms-1">
                <a
                  href="https://www.instagram.com/suzukiracecoursemotors/"
                  className="text-reset underline hover color text-primary-hover"
                >
                  <i
                    className="bi bi-instagram"
                    style={{ color: "#e4405f", fontSize: "24px" }} // Instagram pinkish-red color
                  ></i>
                </a>
              </li>

              <li className="list-inline-item ms-1">
                <a
                  href="https://www.youtube.com/@suzukiracecoursemotors8314"
                  className="text-reset underline hover color text-primary-hover"
                >
                  <i
                    className="bi bi-youtube"
                    style={{ color: "#FF0000", fontSize: "24px" }} // YouTube red color
                  ></i>
                </a>
              </li>
              <li className="list-inline-item ms-1">
                <a
                  href="https://www.linkedin.com/company/suzuki-racecourse-motors/mycompany/"
                  className="text-reset underline hover color text-primary-hover"
                >
                  <i
                    className="bi bi-linkedin"
                    style={{ color: "#0077b5", fontSize: "24px" }} // LinkedIn blue color
                  ></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="col-lg-6 order-lg-1 ">
            <p className="small color">Copyright © Suzuki Racecourse Motors</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
