import React from "react";
import styles from "../PanelList/PanelList.module.css";
import Dashboard from "../../assets/images/element-2.svg";
import Teacher from "../../assets/images/teacher (1).svg";
import VideoPlay from "../../assets/images/video-play.svg";
import ScoreBoard from "../../assets/images/chart.svg";
import About from "../../assets/images/stickynote.svg";
import { DarkMode } from "../../companents/DarkMode/DarkMode";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useRef,useEffect } from "react";
export const PanelList = () => {
  const listRef = useRef();
  const navigate = useNavigate();
  const darkmode = useSelector((state) => state.darkMode.darkMode);
  return (
    <div className={!darkmode ? styles["panel__list"] : styles["dark"]}>
      <div
        onClick={() => navigate("/")}
        className={styles["panel__list__title"]}
      >
        <h3>MathQuiz</h3>
      </div>
      <ul className={darkmode ? styles["list-parent"] : " "}>
        <li ref={listRef}>
          <NavLink to={''} className={styles.nav}>
            <img src={Dashboard} alt="" />
            <span>Dashboard</span>
          </NavLink>
        </li>
        <li ref={listRef}>
          <NavLink to={''} className={styles.nav}>
            <img src={Teacher} alt="" />
            <span>Imtahanlar</span>
          </NavLink>
        </li>
        <li ref={listRef}>
          <NavLink to={''} className={styles.nav}>
            <img src={VideoPlay} alt="" />
            <span>Onlayn Videolar</span>
          </NavLink>
        </li>
        <li ref={listRef}>
          <NavLink to={''} className={styles.nav}>
            <img src={ScoreBoard} alt="" />
            <span>ScoreBoard</span>
          </NavLink>
        </li>
        <li ref={listRef}>
          <NavLink to={''} className={styles.nav}>
            <img src={About} alt="" />
            <span>Haqqımızda</span>
          </NavLink>
        </li>
        <li ref={listRef} className={styles.darkmode}>
          <DarkMode />
        </li>
      </ul>
    </div>
  );
};
