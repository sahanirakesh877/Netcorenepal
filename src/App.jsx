import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
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
          <Route path="/" element={<Home title="Home | Netcore Nepal" />} />
          <Route path="/service" element={<Service  title="Services | Netcore Nepal"/>} />
          <Route path="/service/:title" element={<ServiceDetails />} />
          <Route path="/about" element={<About title="About | Netcore Nepal"/>} />
          <Route path="/contact" element={<Contact title="Contact | Netcore Nepal"/>} />
          <Route path="/career" element={<Career title="Career | Netcore Nepal" />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
