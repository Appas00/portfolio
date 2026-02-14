import React, { useState, useRef, useEffect } from "react";
import "../styles/Certificates.css";

// Import icons
import { 
  FaCertificate, 
  FaStar, 
  FaTrophy, 
  FaMedal,
  FaAward,
  FaCalendarAlt,
  FaBuilding,
  FaPython,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaFlask,
  FaCode,
  FaBolt,
  FaEye,
  FaCrown,
  FaRocket,
  FaShieldAlt,
  FaLayerGroup,
  FaMicrochip,
  FaServer,
  FaCloud,
  FaMobile,
  FaBootstrap,
  FaArrowLeft,
  FaArrowRight
} from "react-icons/fa";

import { 
  SiNextdotjs, 
  SiMysql, 
  SiReactquery,
  SiTailwindcss,
  SiTypescript
} from "react-icons/si";

const Certificates = () => {
  const [activeTab, setActiveTab] = useState("certificates");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardWidth, setCardWidth] = useState(400);
  const sliderRef = useRef(null);

  // Certificate data
  const certificates = [
    {
      id: 1,
      title: "Full Stack Development",
      issuer: "CareerSchool",
      date: "2025",
      icon: <FaCrown />,
      file: "/src/certificates/CareerSchool_Full Stack Development.pdf",
      color: "#3b82f6",
      level: "Professional",
      skills: ["React", "Node.js", "Mysql", "Flask"]
    },
    {
      id: 2,
      title: "Python Star of the Batch",
      issuer: "CareerSchool",
      date: "Sept 2025",
      icon: <FaStar />,
      file: "/src/certificates/PythonStarBatch.pdf",
      color: "#ffde57",
      level: "Excellence",
      skills: ["Python", "OOP", "Algorithms"]
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      issuer: "Novitech",
      date: "Nov 2024",
      icon: <FaMicrochip />,
      file: "/src/certificates/AI  Certificate.pdf",
      color: "#b829e0",
      level: "Advanced",
      skills: ["Machine Learning", "Neural Networks", "Python"]
    },
    {
      id: 4,
      title: "Problem Solving",
      issuer: "HackerRank",
      icon: <FaCode />,
      file: "/src/certificates/problem_solving_intermediate certificate.pdf",
      color: "#00d68f",
      level: "Intermediate",
      skills: ["Algorithms", "Data Structures", "Optimization"]
    },
    {
      id: 5,
      title: "SQL",
      issuer: "HackerRank",
      icon: <FaDatabase />,
      file: "/src/certificates/sql_intermediate certificate-1.pdf",
      color: "#47a248",
      level: "Intermediate",
      skills: ["MySQL", "Queries", "Joins", "Indexing"]
    },
    {
      id: 6,
      title: "Python Development",
      issuer: "Novitech",
      date: "2024",
      icon: <FaPython />,
      file: "/src/certificates/Python development Novitech.pdf",
      color: "#ffde57",
      level: "Professional",
      skills: ["Python", "Flask", "APIs", "Testing"]
    },
    {
      id: 7,
      title: "Python",
      issuer: "HackerRank",
      icon: <FaPython />,
      file: "/src/certificates/python.pdf",
      color: "#ffde57",
      level: "Certified",
      skills: ["Python", "Syntax", "Libraries"]
    }
  ];

  // SIMPLIFIED TECH STACK - Exactly as requested
  const techStack = [
    { name: "HTML5", icon: <FaHtml5 />, color: "#e34c26" },
    { name: "CSS3", icon: <FaCss3Alt />, color: "#2965f1" },
    { name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
    { name: "Bootstrap", icon: <FaBootstrap />, color: "#7952b3" },
    { name: "React", icon: <FaReact />, color: "#61dafb" },
    { name: "Python", icon: <FaPython />, color: "#ffde57" },
    { name: "MySQL", icon: <SiMysql />, color: "#47a248" },
    { name: "Git", icon: <FaGitAlt />, color: "#f05032" },
    { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
    { name: "Node.js", icon: <FaNodeJs />, color: "#68a063" },
    { name: "Flask", icon: <FaFlask />, color: "#ffffff" },
    { name: "React Query", icon: <SiReactquery />, color: "#ff4154" },
    { name: "Next.js", icon: <SiNextdotjs />, color: "#ffffff" }
  ];

  // Duplicate tech stack for seamless ticker
  const tickerTechStack = [...techStack, ...techStack, ...techStack];

  // Handle view certificate
  const handleViewCertificate = (cert) => {
    window.open(cert.file, '_blank');
  };

  // Certificate Navigation - FULLY FIXED
  const nextCertificate = () => {
    if (currentIndex < certificates.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCertificate = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const goToCertificate = (index) => {
    setCurrentIndex(index);
  };

  // Update card width on resize
  useEffect(() => {
    const updateCardWidth = () => {
      if (window.innerWidth <= 400) {
        setCardWidth(280);
      } else if (window.innerWidth <= 576) {
        setCardWidth(300);
      } else if (window.innerWidth <= 768) {
        setCardWidth(350);
      } else if (window.innerWidth <= 992) {
        setCardWidth(380);
      } else {
        setCardWidth(400);
      }
    };

    updateCardWidth();
    window.addEventListener('resize', updateCardWidth);
    return () => window.removeEventListener('resize', updateCardWidth);
  }, []);

  // Calculate translateX value - FIXED
  const getTranslateX = () => {
    const gap = 32; // 2rem = 32px
    return -(currentIndex * (cardWidth + gap));
  };

  return (
    <div className="certificates-page">

      {/* Header Section */}
      <div className="certificates-header">
        <h1 className="page-title">
          <span className="title-icon">🏆</span>
          Credentials & Expertise
        </h1>
        <p className="page-subtitle">
          Professional certifications and technical mastery across modern technologies
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        <button 
          className={`tab-btn ${activeTab === "certificates" ? "active" : ""}`}
          onClick={() => setActiveTab("certificates")}
        >
          <FaCertificate className="tab-icon" />
          <span>Certificates</span>
          <span className="tab-count">{certificates.length}</span>
        </button>
        <button 
          className={`tab-btn ${activeTab === "techstack" ? "active" : ""}`}
          onClick={() => setActiveTab("techstack")}
        >
          <FaMicrochip className="tab-icon" />
          <span>Tech Stack</span>
          <span className="tab-count">{techStack.length}</span>
        </button>
        <div className="tab-indicator" style={{ 
          left: activeTab === "certificates" ? "0%" : "50%" 
        }}></div>
      </div>

      {/* Certificates Section - FULLY FIXED SLIDER */}
      {activeTab === "certificates" && (
        <div className="certificates-slider-container">
          
          {/* Main Certificate Card Slider */}
          <div className="certificate-slider-wrapper" ref={sliderRef}>
            <div 
              className="certificate-slider-track"
              style={{ 
                transform: `translateX(${getTranslateX()}px)`,
                gap: '2rem'
              }}
            >
              {certificates.map((cert) => (
                <div 
                  key={cert.id} 
                  className="certificate-slide"
                  style={{ flex: `0 0 ${cardWidth}px`, width: `${cardWidth}px` }}
                >
                  <div className="cert-card">
                    
                    {/* Card Header with Icon */}
                    <div className="cert-card-header" style={{ background: `linear-gradient(135deg, ${cert.color}20, transparent)` }}>
                      <div className="cert-card-icon" style={{ color: cert.color, background: `${cert.color}15` }}>
                        {cert.icon}
                      </div>
                      <div className="cert-level" style={{ background: `${cert.color}20`, color: cert.color }}>
                        {cert.level}
                      </div>
                    </div>
                    
                    {/* Card Content */}
                    <div className="cert-card-content">
                      <h3 className="cert-card-title">{cert.title}</h3>
                      
                      <div className="cert-meta">
                        <div className="cert-issuer">
                          <FaBuilding />
                          {cert.issuer}
                        </div>
                        {cert.date && (
                          <div className="cert-date">
                            <FaCalendarAlt />
                            {cert.date}
                          </div>
                        )}
                      </div>

                      {/* Skills Pills */}
                      <div className="cert-skills">
                        {cert.skills.map((skill, idx) => (
                          <span key={idx} className="skill-pill" style={{ background: `${cert.color}10`, color: cert.color }}>
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* View Button */}
                      <button 
                        className="view-cert-btn"
                        onClick={() => handleViewCertificate(cert)}
                      >
                        <FaEye className="btn-icon" />
                        View Certificate
                        <FaRocket className="btn-icon-rocket" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls - FULLY FIXED */}
          <div className="certificate-controls">
            <button 
              className={`control-btn prev-btn ${currentIndex === 0 ? 'disabled' : ''}`}
              onClick={prevCertificate}
              disabled={currentIndex === 0}
              aria-label="Previous certificate"
            >
              <FaArrowLeft />
            </button>
            
            <div className="control-indicators">
              {certificates.map((_, index) => (
                <button
                  key={index}
                  className={`control-dot ${currentIndex === index ? 'active' : ''}`}
                  onClick={() => goToCertificate(index)}
                  aria-label={`Go to certificate ${index + 1}`}
                  style={currentIndex === index ? { background: certificates[index].color } : {}}
                />
              ))}
            </div>

            <button 
              className={`control-btn next-btn ${currentIndex === certificates.length - 1 ? 'disabled' : ''}`}
              onClick={nextCertificate}
              disabled={currentIndex === certificates.length - 1}
              aria-label="Next certificate"
            >
              <FaArrowRight />
            </button>
          </div>

          {/* Current Index Badge */}
          <div className="current-index-badge">
            <span className="current-number">{currentIndex + 1 < 10 ? `0${currentIndex + 1}` : currentIndex + 1}</span>
            <span className="total-number">/{certificates.length < 10 ? `0${certificates.length}` : certificates.length}</span>
          </div>
        </div>
      )}

      {/* TECH STACK SECTION - RIGHT TO LEFT TICKER */}
      {activeTab === "techstack" && (
        <div className="techstack-ticker-container">
          
          {/* Ticker Title */}
          <div className="ticker-header">
            <h3 className="ticker-title">
              <FaBolt className="ticker-icon" />
              Technologies I Work With
              <FaBolt className="ticker-icon" />
            </h3>
          </div>
          
          {/* Marquee Ticker - Right to Left */}
          <div className="ticker-wrapper">
            <div className="ticker-track">
              {tickerTechStack.map((tech, index) => (
                <div key={index} className="ticker-item">
                  <div className="tech-icon-ticker" style={{ color: tech.color, background: `${tech.color}15` }}>
                    {tech.icon}
                  </div>
                  <span className="tech-name-ticker">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stats - Minimal */}
          <div className="ticker-stats">
            <div className="ticker-stat">
              <span className="ticker-stat-value">{techStack.length}</span>
              <span className="ticker-stat-label">Technologies</span>
            </div>
            <div className="ticker-stat-divider"></div>
            <div className="ticker-stat">
              <span className="ticker-stat-value">13+</span>
              <span className="ticker-stat-label">Core Skills</span>
            </div>
            <div className="ticker-stat-divider"></div>
            <div className="ticker-stat">
              <span className="ticker-stat-value">∞</span>
              <span className="ticker-stat-label">Learning</span>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default Certificates;