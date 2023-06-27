import styles from "../../companents/ExamQuestions/ExamQuestion.module.css";
import User from "../../assets/images/user (1).svg";
import timerImage from "../../assets/images/timer.svg";
import Timer from "../../companents/Timer/Timer";
import Button from "../Button/Button";
import { useState, useEffect } from "react";
import { contentfulClient } from "../../libs/contentul";
import { Question } from "../Question/Question";
export const ExamQuestions = () => {
  const [lineSize, setLineSize] = useState(20);
  const [page, setPage] = useState(1);
  const clickHandle = () => {
    if (lineSize < 100) setLineSize(lineSize + 20);
    if (page < 5) setPage(page + 1);
  };
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: "questions", order: "-sys.createdAt" })
      .then((data) => setQuestions(data));
  }, []);
  return (
    <div className={styles["questions-page"]}>
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
      <div className={styles.questions}>
        {questions?.items?.map((question) => {
          console.log(question);
          return (
            <Question
              key={question.sys.id}
              question={question.fields.question}
              answer={question.fields.answer}
              answer2={question.fields.answer2}
              answer3={question.fields.answer3}
              answer4={question.fields.answer4}
            />
          );
        })}
      </div>
      <div className={styles["start-btn"]}>
        <Button size={"lg"} color={"primary"} onClick={() => clickHandle()}>
          {"Növbəti səhifə"}
        </Button>
      </div>
    </div>
  );
};
