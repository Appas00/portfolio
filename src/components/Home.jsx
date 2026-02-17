import React, { useEffect, useState } from "react";
import "../styles/Home.css";

import { 
  FaGithub, FaLinkedin, FaInstagram, FaPython, FaReact, 
  FaNodeJs, FaCode, FaBolt, FaStar, FaCrown 
} from "react-icons/fa";
import { SiFlask, SiJavascript, SiMongodb } from "react-icons/si";

// IMPORT THE IMAGE - FIX FOR GITHUB PAGES
import profileImage from "../images/my pic2.png";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("section[id]");
      const scrollY = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop;
        const sectionId = section.getAttribute("id");

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (mobileMenuOpen && !e.target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [mobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  return (
    <div className="home-container">
      {/* ========== PREMIUM NAVBAR ========== */}
      <nav className={scrolled ? "scrolled" : ""}>
        <div className="logo">
          <div className="logo-container">
            <div className="logo-icon">
              <FaCode />
            </div>
            <div className="logo-text">
              <div className="logo-text-wrapper">
                <span className="logo-text-main">Appas</span>
                <span className="terminal-cursor"></span>
              </div>
              <span className="logo-text-sub">developer</span>
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <div 
            className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            role="button"
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
            <div className="hamburger-line"></div>
          </div>
        </div>

        <div className={`nav-links ${mobileMenuOpen ? 'show' : ''}`}>
          <a 
            href="#home" 
            className={activeSection === "home" ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "#home")}
          >
            Home
          </a>
          <a 
            href="#about" 
            className={activeSection === "about" ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "#about")}
          >
            About
          </a>
          <a 
            href="#projects" 
            className={activeSection === "projects" ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "#projects")}
          >
            Projects
          </a>
          <a 
            href="#certificates" 
            className={activeSection === "certificates" ? "active" : ""}
            onClick={(e) => handleLinkClick(e, "#certificates")}
          >
            Certificates
          </a>
          <a 
            href="#contact" 
            className={`contact-btn ${activeSection === "contact" ? "active" : ""}`}
            onClick={(e) => handleLinkClick(e, "#contact")}
          >
            Contact
          </a>
        </div>
      </nav>

      {/* ========== HOME SECTION ========== */}
      <section id="home" className="home-section">
        {/* Animated Background Elements */}
        <div className="bg-gradient"></div>
        <div className="bg-dots"></div>
        <div className="bg-circle circle-1"></div>
        <div className="bg-circle circle-2"></div>
        <div className="bg-circle circle-3"></div>
        
        {/* Main Content Container */}
        <div className="home-content">
          {/* ========== LEFT SIDE - CONTENT ========== */}
          <div className="content-left">
            <div className="greeting-wrapper">
              <h1 className="title">
                Hi, I'm <span className="highlight">Appas😎</span>
              </h1>
              <div className="role-wrapper">
                <span className="role-tag">{'<'}</span>
                <h2 className="role">Full Stack Developer</h2>
                <span className="role-tag">{'/>'}</span>
              </div>
            </div>

            <p className="description">
              I craft exceptional digital experiences with modern web technologies. 
              Specialized in building scalable applications with React, Flask, 
              and cloud technologies.
            </p>

            {/* CTA Buttons */}
            <div className="cta-group">
              <a href="#contact" className="btn-primary" onClick={(e) => handleLinkClick(e, "#contact")}>
                Hire Me
                <FaBolt className="btn-icon" />
              </a>
              <a href="#projects" className="btn-secondary" onClick={(e) => handleLinkClick(e, "#projects")}>
                View Work
              </a>
            </div>

            {/* Social Icons */}
            <div className="social-section">
              <span className="social-label">CONNECT WITH ME</span>
              <div className="social-icons">
                <a href="https://github.com/Appas00" target="_blank" rel="noopener noreferrer" className="social-icon github">
                  <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/appas-m-55bb05294" target="_blank" rel="noopener noreferrer" className="social-icon linkedin">
                  <FaLinkedin />
                </a>
                <a href="https://www.instagram.com/mr_appass/" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

          {/* ========== RIGHT SIDE - IMAGE WITH FLOATING ELEMENTS ========== */}
          <div className="content-right">
            <div className="image-wrapper">
              {/* Main Image with Premium Effects */}
              <div className="image-container">
                <div className="image-glow"></div>
                <div className="image-border"></div>
                <img 
                  src={profileImage} 
                  alt="Appas M" 
                  className="profile-image"
                />
                
                {/* ===== FLOATING BADGES - ONLY 3 AS REQUESTED ===== */}
                
                {/* 1. Python Star of the Batch */}
                <div className="floating-badge python-star-badge">
                  <div className="badge-content">
                    <FaPython className="badge-icon python" />
                    <div className="badge-text">
                      <strong>Python Star</strong>
                      <span>of the Batch</span>
                    </div>
                  </div>
                </div>
                
                {/* 2. // available for work const hire = true; */}
                <div className="floating-badge code-snippet-badge">
                  <div className="badge-content code-content">
                    <span className="code-comment">// available for work</span>
                    <span className="code-line">const hire = true;</span>
                  </div>
                </div>
                
                {/* 3. Active GitHub Contributor */}
                <div className="floating-badge github-contributor-badge">
                  <div className="badge-content">
                    <FaGithub className="badge-icon github" />
                    <div className="badge-text">
                      <strong>Active</strong>
                      <span>GitHub Contributor</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">
          <span>Scroll Down</span>
          <div className="scroll-line"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
