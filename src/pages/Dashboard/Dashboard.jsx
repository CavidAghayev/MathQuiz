import { PanelList } from "../../sections/PanelList/PanelList";
import { UserProfile } from "../../sections/UserProfile/UserProfile";
import { Exams } from "../../companents/Exams/Exams";
import styles from "../Dashboard/Dashboard.module.css";
import { useState } from "react";
import { ComponentDashboard } from "../../companents/ComponentDashboard/ComponentDashboard";
import { ScoreBoard } from "../../companents/ScoreBoard/ScoreBoard";
import { About } from "../../companents/About/About";
import { OnlineVideos } from "../../companents/OnlineVideos/OnlineVideos";
export const Dashboard = () => {
  const [page, setPage] = useState(0); // 0- dashboard , 1 - exams, 2 - online video, 3 - ScoreBoard, 4 - about
  return (
    <div className={styles.dashboard}>
      <div className={styles["panel-list"]}>
      <PanelList setPage={setPage} page={page} />
      </div>
      <div className={styles["dashboard__content"]}>
        <div className={styles["user-profile"]}>
      <UserProfile />
        </div>
      <div className={styles.components}>
      {page === 0 && <ComponentDashboard />}
      {page === 1 && <Exams />}
      {page === 2 && <OnlineVideos />}
      {page === 3 && <ScoreBoard />}
      {page === 4 && <About />}
      </div>
      </div>
    </div>
  );
};
