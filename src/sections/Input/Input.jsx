import styles from "../Input/Input.module.css";
const Input = ({
  size,
  id,
  type,
  text,
  date,
  onChange,
  value = "",
  border,
  color,
  cursor,
  background,
  center,
  placeholder,
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
      <input
        value={value}
        onChange={onChange}
        className={`${styles.input} ${styles[`input--${size}`]} ${
          styles[`input--${border}`]
        } ${styles[`input--${background}`]} ${styles[`input--${center}`]} ${
          styles[`input--${color}`]
        } ${styles[`input--${cursor}`]}`}
        type={type}
        id={id}
        date={date}
        placeholder={placeholder}
      />
    </>
  );
};

export default Input;
