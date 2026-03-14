import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import OurProducts from "./pages/OurProducts";
import { useState } from "react";
import SplashScreen from "./components/SplashScreen";
import { FaWhatsapp } from "react-icons/fa";
import WhatsappButton from "./components/WhatsappButton";
import ProductDetails from "./pages/ProductDetails";
import ScrollToTop from "./components/ScrollToTop";

AOS.init({
  duration: 2000,
  once: true,

});
function App() {
  const [showSplash, setShowSplash] = useState(true);
  return (
    <>
      {showSplash ? (
        <SplashScreen onFinish={() => setShowSplash(false)} />
      ) : (
        <HashRouter>
          <Header />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<OurProducts />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/product/:id" element={<ProductDetails />} />
          </Routes>
          <Footer />
          <WhatsappButton />
        </HashRouter>
      )}
    </>
  );
}

export default App;
