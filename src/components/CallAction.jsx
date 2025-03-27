import React from "react";
import {Link} from 'react-router-dom'

const CallAction = () => {
  return (
    <>
      <section
        id="call-to-action"
        className="call-to-action section dark-background"
      >
        <img src="./img/bg/bg-8.webp" alt />
        <div className="container">
          <div className="row" data-aos="zoom-in" data-aos-delay={100}>
            <div className="col-xl-9 text-center text-xl-start">
              <h3>Join Us Today</h3>
              <p>
                Ready to take the next step? Become a part of our community and
                enjoy exclusive benefits. Sign up today and start your journey
                with us.
              </p>
            </div>
            <div className="col-xl-3 cta-btn-container text-center">
              <Link className="cta-btn align-middle" to="/contact">
                Call To Action
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallAction;
