import "./EmergencyBenefits.css";

import fastCar from "../../../assets/icons/truck.svg";
import hands from "../../../assets/icons/hands.svg";
import researcher from "../../../assets/icons/researcher.svg";
import specialist from "../../../assets/icons/specialist.svg";

export default function EmergencyBenefits() {
  return (
    <section className="emergency-benefits-container">
      <div className="emergency-intro">
        {/* <h3>
          YOU CAN <span>TRUST US</span>
        </h3> */}
      </div>
      <section className="card-benefits-section">
        <div className="card-benefits-container">
          <span className="first-span"></span>
            <div className="card-items-container">
              <img src={fastCar} alt="" />
              <h6>Fast Attention</h6>
              <p>
              Emergency Priority: We prioritize urgent situations to ensure your peace of mind.
              </p>
            </div>
          <span className="second-span"></span>
        </div>
        <div className="card-benefits-container">
          <span className="first-span"></span>
            <div className="card-items-container">
              <img src={hands} alt="" />
              <h6>Certified Experience</h6>
              <p>
              Expertise You Can Trust: Our team brings years of certified experience to every project.
              </p>
            </div>
          <span className="second-span"></span>
        </div>
        <div className="card-benefits-container">
          <span className="first-span"></span>
            <div className="card-items-container">
              <img src={researcher} alt="" />
              <h6>Free Inspection</h6>
              <p>
              Comprehensive Assessment: Take advantage of our complimentary inspection service.
              </p>
            </div>
          <span className="second-span"></span>
        </div>
        <div className="card-benefits-container">
          <span className="first-span"></span>
            <div className="card-items-container">
              <img src={specialist} alt="" />
              <h6>Advice from a Specialist</h6>
              <p>
              Proactive Solutions: Benefit from expert recommendations to optimize your project's success.
              </p>
            </div>
          <span className="second-span"></span>
        </div>
      </section>
    </section>
  );
}
