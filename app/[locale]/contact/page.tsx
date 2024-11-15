import Image from "next/image";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import mapimg from "../public/map.png";

const config = {
  raceCourseTitle: "Suzuki Racecourse Motors",
  addressDescription: "Let's make something big.",
  emailLabel: "Email",
  email: "info@suzukiracecoursemotors.com.pk",
  phoneLabel: "Phone",
  workTimeLabel: "Work Time",
  workTime: "Monday to Saturday 9:00am to 5:45pm",
  googleMap: Constants.GOOGLE_MAP,
  phone: Constants.PHONE,
  formTitle: "Let's make something big.",
  formSubtitle: "Together.",
  form: {
    yourNameLabel: "Your Name",
    yourNamePlaceholder: "Your Name",
    yourCompanyLabel: "Your Company",
    yourCompanyPlaceholder: "Your Company",
    messageLabel: "Message",
    messagePlaceholder: "Message",
    termsText: "I accept the",
    termsLink: "Terms & Conditions",
    privacyPolicyText:
      "and acknowledge that my information will be used in accordance with Privacy Policy.",
    submitButtonText: "Get in touch",
  },
};

async function Contact() {
  return (
    <section className="py-15 py-xl-20 bg-white">
      <div className="container mt-5 mt-lg-10">
        <div className="row align-items-center justify-content-between">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="text-dark">{config.raceCourseTitle}</h1>
            <p className="text-dark">{config.addressDescription}</p>
            <hr className="my-4 fw-25 ml-0" />
            <ul className="list-group list-group-minimal">
              <li className="list-group-item d-flex align-items-top">
                <span className="w-25 text-dark">{config.emailLabel}</span>
                <Link
                  href={config.googleMap}
                  className="text-dark underline"
                  target="_blank"
                >
                  {config.email}
                </Link>
              </li>
              <li className="list-group-item d-flex align-items-top">
                <span className="w-25 text-dark">{config.phoneLabel}</span>
                <Link
                  href={"tel:" + config.phone}
                  className="text-dark underline"
                >
                  {config.phone}
                </Link>
              </li>
              <li className="list-group-item d-flex align-items-top text-dark">
                <span className="w-25 text-dark">{config.workTimeLabel}</span>
                {config.workTime}
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <div className="media equal-1-1">
              <Link href={config.googleMap} target="_blank">
                <Image fill src={mapimg} alt="map" className="card-img-top" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
