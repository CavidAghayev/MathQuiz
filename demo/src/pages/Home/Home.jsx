import "./../../pages/Home/Home.css";
import { useState, useEffect } from "react";
import Exam from "../../companents/Exam/Exam";
function Home() {
  const [exam, setExam] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/final-exams")
      .then((response) => response.json())
      .then((exam) => {
        setExam(exam);
        console.log(exam);
      });
  }, []);
  return (
    <div className="home section">
      <div className="final-exams__content"></div>
      <div className="final-exams__cards container">
        {exam.map((detail) => (
          <Exam
            key={detail.id}
            image={detail.image}
            examtitle={detail.examtitle}
            free={detail.free}
          />
        ))}
      </div>
      <div className="entered-exam">
        <div className="entered-exam__content container">
          <div className="entered-exam__heading">
            <h3>İmtahana giriş</h3>
          </div>
          <div className="entered-exam__info">
            <p>
              MathQuiz vasitəsi ilə imtahana başlayarkən bir neçə <br />
              addımlardan keçirsiniz
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
