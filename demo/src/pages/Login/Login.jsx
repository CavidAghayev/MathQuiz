import './../../pages/Login/Login.css'
import Input from '../../sections/Input/Input'
function Login() {
  return (
    <div className='login'>
        <div className="login__content">
          <div className="login__details">
            <div className="login__board">
              <div className="login__board__heading">
              <h4>Login</h4>
              <span>Welcome back! Please enter your details.</span>
              </div>
              <div className="login__board__form">
                <Input 
                size={'sm'}
                />
              </div>
            </div>
          </div>
          <div className="login__exam-tests"></div>
        </div>
    </div>
  )
}

export default Login