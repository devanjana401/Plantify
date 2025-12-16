import './App.css'
import {Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Register from './pages/Register';
import Signin from './pages/Signin';
import About from './pages/About';
import AppNavbar from './components/Appnavbar';
import Footer from './components/Footer';
import Plants from './pages/Plants';
import GardeningKit from './pages/GardeningKit';

function App() {

  return (
    <>
    <AppNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="plants" element={<Plants/>}/>
        <Route path="gardeningkit" element={<GardeningKit/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
