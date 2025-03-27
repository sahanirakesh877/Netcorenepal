import React from "react";
import video from '/img/bgvideo.mp4'

const VideoBanner = () => {
  return (
    // <div className="video-banner">
    //   {/* Background Video */}
    //   <video autoPlay muted loop className="video-bg">
    //     <source src="../../public/assets/img/bgvideo.mp4" type="video/mp4" />
    //     Your browser does not support the video tag.
    //   </video>

    //   {/* Overlay for better readability */}
    //   <div className="overlay"></div>

    //   {/* Text Carousel */}

    // </div>
    <>
      <div className="video-banner">
        {/* Background Video */}
        <video autoPlay muted loop className="video-bg">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay for better readability */}
        <div className="overlay"></div>

        {/* Text Carousel */}
       

        <div
          id="carouselExampleAutoplaying"
          className="carousel slide hero-content"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
            <h1> Shaping the Future of Technology</h1>
            <p>Transforming ideas into reality with cutting-edge solutions. <br /> 
            Empowering creativity and driving innovation for a smarter world.</p>
            </div>
            <div className="carousel-item">
            <h1> Embrace the Digital Revolution</h1>
            <p>Step into a world of limitless possibilities with AI, Blockchain, and Automation. <br />
            The future is now—stay ahead with groundbreaking technology.</p>              </div>
            <div className="carousel-item">
            <h1>Unleash Your Potential</h1>
            <p>Unlock new opportunities with cutting-edge tech solutions. <br /> 
            Push boundaries, accelerate growth, and revolutionize the digital landscape.</p>              </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default VideoBanner;
