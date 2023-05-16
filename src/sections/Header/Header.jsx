import styles from "../Header/Header.module.css";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import Button from "../../companents/Button/Button";
import { useEffect } from "react";
function Header() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const navigate = useNavigate();
  return (
    <header>
      <div className={`${styles["header__content"]} ${styles.container}`}>
        <div className={styles["header__logo"]}>
          <span onClick={() => navigate("/")}>MathQuiz</span>
        </div>
        <div className={styles["header__routes"]}>
          <NavLink to={"/exams"} className={styles["route__exam"]}>
            İmtahanlar
          </NavLink>
          <NavLink to="" className={styles["route__online-videos"]}>
            Onlayn videolar
          </NavLink>
          <NavLink to="" className={styles["route__about"]}>
            Haqqımızda
          </NavLink>
        </div>
        <div className={styles["header__buttons"]}>
          <div className={styles["login__btn"]}>
            <Button
              onClick={() => navigate("/login")}
              color={"white"}
              size={"md"}
            >
              {"Log in"}
            </Button>
          </div>
          <div className={styles["signUp__btn"]}>
            <Button
              onClick={() => navigate("/register")}
              color={"primary"}
              size={"md"}
            >
              {"Sign up"}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
