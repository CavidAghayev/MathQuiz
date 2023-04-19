import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home';
import Header from './sections/Header/Header';
function App() {
  return (
    <>
<Router>
  <Header/>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/login' element={<Login />} />
  </Routes>
</Router>
    </>
  );
}

export default App;
