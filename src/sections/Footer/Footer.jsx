import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import Youtube from "../../assets/images/youtube.svg";
import Whatsapp from "../../assets/images/whatsapp.svg";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";
function Footer() {
  return (
    <footer>
      <div className="footer__content container">
        <div className="footer__items">
          <div className="footer__mathQuiz-about">
            <div className="footer__mathQuiz-about__heading">
              <h3>MathQuiz</h3>
            </div>
            <div className="footer__mathQuiz-about__info">
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Placeat excepturi <br /> repudiandae ad aspernatur in nostrum
                <br /> perspiciatis magnam. <br />
              </p>
            </div>
          </div>
          <div className="footer__our-exams">
            <div className="footer__our-exams__heading">
              <h3>Imtahanlarımız</h3>
            </div>
            <div className="footer__our-exams__info">
              <Link className="our-exams__links" to={""}>
                5-8ci siniflər
              </Link>
              <Link className="our-exams__links" to={""}>
                9-11ci siniflər
              </Link>
              <Link className="our-exams__links" to={""}>
                Məntiq imtahanları
              </Link>
              <Link className="our-exams__links" to={""}>
                Blok imtahanları
              </Link>
              <Link className="our-exams__links" to={""}>
                Buraxılış imtahanları
              </Link>
            </div>
          </div>
          <div className="footer__support">
            <div className="footer__support__heading">
              <h3>Dəstək</h3>
            </div>
            <div className="footer__support__info">
              <Link className="support__links" to={""}>
                Dərsliklər
              </Link>
              <Link className="support__links" to={""}>
                Ödəniş Şərtləri və Qaydaları
              </Link>
              <Link className="support__links" to={""}>
                Əlaqə
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className="footer__contacts">
          <div className="location__icons">
            <Link to={""}>
              <img src={Youtube} alt="" />
            </Link>
            <Link to={""}>
              <img src={Whatsapp} alt="" />
            </Link>
            <Link to={""}>
              <img src={Facebook} alt="" />
            </Link>
            <Link to={""}>
              <img src={Instagram} alt="" />
            </Link>
          </div>
          <div className="social">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="footer__contacts__end">
            <div className="contact-number">
              <div className="contact-number__info">
                <h3>Əlaqə Nömrəsi</h3>
                <span>+994 77 399 99 66</span>
              </div>
              <div className="contact-number__image"></div>
            </div>
            <div className="location">
              <div className="location__info">
                <h3>Ünvan</h3>
                <span>N.Nərimanov m/s yaxınlığı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
