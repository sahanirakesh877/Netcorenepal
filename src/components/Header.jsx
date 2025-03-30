// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// // import logo from "/assets/img/logonet.jpg";
// import logo from "/img/netcore.png";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <>
  
//       <div className="fixed-top shadow header">
//       <nav className="navbar navbar-expand-lg  ">
//         <div className="container">
//           {/* Logo */}
//           <div className="logo-container">
//             <Link to="/">
//               <img src={logo} alt="logo" className="navbar-logo" />
//             </Link>
//           </div>

//           {/* Mobile Toggle Button */}
//           <button
//             className="navbar-toggler"
//             type="button"
//             onClick={toggleMenu}
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon"></span>
//           </button>

//           {/* Navbar Links */}
//           <div
//             className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}
//             id="navbarResponsive"
//           >
//             <ul className="navbar-nav ms-auto">
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-dark "
//                   to="/"
//                   onClick={toggleMenu}
//                 >
//                   Home
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-dark "
//                   to="/about"
//                   onClick={toggleMenu}
//                 >
//                   About
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-dark "
//                   to="/service"
//                   onClick={toggleMenu}
//                 >
//                   Service
//                 </Link>
//               </li>
//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-dark "
//                   to="/career"
//                   onClick={toggleMenu}
//                 >
//                   Career
//                 </Link>
//               </li>

//               <li className="nav-item">
//                 <Link
//                   className="nav-link text-dark "
//                   to="/contact"
//                   onClick={toggleMenu}
//                 >
//                   Contact
//                 </Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//     </>
  
//   );
// };

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaBriefcase, FaSuitcase, FaPhone } from "react-icons/fa";
import logo from "/img/netcore.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed-top shadow header">
      <nav className="navbar navbar-expand-lg">
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
            <ul className="navbar-nav ms-auto active">
              <li className="nav-item ">
                <Link className="nav-link text-dark " to="/" onClick={toggleMenu}>
                  <FaHome className="me-2 text-danger" /> Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/about" onClick={toggleMenu}>
                  <FaInfoCircle className="me-2 text-danger" /> About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/service" onClick={toggleMenu}>
                  <FaBriefcase className="me-2 text-danger" /> Service
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/career" onClick={toggleMenu}>
                  <FaSuitcase className="me-2 text-danger" /> Career
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-dark" to="/contact" onClick={toggleMenu}>
                  <FaPhone className="me-2 text-danger" /> Contact
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
