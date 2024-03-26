import "./BannerHome.css";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import financyBannerBg from "../../assets/financy-banner.jpg";
import bgFree from "../../assets/bgFree.jpg";
import stormBanner from "../../assets/img/website-banner.jpg";
import emergencyBanner from "../../assets/img/website-home-new-campain-2.jpg";

import check from "../../assets/icons/circle-check-regular.svg";
import Arrow from "../../assets/arrow.svg";
import flash from "../../assets/icons/flash.svg";
import emergency from "../../assets/icons/emergency-house.svg";
import freeTitle from "../../assets/freeinspectionlogo.svg";

export default function BannerHome() {
  let container = useRef(null);

  const left = () => {
    if (container.current) {
      // Obtener el ancho visible del contenedor
      const containerWidth = container.current.offsetWidth;

      // Desplazar hacia la derecha por el ancho visible
      container.current.scrollLeft -= containerWidth;
    }
  };

  const right = () => {
    if (container.current) {
      // Obtener el ancho visible del contenedor
      const containerWidth = container.current.offsetWidth;

      // Desplazar hacia la derecha por el ancho visible
      container.current.scrollLeft += containerWidth;
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section className="slider-banner-container">
      <div className="banner-slider-title">
        <h2>
          NEWS <span>FOR YOU...</span>
        </h2>
      </div>
      <section className="banner-items-container">
        <div className="banner-button-container">
          <button onClick={left}>
            {" "}
            <img className="financy-arrow-left" src={Arrow} alt="" />
          </button>
        </div>
        <section className="banners-container" ref={container}>
          <div className="financy-banner-container emergency-banner-cont">
            <div className="emergency-title-parraf-four">
              <div className="financy-banner-info">
                <div className="emergency-first-title">
                  <img src={emergency} alt="" />
                  <p className="financy-banner-title">Emergency Services</p>
                </div>
                <hr />
                <h3>work with professionals</h3>
                {/* <p className="emergency-second-parraf">Rely on RRJ.</p> */}
                <div className="financy-btn">
                  <Link
                    to={"/emergency-services"}
                    onClick={scrollToTop}
                    className="black-button-financy"
                  >
                    see more
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="financy-banner-container-img storm-banner"
              src={emergencyBanner}
              alt="banner-img"
            />
          </div>
          <div className="financy-banner-container insurance-banner-container">
            <div className="financy-title-parraf-one">
              <div className="financy-banner-info">
                <div className="financy-img-p">
                  <img src={flash} alt="" />
                  <p className="financy-banner-title">
                    Insurance Claims Experts
                  </p>
                </div>
                <hr />
                <h3>Wind Damage? Don't Worry</h3>
                <p className="financy-second-parraf">
                  Roofing, Siding, Gutters...
                </p>
                <div className="financy-btn">
                  <Link
                    to={"/insurance-claims-service"}
                    onClick={scrollToTop}
                    className="black-button-financy"
                  >
                    see more
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="financy-banner-container-img storm-banner"
              src={stormBanner}
              alt="banner-img"
            />
          </div>
          <div className="financy-banner-container  finan-banner-cont">
            <div className="financy-title-parraf-two">
              <div className="financy-banner-info">
                <div className="financy-img-p">
                  <img src={check} alt="" />
                  <p className="financy-banner-title">Financing Available</p>
                </div>
                <hr />
                <h3>
                  {" "}
                  <span>"Excellent!</span>
                  {""} Your Financing was approved"
                </h3>
                <p className="financy-second-parraf">
                  Remodeling your house with a financing plan
                </p>
                <div className="financy-btn">
                  <Link
                    to={"/financing-service"}
                    onClick={scrollToTop}
                    className="white-banner-btn"
                  >
                    {" "}
                    see more
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="financy-banner-container-img"
              src={financyBannerBg}
              alt="banner-img"
            />
          </div>
          <div className="financy-banner-container free-banner-container">
            <div className="financy-title-parraf-three">
              <div className="financy-banner-info">
                <div className="financy-img-p">
                  <img className="free-img-banner" src={freeTitle} alt="" />
                </div>
                <hr />
                <h3>Get a free inspection</h3>
                <p className="banner-third-parraf">
                  "Free inspection! Save money now!"
                </p>
                <div className="financy-btn">
                  <Link
                    to={"/free-inspection"}
                    onClick={scrollToTop}
                    className="black-button-banner"
                  >
                    {" "}
                    see more
                  </Link>
                </div>
              </div>
            </div>
            <img
              className="financy-banner-container-img free-inspection-banner"
              src={bgFree}
              alt="banner-img"
            />
          </div>
        </section>
        <div className="banner-button-container">
          <button onClick={right}>
            <img src={Arrow} alt="" />
          </button>
        </div>
      </section>
    </section>
  );
}
