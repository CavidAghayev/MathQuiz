import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Header from "./sections/Header/Header";
import Register from "./pages/Register/Register";
function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
