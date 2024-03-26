import "./EmergencyIntro.css";

import haunted from "../../../assets/img/haunted-house.jpg";
import women from "../../../assets/img/woman.jpg";

export default function EmergencyIntro() {
  return (
    <section className="emergency-container">
      <div className="emergency-title-first">
          <h2>
            emergency <br />
            <span> services</span>
          </h2>
        </div>
      <img className="first-emergency-img" src={women} alt="woman-picture" />
      <article className="intro-items-container">
        <div className="emergency-title">
          <h2>
            emergency <br />
            <span> services</span>
          </h2>
        </div>
        <div className="emergency-intro-info">
          <h4>
            RRJ Construction <span>& remodeling</span>
          </h4>
          <p>
            When emergencies strike unexpectedly, rely on RRJ for swift and
            expert assistance. Our specialized team is equipped to handle any
            home-related emergency with precision and care. Contact us for
            immediate support.
          </p>
          <a href="#emergency-contact">SEND RESERVE</a>
        </div>
      </article>
      <img className="second-emergency-img" src={haunted} alt="haunted-house" />
    </section>
  );
}
