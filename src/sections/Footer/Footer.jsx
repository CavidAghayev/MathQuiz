import styles from '../Footer/Footer.module.css'
import { Link } from "react-router-dom";
import Youtube from "../../assets/images/youtube.svg";
import Whatsapp from "../../assets/images/whatsapp.svg";
import Instagram from "../../assets/images/instagram.svg";
import Facebook from "../../assets/images/facebook.svg";
function Footer() {
  return (
    <footer>
      <div className={`${styles["footer__content"]} ${styles.container}`}>
        <div className={styles["footer__items"]}>
          <div className={styles["mathQuiz-about"]}>
            <div className={styles["mathQuiz-about__heading"]}>
              <h3>MathQuiz</h3>
            </div>
            <div className={styles["mathQuiz-about__info"]}>
              <p>
                Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.
                Placeat excepturi <br /> repudiandae ad aspernatur in nostrum
                <br /> perspiciatis magnam. <br />
              </p>
            </div>
          </div>
          <div className={styles["our-exams"]}>
            <div className={styles["exams__heading"]}>
              <h3>Imtahanlarımız</h3>
            </div>
            <div className={styles["exams__info"]}>
              <Link className={styles["exam__info__links"]} to={""}>
                5-8ci siniflər
              </Link>
              <Link className={styles["exam__info__links"]} to={""}>
                9-11ci siniflər
              </Link>
              <Link className={styles["exam__info__links"]} to={""}>
                Məntiq imtahanları
              </Link>
              <Link className={styles["exam__info__links"]} to={""}>
                Blok imtahanları
              </Link>
              <Link className={styles["exam__info__links"]} to={""}>
                Buraxılış imtahanları
              </Link>
            </div>
          </div>
          <div className={styles.support}>
            <div className={styles["support__heading"]}>
              <h3>Dəstək</h3>
            </div>
            <div className={styles["support__info"]}>
              <Link className={styles["support__info__links"]} to={""}>
                Dərsliklər
              </Link>
              <Link className={styles["support__info__links"]} to={""}>
                Ödəniş Şərtləri və Qaydaları
              </Link>
              <Link className={styles["support__info__links"]} to={""}>
                Əlaqə
              </Link>
            </div>
          </div>
        </div>
        <hr />
        <div className={styles.contacts}>n
          <div className={styles["location__icons"]}>
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
          <div className={styles["contacts__end"]}>
            <div className={styles["contact-number"]}>
              <div className={styles["contact-number__info"]}>
                <h3>Əlaqə Nömrəsi</h3>
                <span>+994 77 399 99 66</span>
              </div>
              <div className={styles["contact-number__image"]}>
                <img src="" alt="" />
              </div>
            </div>
            <div className={styles.location}>
              <div className={styles["location__info"]}>
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
