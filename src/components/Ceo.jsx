import React from "react";

const Ceo = () => {
  return (
    <div className="bg-light py-5 shadow-lg">
      <div className="container">
       
        <div className="row align-items-center">
          {/* Left Side - Content */}
          <div className="col-md-7">
          <div className="section-titl " data-aos="fade-up">
          <h2 className="text-dark">
            Message from <br /> <span className="text-danger">Our CEO</span>
          </h2>
        </div>
            <p className="text-secondary">
              Welcome to <strong className="text-danger">NETCORE Nepal</strong>,
              where innovation meets excellence. Our journey began with a vision
              to revolutionize the tech industry in Nepal, empowering businesses
              with cutting-edge technology and digital solutions. Today, we
              stand as a trusted partner for companies seeking seamless digital
              transformation.
            </p>
            <p className="text-secondary">
              At NETCORE Nepal, we believe that technology is more than just a
              tool—it’s a gateway to endless possibilities. Our team of
              dedicated professionals works relentlessly to deliver top-notch IT
              solutions, from software development to cloud computing, ensuring
              that our clients stay ahead in an ever-evolving digital world.
            </p>
            <p className="text-secondary">
              We take immense pride in fostering a culture of innovation,
              integrity, and collaboration. Our commitment to excellence drives
              us to develop solutions that are not only efficient but also
              future-proof. With every project we undertake, our goal remains
              the same: to create meaningful impacts and drive success for
              businesses of all sizes.
            </p>
            <p className="text-secondary">
              Thank you for your trust and support. We look forward to building
              a future where technology transforms challenges into
              opportunities.
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="col-md-5">
            <div className="ceo-image-wrapper" data-aos="fade-up">
              <img
                src="/assets/img/ceobg.png"
                alt="CEO"
                className="img-fluid "
              />
              <h1 className="ceo-name ">Arun Budhathoki</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ceo;
