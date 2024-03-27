import Header from "../../components/Header/Header";
import SocialBtns from "../../components/SocialBtns/SocialBtns";
import AlertMascot from "../../components/AlertMascot/AlertMascot";
import OurStory from "../../components/OurStory/OurStory";
import Footer from "../../components/Footer/Footer";
import certifiedOne from "../../assets/certifie-one.svg";
import certifiedTwo from "../../assets/certifie-two.svg";
import ArrowUp from "../../components/ArrowUp/ArrowUp";
import bgFinancy from "../../assets/bg-home-financy.jpg";
import bgFinancyMobile from "../../assets/bg-home-mobile-financy.jpg";
import FinancySlider from "../../components/FinancySlider/FinancySlider";
import CertificatesSwiper from "../../components/CertificatesSwiper/CertificatesSwiper";
import Getintouch from "../../assets/get-in-touch.jpg";
import "./FinancyPage.css";
import FinancyForm from "../../components/FinancyForm/FinancyForm";
import FinancyServices from "../../components/FinancyServices/FinancyServices";

export default function FinancyPage() {
  return (
    <section className="financy-page-container" >
      <section  className="cont-general-app" >
        <Header />
        <section className="left-home-cont">
          <div className="financy-cont-title">
            <div className="financy-cont-info-items">
              <h2>
                <span className="financy-box-first-title">
                  <span className="financy-first-item">excellent!</span>
                  <span className="financy-second-item">my financing</span>
                </span>
                <span className="financy-tercer-item">was approved</span>
              </h2>
              <h3>financing available</h3>
            </div>
            <div className="cont-contact-financy">
              <a href="#financy-form-cont" className="btn-contact-financy">
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
        <a href="#financy-form-cont" className="btn-financy-responsive">
          reserve
        </a>
        <img className="bg-home" src={bgFinancy} alt="bg-home" />
        <img className="bg-home-mobile" src={bgFinancyMobile} alt="bg-home" />
      </section>
      <div className="title-container">
        <h2 className="financy-title">
          RRJ FINANCE
          <br />
          <span className="financy-span">YOUR REMODELING</span>
        </h2>
        <p className="financy-text">
          Don't let finances hold back your dreams. With RRJ Remodeling, you can
          confidently pursue your home or business improvements
        </p>
      </div>
      <FinancySlider />
      <CertificatesSwiper />
      <FinancyServices />
      <section className="get-in-touch-banner">
        <img src={Getintouch} alt="" />
        <div className="get-in-touch-info">
          <h3>GET IN TOUCH</h3>
          <p>
            Contact us now to learn more about our financing options and take
            the first step towards your dream project.
          </p>
          <a href="#financy-form-cont">CONTACT US</a>
        </div>
      </section>
      <OurStory />
      <FinancyForm />
      <ArrowUp />
      <Footer />
    </section>
  );
}
