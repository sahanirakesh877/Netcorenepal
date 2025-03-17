import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import servicesData from "../data/featureData";
import Breadcrum from "./../components/Breadcrum";

const Service = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <>
      {location.pathname === "/service" && <Breadcrum currentPage="Service" />}

      <section id="services" className="services section light-background">
        <div className="container section-title" data-aos="fade-up">
          <h2>Services</h2>
          <p className="text-dark">
            We provide cutting-edge digital solutions to help businesses thrive
            in the modern world.
          </p>
        </div>

        <div className="container">
          <div className="row gy-4">
            {servicesData.map((service) => (
              <div
                key={service.id}
                className="col-xl-4 col-md-6 d-flex"
                data-aos="fade-up"
                data-aos-delay={service.delay}
              >
                <div className="service-item position-relative">
                  <div className="icon">
                    <img src={service.image} alt={service.title} />
                  </div>
                  <h4 className="text-uppercase">
                    <Link
                      to={`/service/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="stretched-link"
                    >
                      {service.title}
                    </Link>
                  </h4>
                  <p>{service.description.slice(0, 100)}</p>
                  <div className="text-center my-4">
                    <Link
                      to={`/service/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`} // Dynamic URL
                      className="btn btn-primary service-btn"
                    >
                      Get Started <i className="bi bi-arrow-right ms-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;
