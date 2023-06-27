import styles from "../Question/Question.module.css";
export const Question = ({ question, answer, answer2, answer3, answer4 }) => {
  return (
    <div className={styles.question}>
      <h3>{question}</h3>
      <span>Düzgün variantı seçin</span>
      <div className={styles.answer}>
        <p>{answer}</p>
      </div>
      <div className={styles.answer}>
        <p>{answer2}</p>
      </div>
      <div className={styles.answer}>
        <p>{answer3}</p>
      </div>
      <div className={styles.answer}>
        <p>{answer4}</p>
      </div>
    </div>
  );
};
