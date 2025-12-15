import './App.css'
import {Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Register from './pages/Register';
import Signin from './pages/Signin';
import About from './pages/About';
import AppNavbar from './components/Appnavbar';

function App() {

  return (
    <>
    <AppNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
