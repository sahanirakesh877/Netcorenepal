// import React from "react";

// const WhyChoose = () => {
//   return (
//     <>
//     <div className="bgchoose ">

//    <div className="container my-5">
//       <div className="row align-items-center">
//         {/* Left Side - Content */}
//         <div className="col-md-6">
//           <h2 className="fw-bold">Why Choose <span className="text-primary">NETCORE Nepal?</span></h2>
//           <ul className="list-unstyled mt-3">
//             <li><strong>🚀 Expertise & Innovation:</strong> A team of experienced developers, designers, and strategists.</li>
//             <li><strong>🎯 Client-Centric Approach:</strong> Customized solutions tailored to your brand and business goals.</li>
//             <li><strong>🛠️ Latest Technologies:</strong> Cutting-edge tech stack for secure, scalable, and high-speed websites.</li>
//             <li><strong>📈 SEO & Performance Optimization:</strong> Ensuring fast load times and higher search engine rankings.</li>
//             <li><strong>🔧 Ongoing Support & Maintenance:</strong> Reliable post-launch support for smooth operations.</li>
//           </ul>
//         </div>

//         {/* Right Side - Image */}
//         <div className="col-md-6 text-center">
//           <img src="/assets/img/why-choose.jpg" alt="Why Choose Us" className="img-fluid rounded shadow-lg" />
//         </div>
//       </div>
//     </div>
//     </div>

//     </>

//   );
// };

// export default WhyChoose;
import React from "react";

const WhyChoose = () => {
  return (
    <div className="bgchoose">
      <div className="container ">
        <div className=" section-title" data-aos="fade-up">
          <h2 className="text-muted">
            Why Choose <br /> <span className="text-light">NETCORE Nepal?</span>
          </h2>
        </div>
        <div className="d-flex flex-column flex-md-row align-items-center gap-4">
        {/* Left Side - Content */}
          <div className="col-md-6 text-white">
            <ul className="list-unstyled mt-3" data-aos="fade-up">
              <li className="d-flex align-items-start mb-3">
                <span className="fs-4 me-2">🚀</span>
                <div>
                  <strong>Expertise & Innovation:</strong> A team of experienced
                  developers, designers, and strategists.
                </div>
              </li>

              <li className="d-flex align-items-start mb-3">
                <span className="fs-4 me-2">🎯</span>
                <div>
                  <strong>Client-Centric Approach:</strong> Customized solutions
                  tailored to your brand and business goals.
                </div>
              </li>

              <li className="d-flex align-items-start mb-3">
                <span className="fs-4 me-2">🛠️</span>
                <div>
                  <strong>Latest Technologies:</strong> Cutting-edge tech stack
                  for secure, scalable, and high-speed websites.
                </div>
              </li>

              <li className="d-flex align-items-start mb-3">
                <span className="fs-4 me-2">📈</span>
                <div>
                  <strong>SEO & Performance Optimization:</strong> Ensuring fast
                  load times and higher search engine rankings.
                </div>
              </li>

              <li className="d-flex align-items-start mb-3">
                <span className="fs-4 me-2">🔧</span>
                <div>
                  <strong>Ongoing Support & Maintenance:</strong> Reliable
                  post-launch support for smooth operations.
                </div>
              </li>
            </ul>
          </div>
          {/* Right Side - Image */}
          <div className="col-md-6 text-center ">
            <img
              src="/assets/img/steps/steps-1.webp"
              alt="Why Choose Us"
              className="img-fluid rounded shadow-lg"
              data-aos="fade-up"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
