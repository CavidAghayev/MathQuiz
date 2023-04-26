import "./../../pages/Home/Home.css";
import { useState, useEffect } from "react";
import Exam from "../../companents/Exam/Exam";
import Button from "../../companents/Button/Button";
import { useNavigate } from "react-router-dom";
import Students from "../../companents/Student/Student";
import Footer from "../../sections/Footer/Footer";
import Clock from "../../assets/images/clock.svg";
import User from "../../assets/images/user.svg";
import Crown from "../../assets/images/crown-2.svg";
import Line from "../../assets/images/Line 1.svg";
import { useDispatch, useSelector } from "react-redux";
import { setStudents } from "../../Store/StudentsSlice";
import { contentfulClient } from "../../libs/contentul";
import { setExams } from '../../Store/ExamsSLice' 

function Home() {
  const [showExam, setShowExam] = useState(3);
  const [examCount, setExamCount] = useState(0);
  const navigate = useNavigate();
  // const [exams, setExams] = useState([]);
  // const [students, setStudents] = useState([]);
  const [showStudent, setShowStudent] = useState(3);
  const [studentCount, setStudentCount] = useState(0);
  const students = useSelector((state) => state.students.students);
  const exams = useSelector((state) => state.exams.exams)
  const dispatch = useDispatch();

  // useEffect(() => {
  //   fetch("https://dummyjson.com/users")
  //     .then((response) => response.json())
  //     .then((exams) => {
  //       // setExams(exams);
  //       // setExamCount(exams.length);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);

  // useEffect(() => {
  //   fetch("https://dummyjson.com/users")
  //     .then((response) => response.json())
  //     .then((res) => {
  //       dispatch(setStudents(res.users));
  //       setStudentCount(res.users.length);
  //     })
  //     .catch((error) => {
  //       console.log(error.message);
  //     });
  // }, []);




  useEffect(()=>{
    contentfulClient.getEntries({content_type: "exam"})
    .then((data) => {
      dispatch(setExams(data))
    })
    .catch((error) => console.log(error.message))
  },[]);
  console.log(exams);


  useEffect(() => {
    contentfulClient.getEntries({ content_type: "student" })
    .then((data) => {
      dispatch(setStudents(data))
    })
    .catch((error)=> console.log(error.message))
  }, []);
  console.log(students);
  
  // function showExamFunc(e) {
  //   if (showExam <= examCount - 2) {
  //     setShowExam(showExam + 4);
  //   } else {
  //     setShowExam(3);
  //   }
  // }

  function showStudentFunc() {
    if (showStudent <= studentCount - 2) {
      setShowStudent(showStudent + 4);
    } else {
      setShowStudent(3);
    }
  }
  return (
    <div className="home section">
      <div className="final-exams__content">
        <div className="content__items container">
          <div className="content__info">
            <h3>
              9-cu sinif buraxılış riyaziyyat <br /> imtahanı
            </h3>
            <span>Pulsuz şəkildə başla</span>
            <div className="content__info__buttons">
              <div className="start__button">
                <Button size={"md"} color={"secondary"}>
                  {"Testə başla"}
                </Button>
              </div>
              <div className="more__button">
                <Button size={"md"} color={"white"}>
                  {"Daha ətraflı"}
                </Button>
              </div>
            </div>
          </div>
          <div className="content__"></div>
        </div>
      </div>
      <div className="final-exams__items container">
        <div className="final-exams__cards">
          {exams?.items?.map((exam, index) => {
            if (index <= showExam) {
              return (
                <Exam
                  key={exam.fields.id}
                  image={exam.fields.image.fields.file.url}
                  examtitle={exam.fields.title}
                  free={exam.fields.text}
                />
              );
            }
          })}
        </div>
        <div className="final-exams__button">
          <Button
            // onClick={(e) => showExamFunc(e)}
            size={"md"}
            color={"primary"}
          >
            {showExam <= examCount - 2 ? "Daha çox" : "Gizlet"}
          </Button>
        </div>
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
            <img src={User} alt="" />
            <img src={Line} alt="" />
            <img src={Clock} alt="" />
            <img src={Line} alt="" />
            <img src={Crown} alt="" />
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
        <div className="my-students__items container">
          <div className="my-students__cards">
            {students?.items?.map((student, index) => {
              if (index <= showStudent) {
              return (
                <Students
                  key={student.fields.id}
                  image={student.fields.image.fields.file.url}
                  sName={student.fields.name}
                  university={student.fields.university}
                  point={student.fields.points}
                />
              )};
            })}
          </div>
          <div className="my-students__button">
            <Button
              onClick={showStudentFunc}
              size={"md"}
              color={"primary"}
            >
              {showStudent <= studentCount - 2 ? "Daha çox" : "Gizlət"}
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
