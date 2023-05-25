import styles from "../../companents/ExamQuestions/ExamQuestion.module.css";
import User from "../../assets/images/user (1).svg";
import timerImage from "../../assets/images/timer.svg";
import Timer from "../../companents/Timer/Timer";
import Button from "../Button/Button";
import { useRef, useState } from "react";
export const ExamQuestions = () => {
  const [lineSize, setLineSize] = useState(20);
  const [page, setPage] = useState(1);
  const ref = useRef();
  const clickHandle = () => {
    if (lineSize < 100) setLineSize(lineSize + 20);
    if (page < 5) setPage(page + 1);
  };
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
      <div className={styles["page-number"]}>{`${page} / ${5}`}</div>
      <div className={styles["pages-line"]}>
        <div className={styles.line} style={{ width: lineSize + "%" }}></div>
      </div>
      <div className={styles["start-btn"]}>
        -
        <Button size={"lg"} color={"primary"} onClick={() => clickHandle()}>
          {"Növbəti səhifə"}
        </Button>
      </div>
    </div>
  );
};
