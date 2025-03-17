
import React from "react";
import { Link } from "react-router-dom";
const AboutComp = () => {
  return (
    <>
       <section id="about" className="about section">
              {/* Section Title */}
              <div className="container section-title" data-aos="fade-up">
                <h2>About Us</h2>
              </div>
      
              <div className="container">
                <div className="row gy-4">
                  <div
                    className="col-lg-6 content"
                    data-aos="fade-up"
                    data-aos-delay={100}
                  >
                    <p>
                      At Netcore Nepal, we specialize in software, mobile apps, web
                      development, and graphic design, delivering innovative and
                      scalable solutions for businesses.
                    </p>
                    <p>
                      Our mission is to deliver high-quality, scalable, and
                      user-friendly solutions that drive growth, enhance engagement,
                      and optimize business operations. Whether youre a startup
                      looking for a strong online presence or an established company
                      aiming for digital transformation, we are here to make it
                      happen.
                    </p>
                    <ul>
                      <li>
                        <i className="bi bi-check2-circle" />
                        <span>
                          Custom Software Development – Scalable & secure solutions
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        <span>
                          Mobile App Development – Feature-rich iOS & Android apps
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        <span>Web Development – Responsive & dynamic websites</span>
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        <span>
                          Graphic & UI/UX Design – Engaging visuals & user-friendly
                          designs
                        </span>
                      </li>
                      <li>
                        <i className="bi bi-check2-circle" />
                        <span>
                          Cloud & DevOps Services – Scalable cloud infrastructure
                        </span>
                      </li>
                    </ul>
                    <Link to="/about" className="read-more">
                      <span>Read More</span>
                      <i className="bi bi-arrow-right" />
                    </Link>
                  </div>
                  <div
                    className="col-lg-6 order-1 order-lg-2 hero-img"
                    data-aos="zoom-out"
                    data-aos-delay={200}
                  >
                    <img
                      src="/assets/img/illustration/illustration-10.webp"
                      className="img-fluid animated"
                      alt="About Us"
                    />
                  </div>
                </div>
              </div>
            </section>
    </>
  )
}

export default AboutComp
