import './App.css'
import {Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Register from './pages/Register';
import Signin from './pages/Signin';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
