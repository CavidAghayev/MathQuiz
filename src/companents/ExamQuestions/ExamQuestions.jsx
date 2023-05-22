import styles from '../../companents/ExamQuestions/ExamQuestion.module.css'
export const ExamQuestions = () => {
  return (
    <div className={styles.questions}>
        <div className={styles.heading}>
            <span><b>İmtahan /</b> 9-cu sinif buraxılış</span>
        </div>
        <div className={styles.items}>
            <div className={styles["student-name"]}>
                
            </div>
            <div className={styles["exam-time"]}>

            </div>
        </div>
        </div>
  )
}
