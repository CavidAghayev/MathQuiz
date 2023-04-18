import './../../assets/css/Button.css'
const Button = ({children,size,color}) => {
    return (
        <button className={`button button--${size} button--${color}`}>{children}</button>
      )

}

export default Button