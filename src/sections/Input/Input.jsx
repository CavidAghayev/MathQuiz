import styles from '../Input/Input.module.css'
const Input = ({
  size,
  id,
  type,
  text,
  date,
  onChange,
  value = "",
  onClick,
}) => {
  return (
    <>
      <label className={styles.label} htmlFor={id}>
        {text}
      </label>
      <input
        value={value}
        onChange={onChange}
        onClick={onClick}
        className={`${styles.input} ${styles[`input--${size}`]}`}
        type={type}
        id={id}
        date={date}
      />
    </>
  );
};

export default Input;
