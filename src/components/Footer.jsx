import React, { useState } from "react";
import { Link } from "react-router-dom";
import emailjs from "@emailjs/browser";


const Footer = () => {
  const [formData, setFormData] = useState({ email: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_4gxykwa",
        "template_cx5hpe4",
        formData,
        "3kADefuEOzKY9Q73g"
      )
      .then(
        () => {
          alert('Your subscription request has been sent. Thank you!');

          setMessage("Your subscription request has been sent. Thank you!");
          setFormData({ email: "" });
        },
        () => {
          alert('An error occurred. Please try again.');

          setMessage("An error occurred. Please try again.");
        }
      )
      .finally(() => setLoading(false));
  };
  return (
    <>
    <footer id="footer" className="footer">
  <div className="footer-newsletter">
    <div className="container">
      <div className="row justify-content-center text-center">
        <div className="col-lg-6">
          <h4>Join Our Newsletter</h4>
          <p>
            Join our newsletter to get the latest updates, exclusive offers,
            and insider information directly to your inbox. Dont miss out
            on exciting news and events!
          </p>



          <form onSubmit={handleSubmit} className="php-email-form">
      <div className="newsletter-form">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Enter your email"
        />
        <input type="submit" value="Subscribe" />
      </div>
      {loading && <div className="loading">Loading...</div>}
      {message && (
        <div className={message.includes("error") ? "error-message" : "sent-message"}>
          {message}
        </div>
      )}
    </form>



        </div>
      </div>
    </div>
  </div>
  <div className="container footer-top">
    <div className="row gy-4">
      <div className="col-lg-4 col-md-6 footer-about">
        <a href="index.html" className="d-flex align-items-center">
          <img src="./img/netbg.png" alt style={{width: 150, height: 'auto'}} />
        </a>
        <div className="footer-contact pt-1">
          <p className="mt-3">
            <strong>Phone:</strong> <span> +977 9815808426</span>
          </p>
          <p><strong>Email:</strong> <span>netcorenepal.com.np</span></p>
        </div>
      </div>
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Useful Links</h4>
        <ul>
          <li><i className="bi bi-chevron-right" /> <Link to="/">Home</Link></li>
          <li>
            <i className="bi bi-chevron-right" /> <Link to="/about">About us</Link>
          </li>
          <li>
            <i className="bi bi-chevron-right" /> <Link to="/service">Services</Link>
          </li>
          <li>
            <i className="bi bi-chevron-right" />
            <a href="#">Terms of service</a>
          </li>
        </ul>
      </div>
      <div className="col-lg-2 col-md-3 footer-links">
        <h4>Our Services</h4>
        <ul>
          <li>
            <i className="bi bi-chevron-right" /> <Link to="/service">Web Development </Link>
          </li>
          <li>
            <i className="bi bi-chevron-right" /> <Link to="/service">App Development </Link>
          </li>
          <li>
            <i className="bi bi-chevron-right" />
            <Link to="/service">AI & Automation</Link>
          </li>
          <li>
            <i className="bi bi-chevron-right" />
            <Link to="/service">Blockchain Dev</Link>
          </li>
          <li>
            <i className="bi bi-chevron-right" /> <Link to="/service">Digital Marketing</Link>
          </li>
        </ul>
      </div>
      <div className="col-lg-4 col-md-12">
        <h4>Follow Us</h4>
        <p>
          Stay connected with us through our social media channels for the
          latest updates, news, and special offers. Join our community and
          be part of the conversation!
        </p>
        <div className="social-links d-flex">
          <a to='https://x.com/Netcorenepal' target="blank"><i className="bi bi-twitter-x" /></a>
          <a href><i className="bi bi-facebook" target="blank"/></a>
          <a href="https://wa.me/9815808426" target="_blank" rel="noopener noreferrer">
<i className="bi bi-whatsapp" target="blank"/></a>

          <a href='https://www.instagram.com/netcorenepal/' target="blank"><i className="bi bi-instagram" /></a>
          <a href='https://www.linkedin.com/in/netcore-nepal-b3a487358/' target="blank"><i className="bi bi-linkedin" target="blank"/></a>
        </div>
      </div>
    </div>
  </div>
</footer>

    </>
  );
};

export default Footer;
