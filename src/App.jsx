import './App.css'
import {Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from './pages/Home';
import Register from './pages/Register';
import Signin from './pages/Signin';
import About from './pages/About';
import AppNavbar from './components/AppNavbar';
import Footer from './components/Footer';
import Plants from './pages/Plants';
import GardeningKit from './pages/GardeningKit';
import PlantDetails from './components/PlantDetails';
import Cart from './pages/Cart';
import Profile from './pages/Profile';
import Favourite from './pages/Favourite';
import WhatsappButton from './components/WhatsappButton';
import TopButton from './components/TopButton';

function App() {

  return (
    <>
    <AppNavbar/>
    <TopButton/>
    <WhatsappButton/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="about" element={<About/>}/>
        <Route path="plants" element={<Plants/>}/>
        <Route path="plants/:category?" element={<Plants />} />
        <Route path="/plant/:id" element={<PlantDetails/>} />
        <Route path="gardeningkit" element={<GardeningKit/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/contact" element={<Contact />} />
        <Route path="/favourites" element={<Favourite/>}/>
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    <Footer/>
    </>
  )
}

export default App
