import React from "react";
import styles from "../ExamDetails/ExamDetails.module.css";
import Button from "../Button/Button";
import Student from "../../assets/images/Tiny students learning online lesson via laptop 1.svg";
function ExamDetails({ setPage }) {
  return (
    <div className={`${styles["exam-details"]}`}>
      <div className={styles.content}>
        <div className={styles["content__text"]}>
          <h3>9-cu sinif buraxılış</h3>
          <p>
            Natural ədədlər.Adi və onluq kəsrlər.Faiz.Tam cəbri <br />
            ifadələr.Çoxhədlinin vuruqlara ayrılması.Birməchullu <br />
            tənliklər.n dərəcəli Köklər.Rasional kəsrlər.Kəsr üstlü <br />
            qüvvətin xassələri.Üçbucaqlar.Çevrə.
          </p>
          <span>Pulsuz</span>
          <div className={styles["content__btn"]}>
            <Button
              onClick={() => {
                setPage(6);
              }}
              size={"md"}
              color={"primary"}
            >
              {"Testə başla"}
            </Button>
          </div>
        </div>
        <div className={styles["content__image"]}>
          <img src={Student} alt="" />
        </div>
      </div>
      <div className={styles.rating}>
        <h3>Reytinq</h3>
      </div>
    </div>
  );
}

export default ExamDetails;
