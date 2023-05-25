import "./Global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import ExamDetails from "./companents/ExamDetails/ExamDetails";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import ProvideExams from "./ProvideExams";

function App() {g
  return (
    <ProvideExams>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/examDetails" element={<ExamDetails />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </ProvideExams>
  );
}

export default App;
