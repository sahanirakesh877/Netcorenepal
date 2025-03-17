import React from "react";
import {
  FaHome,
  FaAngleRight,
  FaStar,
  FaRocket,
  FaLightbulb,
} from "react-icons/fa";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Breadcrum = ({ currentPage }) => {
  return (
    <section className="breadcrumb-section position-relative">
      <div className="floating-icons">
        <FaStar className="icon star" />
        <FaRocket className="icon rocket" />
        <FaLightbulb className="icon bulb" />
      </div>

      <div className="container text-center" data-aos="fade-up">
        <nav aria-label="breadcrumb">
          <ol className="d-flex  justify-content-center list-unstyled">
            <li className="breadcrumb-item  ">
              <Link to="/" className="text-white">
                <FaHome className="me-1" /> Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white"
              aria-current="page"
            >
              <FaAngleRight className="me-1" /> {currentPage}
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default Breadcrum;
