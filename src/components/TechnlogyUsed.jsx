import React, { useState } from "react";
import technologies from "../data/techData";

const TechnlogyUsed = () => {
  const [selectedCategory, setSelectedCategory] = useState("web-development");

  return (
    <section id="portfolio" className="portfolio section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Technologies We Use</h2>
        <p>Explore the technologies we work with and excel in.</p>
      </div>

      {/* Category Filters */}
      <div className="container ">
        <div className="isotope-layout" data-layout="masonry">
          <ul
            className="portfolio-filters pt-2  pb-5 isotope-filters d-flex justify-content-center flex-wrap gap-2"
            data-aos="fade-up"
            data-aos-delay={100}
          >
            {[
              "web-development",
              "mobile-apps",
              "graphics design",
              "digital marketing",
              
              "other",
            ].map((category) => (
              <li
                key={category}
                className={`category-btn ${
                  selectedCategory === category ? "active" : ""
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category
                  .replace("-", " ")
                  .replace(/\b\w/g, (char) => char.toUpperCase())}
              </li>
            ))}
          </ul>

          {/* Filtered Technologies */}
          <div
            className="row gy-4 mt-5 justify-content-center"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            {technologies
              .filter((tech) => tech.category === selectedCategory)
              .map((tech, index) => (
                <div
                  key={index}
                  className="col-lg-3  col-md-4 col-sm-6 col-6 portfolio-item text-center"
                >
                  <i
                    className={tech.iconClass}
                    style={
                      tech.style
                        ? tech.style
                        : { fontSize: "2rem", color: "black" }
                    }
                  />
                  <p>{tech.name}</p>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Styles */}
    </section>
  );
};

export default TechnlogyUsed;
