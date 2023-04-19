import './../../sections/Header/Header.css'
import { NavLink , useNavigate } from 'react-router-dom'
import Button from '../../companents/Button/Button'
function Header() {
    const navigate = useNavigate()
  return (
    <header>
        <div className="header__content container">
            <div className="header__logo">
                <span onClick={()=>navigate('/')}>MathQuiz</span>
            </div>
            <div className="header__routes">
                <NavLink to="" className="header__routes__exam">
                İmtahanlar
                </NavLink>
                <NavLink to="" className="header__routes__online-videos">
                Onlayn videolar
                </NavLink>
                <NavLink to="" className="header__routes__about">
                Haqqımızda
                </NavLink>
            </div>
            <div className="header__buttons">
                <div className="header__button__login">
                <Button
                color={"white"}
                size={"md"}
                >
                {"Log in"}
                </Button>
                </div>
                <div className="header__button__sign">
                    <Button
                    color={"primary"}
                    size={"md"}
                    >
                    {"Sign up"}
                    </Button>
                </div>
            </div>
        </div>
        </header>
  )
}

export default Header