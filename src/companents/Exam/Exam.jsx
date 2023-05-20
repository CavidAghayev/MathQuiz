import styles from "../Exam/Exam.module.css";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

function Exam({ image, examtitle, exam, setPage }) {
  return (
    <div className={styles.exam}>
      <div className={styles.image}>
        <img src={image} alt="" />
      </div>
      <div className={styles.info}>
        <h3>{examtitle}</h3>
        <span>{exam.fields.text}</span>
      </div>
      <div className={styles.buttons}>
        <Button size={"sm"} color={"primary"}>
          {"Testə başla"}
        </Button>
        <Button
          onClick={() => {setPage(5)}}
          size={"sm"}
          color={"white"}
        >
          {"Daha ətraflı"}
        </Button>
      </div>
    </div>
  );
}

export default Exam;
