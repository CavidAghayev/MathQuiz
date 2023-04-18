import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home';
import Header from './sections/Header';
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
