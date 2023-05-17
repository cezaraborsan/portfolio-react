import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";
import "../Navbar.css";

const Navbar = () => {
  // State to manage the menu open/close
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to open the menu
  const openMenu = () => {
    setIsMenuOpen(true);
  };

  // Function to close the menu
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Effect hook to handle window resize and close the menu if window size is larger than 768px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
      {/* Main navbar */}
      <nav className="navbar">
        <div className="navbar-logo">cezaraborsan</div>
        <div className="navbar-links">
          <Link
            className="navbar-link"
            activeClass="active"
            to="projects-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Projects
          </Link>
          <Link
            className="navbar-link"
            activeClass="active"
            to="aboutme-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            About
          </Link>
          <Link
            className="navbar-link"
            activeClass="active"
            to="contact-section"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Contact
          </Link>
        </div>
        <div className="hamburger-icon" onClick={openMenu}>
          {/* Show the menu icon only if the menu is closed */}
          {!isMenuOpen && <FontAwesomeIcon icon={faBars} />}
        </div>
      </nav>

      {/* Menu overlay and content */}
      {isMenuOpen && (
        <>
          {/* Overlay to close the menu when clicked outside */}
          <div className="menu-overlay" onClick={closeMenu}></div>
          {/* Menu content */}
          <div className="menu">
            <FontAwesomeIcon
              icon={faXmark}
              className="close-icon"
              onClick={closeMenu}
            />
            <Link
              className="navbar-link"
              activeClass="active"
              to="projects-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Projects
            </Link>
            <Link
              className="navbar-link"
              activeClass="active"
              to="aboutme-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              className="navbar-link"
              activeClass="active"
              to="contact-section"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Navbar;
