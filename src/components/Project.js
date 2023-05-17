import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const Project = ({
  photo,
  title,
  description,
  technologies,
  shortDescription,
  projectImage,
  demoLink,
  codeLink,
  isActive,
}) => {
  // State to toggle showing project details
  const [showDetails, setShowDetails] = useState(false);

  // Function to toggle project details visibility
  const toggleDetails = (e) => {
    e.preventDefault();
    setShowDetails(!showDetails);
  };

  return (
    <div className="project">
      <div className="card">
        <div className="visible-card">
          <img src={photo} alt={title} className="card-image" />
          <div className="card-content">
            {/* Display project title, technologies, and short description */}
            <h3 className="card-title">{title}</h3>
            <p className="project_technologies">{technologies}</p>
            <p className="short-description">{shortDescription}</p>
            <div>
              {/* Button to toggle showing project details */}
              <button
                className={`primary_btn ${showDetails ? "display" : ""}`}
                onClick={toggleDetails}
              >
                Read More
              </button>
              {/* Button to view project code on GitHub */}
              <a
                className={`secondary_btn ${showDetails ? "display" : ""}`}
                href={codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} className="github-icon" />
                Github
              </a>
            </div>
          </div>
        </div>
        {/* Display project details when showDetails is true */}
        {showDetails && (
          <div className="project_details">
            {/* Render project description */}
            <p
              className="project_description"
              dangerouslySetInnerHTML={{ __html: description }}
            ></p>
            {/* Render project image if available */}
            {projectImage && (
              <img src={projectImage} alt={title} className="project-image" />
            )}
            <div className="project_btns">
              <div>
                {/* Render demo button and GitHub button based on project status */}
                {isActive ? (
                  <>
                    <a
                      className="primary_btn"
                      href={demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View Demo
                    </a>
                    <a
                      className="secondary_btn"
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="github-icon"
                      />
                      Github
                    </a>
                  </>
                ) : (
                  <>
                    <span className="primary_btn inactive">View Demo</span>
                    <a
                      className="secondary_btn"
                      href={codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon
                        icon={faGithub}
                        className="github-icon"
                      />
                      Github
                    </a>
                  </>
                )}
              </div>
              <div>
                {/* Button to close project details */}
                <button
                  className={`close-details-btn ${
                    showDetails ? "" : "display"
                  }`}
                  onClick={toggleDetails}
                >
                  {showDetails && (
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="close-detail-icon"
                    />
                  )}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Project;
