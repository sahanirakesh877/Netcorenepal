import React from "react";
// import Banner from "../components/Banner";
import Service from "./Service";
import WorkProgress from "../components/WorkProgress";
import Faq from "../components/Faq";
import Testimonial from "../components/Testimonial";
import TechnlogyUsed from "../components/TechnlogyUsed";
import CallAction from "./../components/CallAction";
import AboutComp from "../components/AboutComp";
import Contact from "./Contact";
import WhyChoose from "../components/WhyCoose";
import Ceo from "../components/Ceo";
import VideoBanner from './../components/VideoBanner';

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <VideoBanner/>
      <AboutComp />
     
      <Service />
      <Ceo />
      <WorkProgress />
      <CallAction />
      <TechnlogyUsed />
      <WhyChoose />
      <Testimonial />
      <Faq />
      <Contact />
    </>
  );
};

export default Home;
