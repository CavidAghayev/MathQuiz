import styles from "../Select/Select.module.css";
export const Select = ({ size, children , id, value, onChange }) => {
  return (
    <div>
      <select
        id={id}
        className={`${styles.select} ${styles[`select--${size}`]}`}
        onChange={onChange}
        value={value}
      >
        {children}
      </select>
    </div>
  );
};
