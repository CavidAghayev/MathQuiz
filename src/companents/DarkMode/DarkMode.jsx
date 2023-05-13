import styles from "../DarkMode/DarkMode.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { setDarkMode } from "../../Store/DarkModeSlice";
export const DarkMode = () => {
  const darkmode = useSelector((state) => state.darkMode.darkMode);
  const dispatch = useDispatch();
  const spinRef = useRef();
  const darkMode = e => {
    dispatch(setDarkMode(!darkmode))
    e.target.classList.toggle(styles.active)
  }
  return (
    <div onClick={(e)=>darkMode(e)} className={styles.darkmode}>
      <div ref={spinRef} className={styles.spin}></div>
    </div>
  );
};
