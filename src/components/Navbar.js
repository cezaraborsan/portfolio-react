import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";
import "../Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="navbar-container">
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
            duration={100}
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
            duration={100}
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
            duration={100}
          >
            Contact
          </Link>
        </div>
        <div
          className="hamburger-icon"
          onClick={isMenuOpen ? closeMenu : openMenu}
        >
          {!isMenuOpen ? (
            <FontAwesomeIcon icon={faBars} />
          ) : (
            <FontAwesomeIcon icon={faXmark} />
          )}
        </div>
      </nav>

      {isMenuOpen && (
        <>
          <div className="menu">
            <FontAwesomeIcon
              icon={faXmark}
              className="close-icon"
              onClick={closeMenu}
            />
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
              duration={100}
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
              duration={100}
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
              duration={100}
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
