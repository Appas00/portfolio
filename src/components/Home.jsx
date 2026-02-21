import React, { useEffect, useState, useRef } from "react";
import "../styles/Home.css";

import { 
  FaGithub, FaLinkedin, FaInstagram, FaPython, 
  FaCode, FaBolt
} from "react-icons/fa";

// IMPORT THE IMAGE
import originalImage from "../images/my pic2.png";

const Home = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [processedImage, setProcessedImage] = useState(null);
  const [blendMode, setBlendMode] = useState("screen"); // Try different modes
  
  // Refs for 3D parallax effect
  const imageWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const imageRef = useRef(null);

  // Process image to remove black background
  useEffect(() => {
    const removeBlackBackground = () => {
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.src = originalImage;
      
      img.onload = () => {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d', { willReadFrequently: true });
        
        // Set canvas dimensions to match image
        canvas.width = img.width;
        canvas.height = img.height;
        
        // Draw image on canvas
        ctx.drawImage(img, 0, 0, img.width, img.height);
        
        // Get image data
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
        const data = imageData.data;
        
        // Remove black background with multiple thresholds
        for (let i = 0; i < data.length; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];
          
          // Check if pixel is dark/black (adjust threshold as needed)
          // Lower threshold = less removal, Higher threshold = more removal
          const threshold = 60; // Try values between 30-100
          
          // If all RGB values are below threshold, make it transparent
          if (r < threshold && g < threshold && b < threshold) {
            data[i + 3] = 0; // Set alpha to 0 (completely transparent)
          }
          
          // Also remove very dark grays
          if (r < 80 && g < 80 && b < 80 && 
              Math.abs(r - g) < 20 && Math.abs(g - b) < 20) {
            data[i + 3] = 0;
          }
        }
        
        // Put the modified data back
        ctx.putImageData(imageData, 0, 0);
        
        // Convert canvas to data URL
        const processedImageUrl = canvas.toDataURL('image/png');
        setProcessedImage(processedImageUrl);
      };
    };
    
    removeBlackBackground();
  }, []);

  // Try different blend modes if canvas doesn't work
  const cycleBlendMode = () => {
    const modes = ['screen', 'lighten', 'multiply', 'normal'];
    const currentIndex = modes.indexOf(blendMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    setBlendMode(modes[nextIndex]);
    
    if (imageRef.current) {
      imageRef.current.style.mixBlendMode = modes[nextIndex];
    }
  };

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

  // 3D Parallax Effect on Mouse Move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!imageWrapperRef.current) return;
      
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Calculate mouse position relative to center
      const centerX = innerWidth / 2;
      const centerY = innerHeight / 2;
      
      // Calculate rotation values (max 8 degrees for smoother effect)
      const rotateY = ((clientX - centerX) / centerX) * 8;
      const rotateX = ((clientY - centerY) / centerY) * -8;
      
      // Apply the transform with smooth transition
      imageWrapperRef.current.style.transform = 
        `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(30px)`;
    };

    const handleMouseLeave = () => {
      if (!imageWrapperRef.current) return;
      // Reset transform when mouse leaves
      imageWrapperRef.current.style.transform = 
        'rotateX(0deg) rotateY(0deg) translateZ(30px)';
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('mousemove', handleMouseMove);
      container.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (container) {
        container.removeEventListener('mousemove', handleMouseMove);
        container.removeEventListener('mouseleave', handleMouseLeave);
      }
    };
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
      <section id="home" className="home-section" ref={containerRef}>
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
              <span className="social-label">CONNECT</span>
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

          {/* ========== RIGHT SIDE - IMAGE WITH BLACK BACKGROUND REMOVED ========== */}
          <div className="content-right">
            <div 
              className="image-wrapper" 
              ref={imageWrapperRef}
              style={{ transition: 'transform 0.1s ease-out' }}
            >
              <div className="image-container">
                {processedImage ? (
                  <img 
                    ref={imageRef}
                    src={processedImage} 
                    alt="Appas M" 
                    className="profile-image"
                    style={{ mixBlendMode: 'normal' }} // Canvas already removed background
                    onClick={cycleBlendMode} // Optional: click to cycle blend modes
                  />
                ) : (
                  <img 
                    ref={imageRef}
                    src={originalImage} 
                    alt="Appas M" 
                    className="profile-image"
                    style={{ mixBlendMode: blendMode }}
                    onClick={cycleBlendMode}
                  />
                )}
                
                {/* Floating Badges */}
                <div className="floating-badge python-star-badge">
                  <div className="badge-content">
                    <FaPython className="badge-icon python" />
                    <div className="badge-text">
                      <strong>Python Star</strong>
                      <span>of the Batch</span>
                    </div>
                  </div>
                </div>
                
                <div className="floating-badge code-snippet-badge">
                  <div className="badge-content code-content">
                    <span className="code-comment">// available for work</span>
                    <span className="code-line">const hire = true;</span>
                  </div>
                </div>
                
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
