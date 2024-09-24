import Image from "next/image";
import React from "react";
import homepic from "../../public/paint-booth-banner.jpg";
const config = {
  title: "Body And Paint Shop",
};
export default async function BodyandPaint() {
  return (
    <article>
      <section className="py-10">
        <Image
          src={homepic}
          layout="responsive"
          alt=" background-image background "
        />{" "}
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              {/* Existing sections omitted for brevity */}

              <div>
                <h1 className="display-3 ">
                  Professional Paint and Body Shop Services
                </h1>
                <div>
                  <h5>1. Precision Body Repairs</h5>
                  <p className="fs-lg text-secondary">
                    Our state-of-the-art body shop provides expert repairs for
                    all Suzuki models. From minor dents to extensive collision
                    damage, our certified technicians restore your vehicles
                    bodywork to factory standards.
                  </p>
                </div>
                <div>
                  <h5>2. Premium Paint Services</h5>
                  <p className="fs-lg text-secondary">
                    Using advanced painting techniques and high-quality paints,
                    we ensure a flawless finish for every vehicle. Whether you
                    need a touch-up or a full-body respray, our paint
                    specialists match your vehicles original color with
                    precision.
                  </p>
                </div>
                <div>
                  <h5>3. Dent and Scratch Removal</h5>
                  <p className="fs-lg text-secondary">
                    Minor imperfections like dents and scratches can affect the
                    appearance and value of your vehicle. At our body shop, we
                    use cutting-edge tools and techniques to remove these
                    blemishes without affecting the factory finish.
                  </p>
                </div>
                <div>
                  <h5>4. Insurance Coordination</h5>
                  <p className="fs-lg text-secondary">
                    We assist with insurance claims and work directly with
                    providers to streamline the repair process, ensuring that
                    your vehicle gets back on the road as quickly as possible.
                  </p>
                </div>
                <div>
                  <h5>5. Frame and Structural Repairs</h5>
                  <p className="fs-lg text-secondary">
                    If your vehicles frame has been compromised in an accident,
                    our team specializes in restoring its structural integrity,
                    ensuring safety and performance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
