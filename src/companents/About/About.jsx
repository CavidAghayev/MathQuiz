import styles from "../About/About.module.css";
import { contentfulClient } from "../../libs/contentul";
import { useSelector, useDispatch } from "react-redux";
import { setTeachers } from "../../Store/TeachersSlice";
import { useEffect } from "react";
import { Teacher } from "../Teacher/Teacher";
export const About = () => {
  const teachers = useSelector((state) => state.teachers.teachers);
  const dispatch = useDispatch();
  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: "teacher", order: "-sys.createdAt" })
      .then((teacher) => {
        dispatch(setTeachers(teacher));
      })
      .catch((error) => console.log(error.message));
  }, []);
  console.log(teachers);
  return (
    <div className={styles.about}>
      <div className={styles.teachers}>
        {teachers?.items?.map((teacher) => {
          return (
            <Teacher
              key={teacher.sys.id}  
              image={teacher.fields.image.fields.file.url}
              text={teacher.fields.text}
              name={teacher.fields.name}
              work={teacher.fields.work}
              experience={teacher.fields.workExperience}
              age={teacher.fields.age}
              certificate={teacher.fields.certficate.fields.file.url}
            />
          );
        })}
      </div>
    </div>
  );
};
