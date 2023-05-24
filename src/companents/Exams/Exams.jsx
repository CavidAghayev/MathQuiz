import styles from "../Exams/Exams.module.css";
import Input from "../../sections/Input/Input";
import { useEffect, useState } from "react";
import { Select } from "../../sections/Select/Select";
import Arrow from "../../assets/images/arrow-down.svg";
import Search from "../../assets/images/search-normal.svg";
import { useSelector } from "react-redux";
import Exam from "../../companents/Exam/Exam";

export const Exams = ({ setPage }) => {
  const [formData, setFormData] = useState({});
  const [data, setData] = useState([]);
  const [options, setOptions] = useState({});
  console.log(options);
  const finalExams = useSelector((state) => state.exams.exams);
  useEffect(() => {
    if (formData.search === "") {
      setData([...finalExams.items]);
    } else {
      setData((prev) => {
        return prev?.filter((item) => {
          return (
            item.fields.text.toLowerCase().includes(formData.search) ||
            item.fields.title.toLowerCase().includes(formData.search)
          );
        });
      });
    }
  }, [formData.search]);

  useEffect(() => {
    if (options.type === "") {
      setData([...finalExams.items]);
    } else {
      setData((prev) => {
        return prev?.filter((item) => {
          return item.fields.title.toLowerCase().includes(options.type);
        });
      });
    }
  }, [options.type]);

  useEffect(() => {
    if (options.price === "") {
      setData([...finalExams.items]);
    } else {
      setData((prev) => {
    return     prev?.filter((item) => {
        return   item.fields.text.toLowerCase().includes(options.price);
        });
      });
    }
  }, [options.price]);

  useEffect(() => {
    setData(finalExams.items);
  }, []);
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
              <Select
                size={"sm"}
                value={options.type}
                onChange={(e) =>
                  setOptions({ ...options, type: e.target.value })
                }
              >
                <option value="type">Növ</option>
                <option value="9">9-cu sinif buraxılış</option>
                <option value="10">10-cu sinif buraxılış</option>
                <option value="11">11-cu sinif buraxılış</option>
              </Select>
            </div>
            <div className={styles.select__price}>
              <img src={Arrow} alt="" />
              <Select
                size={"sm"}
                value={options.price}
                onChange={(e) =>
                  setOptions({ ...options, price: e.target.value })
                }
              >
                <option value="price">Qiymət</option>
                <option value="5">5</option>
                <option value="10">10</option>
              </Select>
            </div>
          </div>
        </form>
      </div>
      <div className={styles["final-exams"]}>
        {data.map((exam) => {
          return (
            <Exam
              setPage={setPage}
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
