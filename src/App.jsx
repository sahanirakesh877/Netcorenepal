import "./App.css";
import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from "aos";
import "aos/dist/aos.css";
// import GLightbox from "glightbox";
// import "glightbox/dist/css/glightbox.css";
// import Isotope from "isotope-layout";
// import imagesLoaded from "imagesloaded";

import Home from "./page/Home";
import Service from "./page/Service";
import Contact from "./page/Contact";
import ServiceDetails from "./page/ServiceDetails";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./page/About";
import Career from "./page/Career";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          <Route path="/service/:title" element={<ServiceDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/career" element={<Career />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
