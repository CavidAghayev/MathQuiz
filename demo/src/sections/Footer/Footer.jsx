import "../Footer/Footer.css";
import { Link } from "react-router-dom";
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
            <Link className="our-exams__links" to={''} >5-8ci siniflər</Link>
            <Link className="our-exams__links" to={''} >9-11ci siniflər</Link>
            <Link className="our-exams__links" to={''} >Məntiq imtahanları</Link>
            <Link className="our-exams__links" to={''} >Blok imtahanları</Link>
            <Link className="our-exams__links" to={''} >Buraxılış imtahanları</Link>
            </div>
          </div>
          <div className="footer__support">
            <div className="footer__support__heading">
            <h3>Dəstək</h3>
            </div>
            <div className="footer__support__info">
                <Link className="support__links" to={''}>Dərsliklər</Link>
                <Link className="support__links" to={''}>Ödəniş Şərtləri və Qaydaları</Link>
                <Link className="support__links" to={''}>Əlaqə</Link>
            </div>
          </div>
        </div>
        <div className="footer__contacts"></div>
      </div>
    </footer>
  );
}

export default Footer;
