import React, { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import servicesData from "../data/featureData";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaCheckCircle } from "react-icons/fa";
import Breadcrum from "./../components/Breadcrum";

const ServiceDetails = () => {
  const location = useLocation();
  const { title } = useParams();
  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  const service = servicesData.find(
    (item) => item.title.toLowerCase().replace(/\s+/g, "-") === title
  );

  if (!service) {
    return (
      <div className="text-center text-danger mt-5">Service not found!</div>
    );
  }

  return (
    <>
      {location.pathname.startsWith("/service/") && (
        <Breadcrum currentPage={service.title} />
      )}

      <div className="container ">
        <div data-aos="fade-up">
          <div className="row">
            <div className=" section-titles" data-aos="fade-up">
              <h3> {service.title}</h3>
            </div>

            {/* Right Side: Image */}
            <div className="col-md-6 ">
              <p
                className="text-muted mb-4 "
                data-aos="fade-up"
                data-aos-delay="100"
              >
                {service.description}
              </p>
              <div className="text-center mb-4">
                <img
                  src={service.img}
                  alt={service.title}
                  className="img-fluid rounded"
                  style={{
                    maxHeight: "500px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                  data-aos="fade-left"
                />
              </div>
            </div>

            {/* Left Side: Text Content */}
            <div className="col-md-6">
              <div className="row">
                {service.features.map((feature, index) => (
                  <div
                    key={index}
                    className="col-12 "
                    data-aos="fade-up"
                    data-aos-delay={index * 100}
                  >
                    <div className="mb-md-0 h-auto">
                      <h5 className="text-dark d-flex align-items-center">
                        <FaCheckCircle className="text-danger me-2" />
                        {feature.name}
                      </h5>
                      <p className="text-muted">{feature.description}</p>

                      {/* Sub-Features (If Available) */}
                      {feature.sub_features && (
                        <ul className="list-group list-group-flush mb-4">
                          {feature.sub_features.map((subFeature, subIndex) => (
                            <li
                              key={subIndex}
                              className="list-group-item d-flex align-items-center  px-4 bg-light "
                            >
                              <span className="me-3 text-success">✔</span>
                              <span className="text-dark">{subFeature}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetails;
