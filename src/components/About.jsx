import React from "react";
import "../styles/About.css";
import resumeFile from "../resume/Appas M Resume.pdf"; // Import resume

const About = () => {
  return (
    <div className="about-container">

      {/* LEFT SIDE – ABOUT ME TEXT */}
      <div className="about-left">
        <h1>About Me</h1>
        <p>
          I’m a Full Stack Developer who builds responsive and user-friendly web applications. I love writing clean code and learning new technologies.
        </p>

        {/* DOWNLOAD RESUME BUTTON */}
        <a href={resumeFile} download className="resume-btn">
          Download CV
        </a>
      </div>

      {/* RIGHT SIDE – EMOJI BOXES */}
      <div className="about-right">

        <div className="skill-box">
          <span className="emoji">💻</span>
          <h2>Front-End Developer</h2>
          <p>
            I build modern, responsive, and user-friendly interfaces using React,
            JavaScript, and advanced CSS animations.
          </p>
        </div>

        <div className="skill-box">
          <span className="emoji">🛠️</span>
          <h2>Back-End Developer</h2>
          <p>
            I develop secure, scalable backend logic using Python, Flask, REST APIs, MySql
            and database integration.
          </p>
        </div>

        <div className="skill-box">
          <span className="emoji">⚙️</span>
          <h2>Full Stack Developer</h2>
          <p>
            I combine both front-end and back-end skills to build complete, efficient,
            and high-performance web applications.
          </p>
        </div>

      </div>
    </div>
  );
};

export default About;
