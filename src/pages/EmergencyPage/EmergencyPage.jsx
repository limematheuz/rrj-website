import "./EmergencyPage.css";

import Header from "../../components/Header/Header";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";

import bgEmergency from "../../assets/img/website-home-new-campain.jpg";
import bgEmergencyMobile from "../../assets/bg-home-mobile.jpg";
import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";

import EmergencyIntro from "../../components/EmergencyServices/EmergencyIntro/EmergencyIntro";
import EmergencyBenefits from "../../components/EmergencyServices/EmergencyBenefits/EmergencyBenefits";
import EmergencyContact from "../../components/EmergencyServices/EmergencyContact/EmergencyContact";
import EmergencyServicesArea from "../../components/EmergencyServices/EmergencyServicesArea/EmergencyServicesArea";


export default function EmergencyPage(){
    return (
        <section className="emergency-page-container">
          <section className="cont-general-app">
            <Header />
            <section className="left-home-cont">
              <div className="emergency-cont-title">
                <div className="emergency-cont-info-items">
                  <h2>
                    <span className="emergency-box-first-title">
                      <span className="first">EMERGENCY</span>
                      <span className="second">SERVICES</span>
                    </span>
                    {/* <span className="tercer">EXPERTS </span> */}
                  </h2>
                  <h3> work with professionals</h3>
                </div>
                <div className="cont-contact-emergency">
                  <a href="#emergency-contact" className="btn-contact-emergency">
                    Reserve
                  </a>
                  <SocialBtns />
                </div>
              </div>
            </section>
            <section className="right-home-cont">
              <AlertMascot />
              <div className="cont-certified-home">
                <img src={certifiedOne} alt="certificado" />
                <img src={certifiedTwo} alt="certificado" />
              </div>
            </section>
            <a href="#emergency-contact" className="btn-financy-responsive">
              reserve
            </a>
            <img className="insurance-bg-page" src={bgEmergency} alt="bg-home" />
            <img className="insurance-bg-tablet" src={bgEmergencyMobile} alt="bg-home" />
            <img className="insurance-bg-mobile" src={bgEmergencyMobile} alt="bg-home" />
          </section>
          <EmergencyIntro/>
          <EmergencyBenefits/>
          <EmergencyServicesArea/>
          <CertificatesSwiper />
          <OurStory />
          <EmergencyContact/>
          <ArrowUp />
          <Footer />
        </section>
      );
    }