import styles from "../DarkMode/DarkMode.module.css";
import { useSelector, useDispatch } from "react-redux";
import { useRef } from "react";
import { setDarkMode } from "../../Store/DarkModeSlice";
export const DarkMode = () => {
  const darkmode = useSelector((state)=>state.darkMode.darkMode)
  const dispatch = useDispatch();
  const ref = useRef(); 
    function darkMode(e){
      e.target.classList.toggle(styles["dark-toggle"])
      ref.current.classList.toggle(styles["spin-toggle"])
      dispatch(
       setDarkMode(!darkmode)
      )
    }
    console.log(darkmode);
  return <div onClick={(e)=>darkMode(e)} className={styles.darkmode}>
    <div ref={ref} className={styles.spin}></div>
  </div>;
};
