import React from "react";
import { Link } from "react-scroll";

function Hero() {
  return (
    <>
      {/* Hero section */}
      <section className="hero-section">
        <div className="title-container">
          <h1 className="hero-title">
            Hi there! <br />
            I'm Cezara Borsan
          </h1>
        </div>

        {/* Hero subtitle */}
        <h2 className="hero-subtitle">Aspiring Front-End Developer</h2>

        {/* Hero text */}
        <p className="hero-text">
          Aspiring web developer with a strong passion for creating innovative
          and functional web applications. Dedicated to expanding skills and
          knowledge in HTML, CSS, and JavaScript. Ready to create exceptional
          user experiences.
        </p>
      </section>
    </>
  );
}

export default Hero;
