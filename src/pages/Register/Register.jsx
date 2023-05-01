import "../Register/Register.css";
import Input from "../../sections/Input/Input";
import Button from "../../companents/Button/Button";
import { Link } from "react-router-dom";
import { useState } from "react";
import Eye from '../../assets/images/eye.svg'
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
  return (
    <>
    <Header/>
    <div className="register section">
      <div className="register__content">
        <div className="register__exam-tests"></div>
        <div className="register__details">
          <div className="register__board">
            <div className="register__board__heading">
              <h4>Create new account</h4>
            </div>
            <div className="who-are-you">
              <div className="who-are-you__heading">
                <h3>I am a</h3>
              </div>
              <div className="options">
                <div className="options__student">
                  <div className="options__student__checkbox">
                    <Input type={"checkbox"} size={"sm"} />
                  </div>
                  <span>Student</span>
                </div>
                <div className="options__teacher">
                  <div className="options__teacher__checkbox">
                    <Input type={"checkbox"} size={"sm"} />
                  </div>
                  <span>Teacher</span>
                </div>
              </div>
            </div>
            <div className="register__board__form">
              <form action="" className="form">
                <Input
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  size={"md"}
                  id="date"
                  type="date"
                  text="Date of birth"
                  />
                <Input
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                  }}
                  size={"md"}
                  id="email"
                  type="email"
                  text="Email"
                  />
                <div className="register__board__input__password">
                <img onClick={()=>showPassword()} src={Eye} alt="" />
                <Input
                  value={formData.password}
                  onChange={(e) => {
                    setFormData({ ...formData, password: e.target.value });
                  }}
                  size={"md"}
                  id="password"
                  type="password"
                  text="Password"
                  />
                </div>
              </form>
              <div className="input__icon"></div>
              <div className="forgot__password">
                <Link className="forgot__password__link" to="">
                  Forgot password
                </Link>
              </div>
            </div>
            <div className="register__board__privacy-policy">
              <div className="checkbox">
                <Input
                  size={"sm"}
                  type={"checkbox"}
                />
              </div>
              <div className="privacy-policy__text">
                <p>I accept (name) and Terms of Services</p>
                <Link className="privacy-policy__link" to="">
                  Privacy Policy
                </Link>
              </div>
            </div>
            <div className="register__board__button">
              <Button size={"lg"} color={"primary"}>
                {"Sign Up"}
              </Button>
            </div>
            <div className="register__or">
              <span>or</span>
            </div>
            <div className="google-continue">
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
