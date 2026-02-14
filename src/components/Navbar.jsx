import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";

const Navbar = () => {
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

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <div className="logo">
        <div className="logo-container">
          <div className="logo-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 3L2 12l6 9M16 3l6 9-6 9M14.5 2l-5 20" stroke="currentColor" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          <div className="logo-text">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <span className="logo-text-main">Appas</span>
              <span className="terminal-cursor"></span>
            </div>
            <span className="logo-text-sub">full-stack developer</span>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          onClick={handleLinkClick}
        >
          Home
        </a>
        <a 
          href="#about" 
          className={activeSection === "about" ? "active" : ""}
          onClick={handleLinkClick}
        >
          About
        </a>
        <a 
          href="#projects" 
          className={activeSection === "projects" ? "active" : ""}
          onClick={handleLinkClick}
        >
          Projects
        </a>
        <a 
          href="#certificates" 
          className={activeSection === "certificates" ? "active" : ""}
          onClick={handleLinkClick}
        >
          Certificates
        </a>
        <a 
          href="#contact" 
          className={activeSection === "contact" ? "active" : ""}
          onClick={handleLinkClick}
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;