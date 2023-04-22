import "./../../pages/Home/Home.css";
import { useState, useEffect } from "react";
import Exam from "../../companents/Exam/Exam";
import Button from "../../companents/Button/Button";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate = useNavigate();
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
          <div className="entered-exam__text">
            <p>
              MathQuiz vasitəsi ilə imtahana başlayarkən bir neçə <br />
              addımlardan keçirsiniz
            </p>
          </div>
          <div className="entered-exam__icons">
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
          </div>
          <div className="entered-exam__info">
            <div className="info__content">
              <div className="info__heading">
                <span>İlk öncə adınızı daxil edin</span>
              </div>
              <div className="info__button">
                <Button size={"sm"} color={"primary"}>
                  {"Step 1"}
                </Button>
              </div>
            </div>
            <div className="info__content">
              <div className="info__heading">
                <span>İmtahanın vaxtı</span>
              </div>
              <div className="info__button">
                <Button size={"sm"} color={"primary"}>
                  {"Step 2"}
                </Button>
              </div>
            </div>
            <div className="info__content">
              <div className="info__heading">
                <span>İmtahanın nəticəsi</span>
              </div>
              <div className="info__button">
                <Button size={"sm"} color={"primary"}>
                  {"Step 3"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mathQuiz-about">
        <div className="mathQuiz-about__content container">
          <div className="participate">
            <div className="participate__register">
              <h3>Sınaq imtahanında iştirak et</h3>
              <span>Əliyar Əliyev - Riyaziyyat sınaqları</span>
              <span>Daha çox sınaqlara qatılmaq üçün</span>
              <div className="participate__register__button">
                <Button
                  onClick={() => navigate("/register")}
                  size={"md"}
                  color={"secondary"}
                >
                  {"Sign up"}
                </Button>
              </div>
            </div>
            <div className="participate__image"></div>
          </div>
          <div className="why-mathQuiz">
            <div className="why-mathQuiz__image"></div>
            <div className="why-mathQuiz__info">
              <div className="why-mathQuiz__info__heading">
                <h3>Niyə MathQuiz?</h3>
              </div>
              <div className="why-mathQuiz__info__text">
                <span>Online şəkildə imtahan şansı</span>
                <span>Pulsuz imtahanlara qoşul</span>
                <span>Giriş edərək daha çox sınaq imkanı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="my-students">
        
      </div>
    </div>
  );
}

export default Home;
