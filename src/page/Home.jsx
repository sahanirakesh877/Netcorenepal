import React from "react";
import Banner from "../components/Banner";
import Service from "./Service";
import WorkProgress from "../components/WorkProgress";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import TechnlogyUsed from "../components/TechnlogyUsed";
import CallAction from "./../components/CallAction";
import About from "./About";
import Contact from "./Contact";
import WhyChoose from "../components/WhyCoose";

const Home = () => {
  return (
    <>
      <Banner />
      <About />
      <Service />
      <WorkProgress />
      <CallAction />
      <TechnlogyUsed />
      <WhyChoose/>
      <Testimonial />
      <Faq />
      <Contact/>

     
    </>
  );
};

export default Home;
