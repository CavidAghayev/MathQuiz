import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Header from "./sections/Header/Header";
import Register from "./pages/Register/Register";
import ExamDetails from "./pages/ExamDetails/ExamDetails";
import { Exams } from "./pages/Exams/Exams";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/examDetails/:id" element={<ExamDetails />}/>
          <Route path="/exams" element={<Exams />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
