import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Breadcrum from "../components/Breadcrum";
import emailjs from "@emailjs/browser";
import { FaClock } from "react-icons/fa";

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      admin_email: "sahaniranzeth877@gmail.com",
      email: formData.email,
      name: formData.name,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        "service_4gxykwa",
        "template_4q0cf8w",
        templateParams,
        "3kADefuEOzKY9Q73g"
      );
      alert("Contact Form sent successfully");

      // toast.success("Contact Form submitted successfully!", {
      //   position: "top-right",
      // });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send email. Try again later.");
      // toast.error("Failed to send email. Try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
     

      {/* Breadcrumb Section */}
      {location.pathname === "/contact" && <Breadcrum currentPage="Contact" />}
      <section id="contact" className="contact section">
        <div className="container section-title" data-aos="fade-up">
          <h2>Contact</h2>
          <p>
            Get in touch with us for any inquiries or assistance. Our team is
            here to help you with any questions or concerns. Reach out today and
            we will respond as soon as possible!
          </p>
        </div>

        <div className="container" data-aos="fade-up" data-aos-delay={100}>
          <div className="row gy-4">
            <div className="col-lg-5">
              <div className="info-wrap">
                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={200}
                >
                  <i className="bi bi-geo-alt flex-shrink-0" />
                  <div>
                    <h3>Address</h3>
                    <p>Kathmandu, Nepal</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={300}
                >
                  <i className="bi bi-telephone flex-shrink-0" />
                  <div>
                    <h3>Call Us</h3>
                    <p> +977 9815808426</p>
                  </div>
                </div>

                <div
                  className="info-item d-flex"
                  data-aos="fade-up"
                  data-aos-delay={400}
                >
                  <i className="bi bi-envelope flex-shrink-0" />
                  <div>
                    <h3>Email Us</h3>
                    <p>netcorenepal.com.np</p>
                  </div>
                </div>
                <div className="business-hours text-start mt-4 p-4 rounded shadow">
                  <h3 className="business-title">
                    <FaClock className="icon me-2" /> Business Hours
                  </h3>
                  <ul className="list-unstyled mt-3">
                    <li>
                      <strong>Monday - Friday:</strong> 9:00 AM - 5:00 PM
                    </li>
                    <li>
                      <strong>Sunday:</strong> 10:00 AM - 2:00 PM
                    </li>
                    <li>
                      <strong>Saturday:</strong>{" "}
                      <span className="closed">Closed</span>
                    </li>
                  </ul>
                </div>

                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus"
                  frameBorder={0}
                  style={{ border: 0, width: "100%", height: 270 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                /> */}
              </div>
            </div>

            <div className="col-lg-7">
              <form
                onSubmit={handleSubmit}
                className="php-email-form"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                <div className="row gy-4">
                  <div className="col-md-6">
                    <label htmlFor="name-field" className="pb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      id="name-field"
                      className="form-control"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-6">
                    <label htmlFor="email-field" className="pb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      id="email-field"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="subject-field" className="pb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      id="subject-field"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12">
                    <label htmlFor="message-field" className="pb-2">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      name="message"
                      rows={10}
                      id="message-field"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="col-md-12 text-center">
                    <button
                      type="submit"
                      className="btn btn-primary"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "Send Message"}
                    </button>
                  </div>
                </div>
              </form>
            </div>
            {/* End Contact Form */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
