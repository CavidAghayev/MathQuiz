import styles from "../PanelList/PanelList.module.css";
import Dashboard from "../../assets/images/element-2.svg";
import Teacher from "../../assets/images/teacher.svg";
import VideoPlay from "../../assets/images/video-play.svg";
import ScoreBoard from "../../assets/images/chart.svg";
import About from "../../assets/images/stickynote.svg";
import { DarkMode } from "../../companents/DarkMode/DarkMode";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
export const PanelList = () => {
  const navigate = useNavigate();
  const darkmode = useSelector((state) => state.darkMode.darkMode);
    // document.querySelectorAll("#list-parent li").forEach((list) => {
    //   list.classList.add(styles["darkList"])
    // })
  return (
    <div className={!darkmode ? styles["panel-list"] : styles["dark"]}>
      <div
        onClick={() => navigate("/")}
        className={styles["panel-list__title"]}
      >
        <h3>MathQuiz</h3>
      </div>
      <ul id="list-parent">
        <li>
          <img src={Dashboard} alt="" />
          <span>Dashboard</span>
        </li>
        <li>
          <div className={styles.box}>
            <img src={Teacher} alt="" />
            <span>Imtahanlar</span>
          </div>
        </li>
        <li>
          <img src={VideoPlay} alt="" />
          <span>Onlayn Videolar</span>
        </li>
        <li>
          <img src={ScoreBoard} alt="" />
          <span>ScoreBoard</span>
        </li>
        <li>
          <img src={About} alt="" />
          <span>Haqqımızda</span>
        </li>
        <li>{<DarkMode />}</li>
      </ul>
    </div>
  );
};
