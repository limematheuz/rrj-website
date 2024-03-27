import "./InsurancePage.css";
import Header from "../../components/Header/Header";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";

import bgStorm from "../../assets/img/website-home.jpg";
import bgInsuranceMobile from "../../assets/bg-home-mobile.jpg";

import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import InsuranceIntro from "../../components/StormDamageComponents/InsuranceIntro/InsuranceIntro";
import InsuranceSlider from "../../components/StormDamageComponents/InsuranceSlider/InsuranceSlider";
import InsuranceClaim from "../../components/StormDamageComponents/InsuranceClaim/InsuranceClaim";
import InsuranceContact from "../../components/StormDamageComponents/InsuranceContact/InsuranceContact";

export default function InsurancePage() {
  return (
    <section className="insurance-page-container">
      <section className="cont-general-app">
        <Header />
        <section className="left-home-cont">
          <div className="cont-title">
            <div className="insurance-cont-info-items">
              <h2>
                <span className="insurance-box-first-title">
                  <span className="insurance-first-item">INSURANCE</span>
                  <span className="insurance-second-item">CLAIMS</span>
                </span>
                <span className="insurance-tercer-item">EXPERTS </span>
              </h2>
              <h3>WIND DAMAGE? DON'T WORRY</h3>
            </div>
            <div className="cont-contact-insurance">
              <a href="#financy-form-cont" className="btn-contact-insurance">
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
        <a href="#financy-form-cont" className="btn-insurance-responsive">
          reserve
        </a>
        <img className="insurance-bg-page" src={bgStorm} alt="bg-home" />
        <img className="insurance-bg-tablet" src={bgInsuranceMobile} alt="bg-home" />
        <img className="insurance-bg-mobile" src={bgInsuranceMobile} alt="bg-home" />
      </section>
      <InsuranceIntro />
      <InsuranceSlider />
      <InsuranceClaim />
      <InsuranceContact />
      <CertificatesSwiper />
      <OurStory />
      <ArrowUp />
      <Footer />
    </section>
  );
}
