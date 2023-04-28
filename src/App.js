import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Header from "./sections/Header/Header";
import Register from "./pages/Register/Register";
import StudentsDetails from "./pages/StudentsDetails/StudentsDetails";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/studentDetails/:id" element={<StudentsDetails />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
