import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";

const Career = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-in-out", once: true });
  }, []);

  const jobListings = [
    {
      id: 1,
      title: "Full Stack Developer",
      no: 2,
      experience: "3+ Years",
      mode: "Remote",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      no: 2,
      experience: "2+ Years",
      mode: "Hybrid",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      no: 3,
      experience: "1+ Years",
      mode: "Onsite",
    },
    {
      id: 4,
      title: "Blockchain Developer",
      no: 2,
      experience: "4+ Years",
      mode: "Remote",
    },
    {
      id: 5,
      title: "AI Engineer",
      no: 1,
      experience: "5+ Years",
      mode: "Hybrid",
    },
    {
      id: 6,
      title: " Digital Marketing Specialist",
      no: 5,
      experience: "2+ Years",
      mode: "Onsite",
    },
  ];

  return (
    <>
      {/* Page Title Area */}

      {location.pathname === "/career" && <Breadcrum currentPage="Career" />}

      {/* Job Listing Section */}
      <section className="job-listing  text-white">
        <div className="container section-title" data-aos="fade-up">
          <h2> Current Openings</h2>

          <div className="row ">
            {jobListings.map((job) => (
              <div className="col-md-4 mb-4 " key={job.id} data-aos="fade-up">
                <div className="card h-100 bg-black text-white shadow-lg border-red">
                  <div className="card-body ">
                    <h5
                      className="card-title bg-light rounded-pill p-2 "
                      style={{ color: "red" }}
                    >
                      {job.title}
                    </h5>
                    <p className="mb-1 text-start">
                      <strong>Experience:</strong> {job.experience}
                    </p>
                    <p className="mb-1 text-start">
                      <strong>Mode:</strong> {job.mode}
                    </p>
                    <p className="mb-1 text-start">
                      <strong>Positions:</strong> {job.no}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mail Your CV Section */}
      <section
        className="mail-cv  text-center m-md-0 pt-0 pb-5 bg-red text-white"
        data-aos="fade-up"
      >
        <h2>Drop Your CV</h2>
        <p className="text-dark">
          Send your CV to us via email for consideration.
        </p>
        <button className="btn service-btn">
          {" "}
          Drop Your CV here &nbsp;
          <i
            className="bi bi-upload"
            style={{ fontSize: "20px", color: "#fff" }}
          ></i>
        </button>{" "}
      </section>

      {/* Benefits Section */}
      <section className="benefits py-4  bg-dark ">
        <div className="container">
          <h2
            className="text-center text-red fw-bold mb-5 text-light"
            data-aos="fade-up"
          >
            Why Join Us?
          </h2>
          <div className="row">
            <div
              className="col-md-4 text-center mb-2 border p-4 rounded"
              data-aos="fade-right"
            >
              <i
                className="fas fa-users fa-3x  mb-3"
                style={{ color: "red" }}
              ></i>
              <h5 className="text-light ">Collaborative Environment</h5>
              <p className="text-secondary">
                Work with a supportive team that values innovation.
              </p>
            </div>
            <div className="col-md-4 text-center mb-2 p-4" data-aos="fade-up">
              <i
                className="fas fa-chart-line fa-3x  mb-3"
                style={{ color: "red" }}
              ></i>
              <h5 className="text-light">Career Growth</h5>
              <p className="text-secondary">
                Advance your career with endless opportunities.
              </p>
            </div>
            <div
              className="col-md-4 text-center mb-2 border p-4 rounded"
              data-aos="fade-left"
            >
              <i
                className="fas fa-balance-scale fa-3x  mb-3"
                style={{ color: "red" }}
              ></i>
              <h5 className="text-light">Work-Life Balance</h5>
              <p className="text-secondary">
                Enjoy flexible working hours and remote options.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Career;
