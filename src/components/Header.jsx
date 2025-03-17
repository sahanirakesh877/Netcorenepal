  

import React, { useState } from "react";
import { Link } from "react-router-dom"; 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed-top border-bottom border-dark">
      <nav className="navbar navbar-expand-lg navbar-dark bg-black">
        <div className="container">
          {/* Logo */}
          <div >
          <Link
            className="navbar-brand "
            to="/"
          >
          <img src="/assets/img/logonet.jpg" alt="logo"  className="navbar-logo" />
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
                  className="nav-link text-white hover-red"
                  to="/"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white hover-red"
                  to="/about"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white hover-red"
                  to="/service"
                  onClick={toggleMenu}
                >
                  Service
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link text-white hover-red"
                  to="/career"
                  onClick={toggleMenu}
                >
                  Career
                </Link>
              </li>
             
             
              <li className="nav-item">
                <Link
                  className="nav-link text-white hover-red"
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