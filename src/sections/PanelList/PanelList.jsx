import React from "react";
import styles from "../PanelList/PanelList.module.css";
import { ReactComponent as DashBoard } from "../../assets/images/element-2.svg";
import { ReactComponent as VideoPlay } from "../../assets/images/video-play.svg";
import { ReactComponent as ScoreBoard } from "../../assets/images/chart.svg";
import { ReactComponent as About } from "../../assets/images/stickynote.svg";
import { DarkMode } from "../../companents/DarkMode/DarkMode";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ReactComponent as Teacher } from "../../assets/images/teacher (2).svg";

export const PanelList = () => {
  const navigate = useNavigate();
  const darkmode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={styles["panel-list"]}>
      <div
        onClick={() => navigate("/")}
        className={styles["panel-list__title"]}
      >
        <h3>MathQuiz</h3>
      </div>
      <ul className={styles["list-parent"]}>
        <li>
          <NavLink to={''} className={styles.nav}>
            <DashBoard fill=""/>
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={''} className={styles.nav}>
          <Teacher 
            fill=""
            />
            <span>Imtahanlar</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={''} className={styles.nav}>
            <VideoPlay fill=""/>
            <span>Onlayn Videolar</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={''} className={styles.nav}>
            <ScoreBoard fill=""/>
            <span>ScoreBoard</span>
          </NavLink>
        </li>
        <li>
          <NavLink to={''} className={styles.nav}>
            <About fill=""/>
            <span>Haqqımızda</span>
          </NavLink>
        </li>
        <li className={styles.darkmode}>
         <DarkMode />
        </li>
      </ul>
    </div>
  );
};
