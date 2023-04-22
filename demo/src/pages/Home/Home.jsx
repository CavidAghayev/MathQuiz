import "./../../pages/Home/Home.css";
import { useState, useEffect } from "react";
import Exam from "../../companents/Exam/Exam";
import Button from "../../companents/Button/Button";
import { useNavigate } from "react-router-dom";
import Students from "../../companents/Student/Student";
function Home() {
  const navigate = useNavigate();
  const [exams, setExams] = useState([]);
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/final-exams")
      .then((response) => response.json())
      .then((exams) => {
        setExams(exams);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((student) => {
        setStudents(student);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="home section">
      <div className="final-exams__content"></div>
      <div className="final-exams__cards container">
        {exams.map((exam) => (
          <Exam
            key={exam.id}
            image={exam.image}
            examtitle={exam.examtitle}
            free={exam.free}
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
        <div className="my-students__heading">
          <h3>Tələbələrim</h3>
        </div>
        <div className="my-students__cards container">
          {students.map((student) => (
            <Students
              key={student.id}
              image={student.image}
              sName={student.sName}
              university={student.university}
              point={student.point}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
