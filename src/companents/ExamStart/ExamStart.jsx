import styles from "../../companents/ExamStart/ExamStart.module.css";
import Input from "../../sections/Input/Input";
import { useState } from "react";
export const ExamStart = ({}) => {
  const [formData, setFormData] = useState({});
  console.log(formData);
  return (
    <div className={styles["exam-start"]}>
      <div className={styles.heading}>
        <span>
          <b>İmtahan /</b> 9-cu sinif buraxılış
        </span>
      </div>
      <form className={styles.form}>
        <div className={styles["student-name"]}>
          <Input
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            type="text"
            id="name"
            size={"lg"}
            text={"Tələbə adı"}
          />
        </div>
        <div className={styles["exam-time"]}>
          <Input
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            type="text"
            id="time"
            size={"lg"}
            text={"İmtahan vaxtı"}
          />
        </div>
        <div className={styles["question-count"]}>
          <Input
            value={formData.count}
            onChange={(e) =>
              setFormData({ ...formData, count: e.target.value })
            }
            type="number"
            id="count"
            size={"lg"}
            text={"Sualların sayı"}
          />
        </div>
      </form>
    </div>
  );
};
