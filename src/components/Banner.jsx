import React from "react";
import { Link } from "react-router-dom";
import heroImg from "/assets/img/hero-img.png";


const Banner = () => {
 
  return (
    <>
      <section id="hero" className="hero section ">
        <div className="container">
          <div className="row gy-4">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center"
              data-aos="zoom-out"
            >
              <h1 className="text-light">
                Innovative Solutions to Elevate Your Business
              </h1>
              <p className="fs-6 text-secondary">
              Elevate your online presence with our cutting-edge web
                solutions. We craft modern, responsive websites that drive
                engagement and growth.
              </p>
              <div className="d-flex">
                <Link to="/about" className="btn-get-started">
                  Get Started
                </Link>
                <Link
                  to="/contact"
                  className="btn-watch-video d-flex align-items-center"
                >
                  <i className="bi bi-whatsapp text-dark fs-5" />
                  <span>Call Us Now</span>
                </Link>
              </div>
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-out"
              data-aos-delay={200}
            >
              <img
                src={heroImg}
                className="img-fluid animated"
                alt
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
