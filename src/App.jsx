import './App.css'
import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

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
import Checkout from './components/Checkout';
import OrderSuccess from './components/OrderSuccess';

function App() {
  return (
    <>
      <AppNavbar/>
      <TopButton/>
      <WhatsappButton/>

      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/about" element={<About />} />
        <Route path="/plants" element={<Plants />} />
        <Route path="/plants/:category?" element={<Plants />} />
        <Route path="/plant/:id" element={<PlantDetails />} />
        <Route path="/gardeningkit" element={<GardeningKit />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />

        {/* private routes*/}
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <Cart />
            </PrivateRoute>
          }
        />

        <Route
          path="/favourites"
          element={
            <PrivateRoute>
              <Favourite />
            </PrivateRoute>
          }
        />
        
        <Route
          path="/profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />
      </Routes>

      <Footer/>
    </>
  );
}

export default App;
