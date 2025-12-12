import './App.css'
import {Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
