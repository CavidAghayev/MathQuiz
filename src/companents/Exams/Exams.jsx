import styles from "../Exams/Exams.module.css";
import Input from "../../sections/Input/Input";
import { useState } from "react";
import { Select } from "../../sections/Select/Select";
import Arrow from "../../assets/images/arrow-down.svg";
import Search from "../../assets/images/search-normal.svg";
import { useSelector } from "react-redux";
import Exam from "../../companents/Exam/Exam";
export const Exams = () => {
  const [formData, setFormData] = useState({});
  // console.log(formData.search);
  const finalExams = useSelector((state) => state.exams.exams);
  finalExams?.items?.filter((item) =>
    item.fields.text.toLowerCase().includes("qi")
  );
  return (
    <div className={styles.exams}>
      <div className={styles.research}>
        <form action="" className={styles.form}>
          <div className={styles["search"]}>
            <img src={Search} alt="" />
            <Input
              value={formData.search}
              onChange={(e) =>
                setFormData({ ...formData, search: e.target.value })
              }
              border={"none"}
              size={"md"}
              type="search"
              id="search"
              placeholder={"Search"}
            />
          </div>
          <div className={styles.select}>
            <div className={styles.select__type}>
              <img src={Arrow} alt="" />
              <Select size={"sm"}>
                <option value="type">Növ</option>
                <option value="nine">9-cu sinif buraxılış</option>
                <option value="ten">10-cu sinif buraxılış</option>
                <option value="eleven">11-cu sinif buraxılış</option>
              </Select>
            </div>
            <div className={styles.select__price}>
              <img src={Arrow} alt="" />
              <Select size={"sm"}>
                <option value="price">Qiymət</option>
                <option value="five">5</option>
                <option value="ten">10</option>
                <option value="fifteen">15</option>
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div className={styles["final-exams"]}>
        {finalExams?.items?.map((exam) => {
          return (
            <Exam
              key={exam.sys.id}
              exam={exam}
              image={exam.fields.image.fields.file.url}
              examtitle={exam.fields.title}
              free={exam.fields.text}
            />
          );
        })}
      </div>
    </div>
  );
};
