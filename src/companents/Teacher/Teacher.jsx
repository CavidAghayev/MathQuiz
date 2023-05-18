import styles from "../Teacher/Teacher.module.css";
export const Teacher = ({
  image,
  text,
  age,
  name,
  work,
  experience,
  certificate,
}) => {
  return (
    <div className={styles.teacher}>
      <div className={styles["teacher__content"]}>
        <div className={styles["teacher__description"]}>
          <img src={image} alt="" />
          <h3>{name}</h3>
          <span>{`İş: ${work}`}</span>
          <span>{`Yaş: ${age}`}</span>
          <span>{`İş təcrübəsi: ${experience} il`}</span>
        </div>
        <div className={styles["teacher__text"]}>
          <p>{text}</p>
        </div>
      </div>
      <div className={styles.certificates}>
        <div className={styles.title}>
          <h3>Sertificatlar</h3>
        </div>
        <div className={styles.images}>
          <img src={certificate} alt="" />
          <img src={certificate} alt="" />
          <img src={certificate} alt="" />
        </div>
      </div>
    </div>
  );
};
