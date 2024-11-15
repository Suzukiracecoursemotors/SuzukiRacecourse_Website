import { Link } from "@/navigation";
import Constants from "@/data/Constants";

export default function CareCenterLandingPage() {
  return (
    <div>
      <section className="hero-section text-center py-5">
        <div className="container">
          <h2 className="mt-6">Suzuki Racecourse Motors Care Center</h2>
          <p className="lead">
            Expert car care and maintenance services to keep your Suzuki running
            smoothly.
          </p>
          <Link
            href={"tel:" + Constants.Insurance}
            className="btn border btn-yellow btn-with-icon rounded-pill btn-lg"
          >
            <i className="bi bi-telephone-fill"></i> Contact Now
          </Link>
        </div>
      </section>

      <section className="service-highlights py-5">
        <div className="container text-center">
          <h3 className="mb-4">Why Choose Our Care Center?</h3>
          <div className="row">
            <div className="col-md-4">
              <i className="bi bi-tools display-4 text-primary"></i>
              <h5 className="mt-3">Certified Technicians</h5>
              <p>
                Our team of certified professionals ensures that your vehicle is
                in expert hands.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-clock-history display-4 text-primary"></i>
              <h5 className="mt-3">Quick Service</h5>
              <p>
                Get your car serviced quickly and efficiently, with minimal
                downtime.
              </p>
            </div>
            <div className="col-md-4">
              <i className="bi bi-shield-check display-4 text-primary"></i>
              <h5 className="mt-3">Genuine Parts</h5>
              <p>
                We use only genuine Suzuki parts to ensure the longevity and
                safety of your car.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-section py-5 text-center">
        <div className="container">
          <h2 className="mb-4">Schedule Your Service Today</h2>
          <p className="lead">
            Let our experts take care of your Suzuki. Click below to book your
            appointment online.
          </p>
          <Link
            href={"tel:" + Constants.CRO2}
            className="btn btn-lg btn-primary rounded-pill"
          >
            Book Service Now
          </Link>
        </div>
      </section>
    </div>
  );
}
