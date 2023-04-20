import './../../companents/Button/Button.css'
const Button = ({children,size,color,onClick}) => {
    return (
        <button className={`button button--${size} button--${color}`}>{children}</button>
      )

}

export default Button