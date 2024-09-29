import { getTranslations } from "next-intl/server";

const aftersaleConfig = {
  services: [
    "First Free Inspection (1,000 Km)",
    "Second Free Inspection (5,000 Km)",
    "Schedule Maintenance (every 5,000 Km)",
    "A/C Service, Repair, Replacement & Installation",
    "Engine Tuning Petrol & CNG",
    "Wheel Balancing & Alignment",
    "Brake Overhauling",
    "Suspension Repair & Overhauling",
    "Washing & Interior Cleaning",
    "Transmission Repair & Replacement",
    "Battery Check & Replacement",
    "Fuel System Cleaning",
    "Exhaust System Repair & Replacement",
    "Tire Rotation & Replacement",
    "Oil Change & Filter Replacement",
    "Radiator & Cooling System Service",
    "Headlight & Taillight Replacement",
    "Windshield & Window Repair",
    "Electrical Diagnostics & Repair",
    "Steering & Suspension Inspection",
  ],
  maintenanceTitle: "We maintain all types of vehicles.",
};

async function Maintaince() {
  const t = await getTranslations({ namespace: "page" });

  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row mb-10">
            <div className="col-lg-6">
              <h2 className="fw-light">
                <span className="fw-bold">
                  {aftersaleConfig.maintenanceTitle}
                </span>
              </h2>
            </div>
          </div>
          <div className="row g-3 g-xl-5">
            {aftersaleConfig.services.map((service, index) => (
              <div className="col-lg-4" key={index}>
                <div className="d-flex">
                  <div className="icon-box icon-box-sm bg-opaque-green rounded-circle me-2">
                    <i className="bi bi-check2 text-green"></i>
                  </div>
                  <div>
                    <p className="fs-lg">{service}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Maintaince;
