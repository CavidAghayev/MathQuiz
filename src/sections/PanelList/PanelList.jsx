import "../PanelList/PanelList.css";
import Dashboard from "../../assets/images/element-2.svg";
import Teacher from "../../assets/images/teacher.svg";
import VideoPlay from "../../assets/images/video-play.svg";
import ScoreBoard from "../../assets/images/chart.svg";
import About from "../../assets/images/stickynote.svg";
import { DarkMode } from "../../companents/DarkMode/DarkMode";
export const PanelList = () => {
  return (
    <div className="panel-list">
      <div className="panel-list__title">
        <h3>MathQuiz</h3>
      </div>
      <ul>
        <li>
          <img src={Dashboard} alt="" />
          <span>Dashboard</span>
        </li>
        <li>
          <img src={Teacher} alt="" />
          <span>Imtahanlar</span>
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
        <li>
          <DarkMode />
        </li>
      </ul>
    </div>
  );
};
