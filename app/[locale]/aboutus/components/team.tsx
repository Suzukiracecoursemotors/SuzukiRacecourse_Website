import { Locale } from "@/i18n";
import Image from "next/image";
import Moazzmpic from "../WhatsApp Image 2024-09-05 at 11.10.02 AM.jpeg";
import mohtashim from "../1672853464297.jpeg";

export default async function Team() {
  return (
    <section className="py-15 py-xl-20 bg-light overflow-hidden">
      <div className="container">
        <div className="row mb-10">
          <div className="col-lg-8">
            <h2>Our Team</h2>
          </div>
        </div>
        <div className="row g-3 g-xl-5">
          <div className="col-md-6 col-lg-4">
            <div className="card">
              <div className="equal-1-1 mb-2">
                <Image
                  className="background"
                  src={mohtashim}
                  layout="responsive"
                  alt="background image"
                />
              </div>
              <h4 className="card-title">Michael Doe</h4>
              <span className="text-secondary">Senior Designer at Google</span>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="equal-1-1 mb-2">
              <Image
                className="background"
                src={Moazzmpic}
                layout="responsive"
                alt="background image"
              />
            </div>
            <h4 className="fs-5 mb-0">Michael Doe</h4>
            <span className="text-secondary">Senior Designer at Google</span>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="equal-1-1 equal-3-4 mb-2">
              <Image
                className="background"
                src={mohtashim}
                layout="responsive"
                alt="background image"
              />
            </div>
            <h4 className="fs-5 mb-0">Michael Doe</h4>
            <span className="text-secondary">Senior Designer at Google</span>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="equal-1-1 mb-2">
              <Image
                className="background"
                src={Moazzmpic}
                layout="responsive"
                alt="background image"
              />
            </div>
            <h4 className="fs-5 mb-0">Michael Doe</h4>
            <span className="text-secondary">Senior Designer at Google</span>
          </div>
          <div className="col-md-6 col-lg-4">
            <div className="equal-1-1 equal-3-4 mb-2">
              <Image
                className="background"
                src={mohtashim}
                layout="responsive"
                alt="background image"
              />
            </div>
            <h4 className="fs-5 mb-0">Michael Doe</h4>
            <span className="text-secondary">Senior Designer at Google</span>
          </div>
        </div>
      </div>
    </section>
  );
}
