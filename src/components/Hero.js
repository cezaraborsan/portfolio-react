import React from "react";

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
        <h2 className="hero-subtitle">Front-End Developer</h2>

        {/* Hero text */}
        <p className="hero-text">
          Front-End Developer with a strong passion for creating innovative and
          functional web applications. Dedicated to expanding skills and
          knowledge in HTML, CSS, and JavaScript. Ready to create exceptional
          user experiences.
        </p>
      </section>
    </>
  );
}

export default Hero;
