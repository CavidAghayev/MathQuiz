import styles from "../Register/Register.module.css";
import Input from "../../sections/Input/Input";
import Button from "../../companents/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ReactComponent as Eye } from "../../assets/images/eye.svg";
import Header from "../../sections/Header/Header";
function Register() {
  const [formData, setFormData] = useState({});
  let inputId = document.getElementById("password");
  function showPassword() {
    if (inputId.type === "password") {
      inputId.type = "text";
    } else {
      inputId.type = "password";
    }
  }
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Header />
      <div style={{ marginTop: 90 }} className={styles.register}>
        <div className={styles["register__content"]}>
          <div className={styles["exam-tests"]}></div>
          <div className={styles["register__details"]}>
            <div className={styles.board}>
              <div className={styles["board__heading"]}>
                <h4>Create new account</h4>
              </div>
              <div className={styles["who-are-you"]}>
                <div className={styles["who-are-you__heading"]}>
                  <h3>I am a</h3>
                </div>
                <div className={styles.options}>
                  <div className={styles["options__student"]}>
                    <div className={styles["student__checkbox"]}>
                      <Input type={"checkbox"} size={"sm"} />
                    </div>
                    <span>Student</span>
                  </div>
                  <div className={styles["options__teacher"]}>
                    <div className={styles["teacher__checkbox"]}>
                      <Input type={"checkbox"} size={"sm"} />
                    </div>
                    <span>Teacher</span>
                  </div>
                </div>
              </div>
              <div className={styles["board-form"]}>
                <form onSubmit={handleSubmit} action="" className={styles.form}>
                  <div className={styles["input-date"]}>
                    <Input
                      value={formData.date}
                      onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })
                      }
                      size={"lg"}
                      id="date"
                      type="date"
                      text="Date of birth"
                    />
                  </div>
                  <div className={styles["input-email"]}>
                    <Input
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                      }}
                      size={"lg"}
                      id="email"
                      type="email"
                      text="Email"
                    />
                  </div>
                  <div className={styles["input-password"]}>
                  <Eye
                      onClick={() => showPassword()}
                      className={styles["eye-image"]}
                    />
                    <Input
                      value={formData.password}
                      onChange={(e) => {
                        setFormData({ ...formData, password: e.target.value });
                      }}
                      size={"lg"}
                      id="password"
                      type="password"
                      text="Password"
                    />
                  </div>
                  <div className={styles["input-icon"]}></div>
                  <div className={styles["forgot-password"]}>
                    <Link className={styles["forgot-password__link"]} to="">
                      Forgot password?
                    </Link>
                  </div>
                  <div className={styles["privacy-policy"]}>
                    <div className={styles.checkbox}>
                      <Input size={"sm"} type={"checkbox"} />
                    </div>
                    <div className={styles["privacy-policy__text"]}>
                      <p>I accept (name) and Terms of Services</p>
                      <Link className={styles["privacy-policy__link"]} to="">
                        Privacy Policy
                      </Link>
                    </div>
                  </div>
                  <div className={styles["board__btn"]}>
                    <Input
                      color={"white"}
                      center={"center"}
                      background={"primary"}
                      value="Sign Up"
                      size={"lg"}
                      type={"submit"}
                      cursor={"cursor"}
                    />
                  </div>
                </form>
              </div>
              <div className={styles.or}>
                <span>or</span>
              </div>
              <div className={styles["google-continue"]}>
                <Button size={"lg"} color={"white__shadow"}>
                  {"Continue with Google"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
