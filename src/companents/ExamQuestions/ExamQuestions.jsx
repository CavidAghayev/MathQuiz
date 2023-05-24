import styles from "../../companents/ExamQuestions/ExamQuestion.module.css";
import User from "../../assets/images/user (1).svg";
import timerImage from "../../assets/images/timer.svg";
import Timer from '../../companents/Timer/Timer'
export const ExamQuestions = () => {
  return (
    <div className={styles.questions}>
      <div className={styles.heading}>
        <span>
          <b>İmtahan /</b> 9-cu sinif buraxılış
        </span>
      </div>
      <div className={styles.items}>
        <div className={styles["student-name"]}>
          <span>Tələbənin adı:</span>
          <img src={User} alt="" />
        </div>
        <div className={styles["exam-time"]}>
          <span>İmtahan vaxtı:</span>
          <Timer />
          <img src={timerImage} alt="" />
        </div>
      </div>
    </div>
  );
};
