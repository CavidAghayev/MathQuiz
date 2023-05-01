import styles from "../DarkMode/DarkMode.module.css";
export const DarkMode = ({onClick}) => {
  return <div onClick={onClick} className={styles.darkmode}></div>;
};
