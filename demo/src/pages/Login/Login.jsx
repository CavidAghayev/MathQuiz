import "./../../pages/Login/Login.css";
import Input from "../../sections/Input/Input";
import Button from "../../companents/Button/Button";
import { useState } from "react";
function Login() {
  const [formData, setFormData] = useState({});
  let inputId = document.getElementById("password")
  function checkboxItem(){
if(inputId.type === "password"){
  inputId.type = "text"
}
else{
  inputId.type = "password"
}cd
  }
  return (
    <div className="login">
      <div className="login__content">
        <div className="login__details">
          <div className="login__board">
            <div className="login__board__heading">
              <h4>Login</h4>
              <span>Welcome back! Please enter your details.</span>
            </div>
            <div className="login__board__form">
              <form action="" className="form">
                <Input
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  size={"md"}
                  id="email"
                  type="email"
                  text="Email"
                />
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
              </form>
              <div className="input__icon"></div>
              <div className="forgot__password">
                <span>Forgot password</span>
              </div>
            </div>
            <div className="login__board__privacy-policy">
              <div className="checkbox">
                <Input  onClick={()=>checkboxItem()} size={"sm"} type={"checkbox"} />
              </div>
              <div className="privacy-policy__text">
                <p>I accept (name) and Terms of Services</p>
                <span>Privacy Policy</span>
              </div>
            </div>
            <div className="login__board__button--size">
              <Button size={"lg"} color={"primary"}
              >
                {'Login'}

              </Button>
            </div>
          </div>
        </div>
        <div className="login__exam-tests"></div>
      </div>
    </div>
  );
}

export default Login;
