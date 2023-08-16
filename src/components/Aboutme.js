import React from "react";
import useIntersectionObserver from "./hooks/useIntersectionObserver";

function Aboutme() {
  const handleIntersection = (target) => {
    target.classList.add("visible");
  };

  const targetRef = useIntersectionObserver(handleIntersection, {
    threshold: 0.2,
  });

  return (
    <section ref={targetRef} className="aboutme-section translate-section">
      <div className="aboutme-info">
        <h2 className="section-title">About me</h2>
        <p className="info-text">
          Hello! I'm Cezara, a passionate Junior Front-End Developer with a
          strong background in engineering. My journey in programming came as a
          natural progression of my long-standing passion for captivating
          website interfaces and engaging applications. As I delved deeper into
          the world of technology, I realized that I could blend my technical
          skills with my creative mindset to create remarkable user experiences.
          <br />
          <br />
          As an ambitious individual, I bring a unique perspective to my work,
          leveraging my engineering expertise to deliver exceptional user
          experiences. With a solid foundation in HTML, CSS, JavaScript, SCSS,
          and a keen eye for design, I strive to craft accessible and engaging
          interfaces that captivate users.
          <br />
          <br />I have hands-on experience with popular frameworks and tools
          like Bootstrap, Tailwind CSS, Git, GitHub, Vue.js, React, and
          Typescript. Continual growth and learning are essential to me, and I
          eagerly embrace opportunities to apply my skills to real-world
          projects.
        </p>
        <a
          className="primary_btn"
          target="_blank"
          rel="noopener noreferrer"
          href="/cv-cezaraborsan-1"
        >
          Resume
        </a>
      </div>
    </section>
  );
}

export default Aboutme;
