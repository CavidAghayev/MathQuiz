import styles from "../../companents/ExamQuestions/ExamQuestion.module.css";
import User from "../../assets/images/user (1).svg";
import { useRef } from "react";
import Timer from "../../assets/images/timer.svg";
export const ExamQuestions = () => {
  const ref = useRef();
  let minute = 59;
  let second = 60;
  let result = "";

  const timer = () => {
    if (second === 0) {
      minute--;
      second = 60;
    }
    second--;

    if (minute === 0 && second === 0) {
      second = 0;
      clearInterval(timerInterval);
    }
    if (minute < 10) {
      result = `0${minute} : 0${second}`;
    } else {
      result = `0${minute} : ${second}`;
    }
    if (second < 10) {
      result = `${minute} : 0${second}`;
    } else {
      result = `${minute} : ${second}`;
    }
  };
  const timerInterval = setInterval(() => {
    timer();
    ref.current.innerText = result;
  }, 1000);
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
          <span className={styles.timer} ref={ref}></span>
          <img src={Timer} alt="" />
        </div>
      </div>
    </div>
  );
};
