import "./Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import ExamDetails from "./companents/ExamDetails/ExamDetails";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { useEffect } from "react";
import { contentfulClient } from "./libs/contentul";
import { useDispatch, useSelector } from "react-redux";
import { setExams } from "./Store/ExamsSLice";
import { setStudents } from "./Store/StudentsSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: "exam", order: "-sys.createdAt" })
      .then((data) => {
        dispatch(setExams(data));
      })
      .catch((error) => console.log(error.message));
  }, []);

  useEffect(() => {
    contentfulClient
      .getEntries({ content_type: "student", order: "-sys.createdAt" })
      .then((data) => {
        dispatch(setStudents(data));
      })
      .catch((error) => console.log(error.message));
  }, []);
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/examDetails" element={<ExamDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
