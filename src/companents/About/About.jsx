import styles from "../About/About.module.css";
import { contentfulClient } from "../../libs/contentul";
import { useEffect, useState } from "react";
import { Teacher } from "../Teacher/Teacher";
export const About = () => {
  const [teachers,setTeachers] = useState([]);
  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: "teacher", order: "-sys.createdAt" })
      .then((teacher) => {
        setTeachers(teacher)
      })
      .catch((error) => console.log(error.message));
  }, []);
  console.log(teachers);
  return (
    <div className={styles.teachers}>
      {teachers?.items?.map((teacher) => {
        return (
          <Teacher
            key={teacher.sys.id}
            image={teacher.fields.image.fields.file.url}
            text={teacher.fields.text}
            name={teacher.fields.name}
            work={teacher.fields.work}
            experience={teacher.fields.experience}
            age={teacher.fields.age}
            certificate={teacher.fields.certficate.fields.file.url}
          />
        );
      })}
    </div>
  );
};
