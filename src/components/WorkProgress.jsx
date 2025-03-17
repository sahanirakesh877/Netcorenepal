import React from "react";

const WorkProgress = () => {
  return (
    <>
      <section id="work-process" className="work-process section">
        {/* Section Title */}
        <div className="container section-title" data-aos="fade-up">
          <h2>Workflow for Success</h2>
          <p>
            Our structured approach ensures that every project is delivered on
            time, within budget, and to the highest standards.
          </p>
        </div>
        {/* End Section Title */}
        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-5">
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay={200}>
              <div className="steps-item">
                <div className="steps-content">
                  <div className="steps-number">01</div>
                  <h3 className="text-center">Research  &amp; Planning</h3>
                  <p className="">
                  We conduct a thorough analysis of your requirements to establish the foundation for your website
                  </p>
                  <p >
                  We make detailed plans and customized strategies to ensure a secure roadmap to success
                  </p>
                  <div className="steps-features">
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Market Research</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Data Analysis</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Strategy Development</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Steps Item */}
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay={300}>
              <div className="steps-item">
                <div className="steps-content">
                  <div className="steps-number">02</div>
                  <h3 className="text-center">Designing &amp; Development</h3>
                  <p>
                  In this phase, we craft UI/UX aligned with your vision using best technology, ensuring best user experience
                  </p>
                  <p>
                  After designing UI/UX, we implement concepts with cutting-edge programming languages and standards
                  </p>
                  <div className="steps-features">
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Wireframing</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>UI/UX Design</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Prototyping</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Steps Item */}
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay={400}>
              <div className="steps-item">
                <div className="steps-content">
                  <div className="steps-number">03</div>
                  <h3 className="text-center">Testing, QA &amp; Deployment</h3>
                  <p>
                  We ensure reliability through rigorous System Testing and QA for a seamless user experience and robust website
                  </p>
                  <p>After ensuring website quality, we launch it from prototype to fully-fledged, live for your entire audience</p>
                  <div className="steps-features">
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>System Testing</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Quality Assurance</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Live Deployment</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Steps Item */}
            </div>
            <div className="col-lg-3" data-aos="fade-up" data-aos-delay={400}>
              <div className="steps-item">
                <div className="steps-content">
                  <div className="steps-number">03</div>
                  <h3 className="text-center">Maintenance  &amp; Monitoring </h3>
                  <p>
                  After deployment, we provide ongoing monitoring and support to ensure your website runs smoothly
                  </p>
                  <p>
                  We provide training on website operations, troubleshooting, implementation, and user data access post-launch
                  </p>
                  <div className="steps-features">
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Performance Monitoring</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Security Updates</span>
                    </div>
                    <div className="feature-item">
                      <i className="bi bi-check-circle" />
                      <span>Technical Support</span>
                    </div>
                  </div>
                </div>
              </div>
              {/* End Steps Item */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WorkProgress;
