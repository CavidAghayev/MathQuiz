import styles from "../Login/Login.module.css";
import Input from "../../sections/Input/Input";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import Eye from "../../assets/images/eye.svg";
import Header from "../../sections/Header/Header";
function Login() {
  const navigate = useNavigate();
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
    navigate("/dashboard");
  };
  console.log(formData);
  return (
    <>
      <Header />
      <div style={{ marginTop: 90 }} className={styles.login}>
        <div className={styles["login__content"]}>
          <div className={styles["login__details"]}>
            <div className={styles.board}>
              <div className={styles["board__heading"]}>
                <h4>Login</h4>
                <span>Welcome back! Please enter your details.</span>
              </div>
              <div className={styles["board__form"]}>
                <form onSubmit={handleSubmit}>
                  <Input
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    size={"lg"}
                    id="email"
                    type="email"
                    text="Email"
                  />
                  <div className={styles["input-password"]}>
                    <img onClick={() => showPassword()} src={Eye} alt="" />
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
                      value="Login"
                      size={"lg"}
                      type={"submit"}
                      cursor={"cursor"}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles["exam-tests"]}></div>
        </div>
      </div>
    </>
  );
}

export default Login;
