import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import useIntersectionObserver from "./hooks/useIntersectionObserver";
import { animateScroll as scroll } from "react-scroll";

function Contact() {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.2,
  });

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <section ref={targetRef} className="contact-section translate-section">
      <h2>Contact</h2>
      <div className="contact-content">
        <div className="contact-info">
          <p className="contact-text">
            Thanks for sticking around! If you have a job opportunity,
            constructive feedback, or any advice related to my portfolio and
            projects, I would be happy to hear from you. Please feel free to
            reach out via email or LinkedIn at any time.
          </p>
        </div>
        <div className="contact-links">
          {/* Email link */}
          <a href="mailto:borsancezara@gmail.com" className="contact-link">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="contact-icon"
              size="2x"
            />
          </a>

          {/* LinkedIn link */}
          <a
            href="https://www.linkedin.com/in/cezara-borsan-691771193/"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="contact-icon"
              size="2x"
            />
          </a>

          {/* GitHub link */}
          <a
            href="https://github.com/cezaraborsan"
            className="contact-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              className="contact-icon"
              size="2x"
            />
          </a>
        </div>
      </div>
      <div className="scroll-to-top-btn-container">
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faArrowUp} className="scroll-to-top-icon" />
        </button>
      </div>
    </section>
  );
}

export default Contact;
