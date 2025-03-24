import React, { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "/assets/img/logonet.jpg";
import logo from "/assets/img/netcore.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed-top shadow header">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container">
          {/* Logo */}
          <div className="logo-container">
            <Link to="/">
              <img src={logo} alt="logo" className="navbar-logo" />
            </Link>
          </div>

          {/* Mobile Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div
            className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
            id="navbarResponsive"
          >
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link
                  className="nav-link text-dark hover-red"
                  to="/"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark hover-red"
                  to="/about"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark hover-red"
                  to="/service"
                  onClick={toggleMenu}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-dark hover-red"
                  to="/career"
                  onClick={toggleMenu}
                >
                  Career
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  className="nav-link text-dark hover-red"
                  to="/contact"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
