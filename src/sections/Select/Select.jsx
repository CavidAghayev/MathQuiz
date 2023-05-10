import styles from "../Select/Select.module.css";
export const Select = ({ size,children }) => {
  return (
    <div>
      <select
        name=""
        id=""
        className={`${styles.select} ${styles[`select--${size}`]}`}
      >
        {children}
      </select>
    </div>
  );
};
