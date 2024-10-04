import Constants from "@/data/Constants";
import { getTranslations } from "next-intl/server";

const config = {
  hiring: "We are hiring",
  title: "Graphic Designer",
  desc1:
    "Join our creative team as a Graphic Designer, where you will have the opportunity to bring concepts to life with your innovative designs. We're looking for someone with a keen eye for detail, a passion for visual storytelling, and a desire to stay updated with the latest design trends.",
  desc2:
    "In this role, you’ll be responsible for creating visually compelling assets for digital and print platforms, including branding materials, social media graphics, and marketing campaigns. Your work will play a crucial role in shaping the brand’s visual identity and communicating our message to a global audience.",
  desc3:
    "If you're a creative thinker with a strong portfolio and experience in design software like Adobe Creative Suite, we’d love to hear from you.",
  responsibilities: [
    "Develop and create engaging designs for digital and print media.",
    "Collaborate with marketing teams to deliver impactful campaigns.",
    "Ensure consistency in designs and align with the brand’s voice.",
    "Stay updated with design trends and tools to continually enhance creativity.",
    "Work with cross-functional teams to deliver projects on time.",
  ],
  jobDetails: {
    location: "Suzuki Racecourse Motors",
    experience: "2+ years in graphic design",
    expiration: "December 31, 2024",
  },
  applyButton: "Apply Now",
};

async function Careers() {
  const t = await getTranslations({ namespace: "page" });
  return (
    <>
      <section className="py-5 py-xl-2">
        <div className="container mt-5 mt-xl-10">
          <div className="row mb-5">
            <div className="col-lg-7">
              <span className="eyebrow text-muted mb-1">{config.hiring}</span>
              <h1 className="display-1">{config.title}</h1>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col-lg-7 mb-5 mb-lg-0">
              <p className="lead">{config.desc1}</p>
              <p className="text-secondary">{config.desc2}</p>
              <p className="text-secondary">{config.desc3}</p>
              <ul className="list-group list-group-minimal">
                {config.responsibilities.map((item, index) => (
                  <li
                    className="list-group-item d-flex align-items-center"
                    key={index}
                  >
                    <i className="bi bi-check2 fs-5 me-2 text-primary"></i>
                    {item}
                  </li>
                ))}
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
                        {config.jobDetails.location}
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center mt-3">
                      <i className="bi bi-bar-chart fs-3 text-primary me-3"></i>
                      <div>
                        <span className="eyebrow d-block text-muted">
                          Experience
                        </span>
                        {config.jobDetails.experience}
                      </div>
                    </li>
                    <li className="list-group-item d-flex align-items-center mt-3">
                      <i className="bi bi-clock-history fs-3 text-primary me-3"></i>
                      <div>
                        <span className="eyebrow d-block text-muted">
                          Expiration Date
                        </span>
                        {config.jobDetails.expiration}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="d-grid">
                <a
                  href={"tel:" + Constants.HR}
                  className="btn btn-block btn-lg btn-with-icon btn-primary"
                >
                  {config.applyButton} <i className="bi bi-arrow-right"></i>
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
