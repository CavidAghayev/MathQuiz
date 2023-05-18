import styles from "../Button/Button.module.css";
const Button = ({ children, size, color, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`${styles.button} ${styles[`button--${size}`]} ${
        styles[`button--${color}`]
      }`}
    >
      {children}
    </button>
  );
};

export default Button;
