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

      <section className="maintenance-tips-section py-5 bg-light">
        <div className="container">
          <h2 className="text-center mb-4">Vehicle Maintenance Tips</h2>
          <div className="row">
            <div className="col-md-6">
              <h3>Regular Oil Changes</h3>
              <p>
                Ensure your engine runs smoothly with routine oil changes. It
                enhances performance and prolongs engine life.
              </p>
            </div>
            <div className="col-md-6">
              <h3>Tire Maintenance</h3>
              <p>
                Proper tire pressure and regular alignment checks are crucial to
                safe driving and extending tire life.
              </p>
            </div>
            <div className="col-md-6 mt-4">
              <h3>Brake Inspections</h3>
              <p>
                Have your brakes inspected regularly to maintain safety and
                avoid costly repairs.
              </p>
            </div>
            <div className="col-md-6 mt-4">
              <h3>Battery Health</h3>
              <p>
                Check your battery's health periodically to prevent breakdowns
                and ensure optimal performance.
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
