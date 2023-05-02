// import '../../pages/Home/Home.css'
import styles from '../Home/Home.module.css'
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
import Header from "../../sections/Header/Header";

function Home() {
  const [showExam, setShowExam] = useState(3);
  const [examCount, setExamCount] = useState(0);
  const navigate = useNavigate();
  const [showStudent, setShowStudent] = useState(3);
  const [studentCount, setStudentCount] = useState(0);
  const students = useSelector((state) => state.students.students);
  const exams = useSelector((state) => state.exams.exams)
  const dispatch = useDispatch();
  
  useEffect(()=>{
    contentfulClient.getEntries({content_type: "exam", "order":"-sys.createdAt"})
    .then((data) => {
     dispatch(setExams(data))
    })
    .catch((error) => console.log(error.message))
  });
  
  useEffect(() => {
    contentfulClient.getEntries({ content_type: "student", "order":"-sys.createdAt" })
    .then((data) => {
      dispatch(setStudents(data))
    })
    .catch((error)=> console.log(error.message))
  }, []);
  
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
    <>
    <Header/>
    <div style={{marginTop: 90}}>
      <div className={styles["final-exams"]}>
        <div className={`${styles["exams__items"]} ${styles.container}`}>
          <div className={styles["exams__info"]}>
            <h3>
              9-cu sinif buraxılış riyaziyyat <br /> imtahanı
            </h3>
            <span>Pulsuz şəkildə başla</span>
            <div className={styles["info__buttons"]}> 
              <div className={styles["btn__start"]}>
                <Button size={"md"} color={"secondary"}>
                  {"Testə başla"}
                </Button>
              </div>
              <div className={styles["btn__more"]}>
                <Button size={"md"} color={"white"}>
                  {"Daha ətraflı"}
                </Button>
              </div>
            </div>
          </div>
          <div className=""></div>
        </div>
      </div>
      <div className={`${styles.exams} ${styles.container}`}>
        <div className={styles["exams__cards"]}>
          {exams?.items?.map((exam, index) => {
            if (index <= showExam) {
              return (
                <Exam
                  key={exam.sys.id}
                  exam={exam}
                  image={exam.fields.image.fields.file.url}
                  examtitle={exam.fields.title}
                  free={exam.fields.text}
                  />
                  );
                }
          })}
        </div>
        <div className={styles["exams__btn"]}>
          <Button
            // onClick={(e) => showExamFunc(e)}
            size={"md"}
            color={"primary"}
            >
            {showExam <= examCount - 2 ? "Daha çox" : "Gizlet"}
          </Button>
        </div>
      </div>
      <div className={styles["access-to-exam"]}>
        <div className={`${styles["exam__content"]} ${styles.container}`}>
          <div className={styles["exam__heading"]}>
            <h3>İmtahana giriş</h3>
          </div>
          <div className={styles["exam__text"]}>
            <p>
              MathQuiz vasitəsi ilə imtahana başlayarkən bir neçə <br />
              addımlardan keçirsiniz
            </p>
          </div>
          <div className={styles["exam__icons"]}>
            <img src={User} alt="" />
            <img src={Line} alt="" />
            <img src={Clock} alt="" />
            <img src={Line} alt="" />
            <img src={Crown} alt="" />
          </div>
          <div className={styles["exam__info"]}>
            <div className={styles["info__content"]}>
              <div className={styles["info__heading"]}>
                <span>İlk öncə adınızı daxil edin</span>
              </div>
              <div className={styles["info__btn"]}>
                <Button size={"sm"} color={"primary"}>
                  {"Step 1"}
                </Button>
              </div>
            </div>
            <div className={styles["info__content"]}>
              <div className={styles["info__heading"]}>
                <span>İmtahanın vaxtı</span>
              </div>
              <div className={styles["info__btn"]}>
                <Button size={"sm"} color={"primary"}>
                  {"Step 2"}
                </Button>
              </div>
            </div>
            <div className={styles["info__content"]}>
              <div className={styles["info__heading"]}>
                <span>İmtahanın nəticəsi</span>
              </div>
              <div className={styles["info__btn"]}>
                <Button size={"sm"} color={"primary"}>
                  {"Step 3"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["mathQuiz__about"]}>
        <div className={`${styles["about__content"]} ${styles.container}`}>
          <div className={styles.participate}>
            <div className={styles.register}>
              <h3>Sınaq imtahanında iştirak et</h3>
              <span>Əliyar Əliyev - Riyaziyyat sınaqları</span>
              <span>Daha çox sınaqlara qatılmaq üçün</span>
              <div className={styles["register__btn"]}>
                <Button
                  onClick={() => navigate("/register")}
                  size={"md"}
                  color={"secondary"}
                >
                  {"Sign up"}
                </Button>
              </div>
            </div>
            <div className={styles["content__image"]}></div>
          </div>
          <div className={styles["why__mathQuiz"]}>
            <div className={styles["content__image"]}></div>
            <div className={styles["mathQuiz__info"]}>
              <div className={styles["info__heading"]}>
                <h3>Niyə MathQuiz?</h3>
              </div>
              <div className={styles["info__text"]}>
                <span>Online şəkildə imtahan şansı</span>
                <span>Pulsuz imtahanlara qoşul</span>
                <span>Giriş edərək daha çox sınaq imkanı</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.students}>
        <div className={styles["students__heading"]}>
          <h3>Tələbələrim</h3>
        </div>
        <div className={`${styles["students__items"]} ${styles.container}`}>
          <div className={styles["students__cards"]}>
            {students?.items?.map((student, index) => {
              if (index <= showStudent) {
                return (
                <Students
                  key={student.sys.id}
                  student={student}
                  image={student.fields.image.fields.file.url}
                  sName={student.fields.name}
                  university={student.fields.university}
                  point={student.fields.points}
                  />
                  )};
                })}
          </div>
          <div className={styles["students__btn"]}>
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
              </>
  );
}

export default Home;
