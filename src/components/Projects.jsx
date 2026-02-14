import React, { useState, useEffect } from "react";
import "../styles/Projects.css";

// Import Font Awesome Icons - ONLY VALID IMPORTS
import { 
  FaHtml5, FaCss3Alt, FaJs, FaPython, FaFlask, 
  FaDatabase, FaReact, FaNodeJs, FaGithub, FaAws,
  FaCode, FaBolt, FaMobileAlt, FaArrowRight,
  FaStar, FaFire, FaCrown, FaRocket, FaGem,
  FaShoppingCart, FaUtensils, FaCheckCircle,
  FaCar, FaFilm, FaBuilding, FaPalette, FaVideo,
  FaUsers, FaGlobe, FaServer, FaCloud, FaCogs,
  FaCube, FaMagic
} from "react-icons/fa";

// Simple Icons - ONLY VALID IMPORTS
import { 
  SiTailwindcss, SiMysql, SiReactquery, SiNextdotjs,
  SiNetlify, SiVercel, SiWix, SiRedux, SiExpress, 
  SiMongodb, SiTypescript, SiSass, SiFirebase
} from "react-icons/si";

// Import images

import americanTouristerImage from "../images/AmericanTourist.jpg";
import shoesImage from "../images/Shoes.jpg";
import carRentalImage from "../images/car rental system.jpg";
import dinnerbellImage from "../images/Dinnerbell.png";
import demonSlayerImage from "../images/Demonsslayer.png";
import crItSolutionsImage from "../images/CR IT Solutions.png";

const Projects = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [cardType, setCardType] = useState(0);
  
  // Different card types for variety
  const cardTypes = [
    "glass-card",      // Type 1: Glass Morphism
    "gradient-card",   // Type 2: Gradient Border
    "neon-card",       // Type 3: Neon Glow
    "deep-card",       // Type 4: Deep Space
    "floating-card"    // Type 5: Floating Glass
  ];
  
  const projects = [
    {
      id: 1,
      number: "01",
      title: "American Tourist – eCommerce",
      icon: <FaShoppingCart />,
      image: americanTouristerImage,
      badge: "Featured",
      badgeIcon: <FaCrown />,
      description: [
        { text: "Complete eCommerce solution using Flask, MySQL, HTML5, CSS3, JS.", icon: <FaFlask /> },
        { text: "Interactive product cards with Add to Cart session-based logic.", icon: <FaCode /> },
        { text: "Secure booking form with UPI & card payment (simulated).", icon: <FaCheckCircle /> },
        { text: "Order placement & cart data storage with MySQL backend.", icon: <FaDatabase /> },
        { text: "Responsive, clean UI for seamless shopping experience.", icon: <FaMobileAlt /> }
      ],
      tags: [
        { name: "Flask", icon: <FaFlask /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> }
      ],
      overlayTags: ["E-Commerce", "Booking", "Responsive"],
      link: "https://americantourist.netlify.app/"
    },
    {
      id: 2,
      number: "02",
      title: "STEPPERIENCE",
      icon: <FaShoppingCart />,
      image: shoesImage,
      badge: "Latest",
      badgeIcon: <FaRocket />,
      description: [
        { text: "Luxury shoe e-commerce with glassmorphism UI.", icon: <FaReact /> },
        { text: "Interactive cart with slide-out sidebar.", icon: <FaShoppingCart /> },
        { text: "Real-time quantity updates & product catalog.", icon: <FaDatabase /> },
        { text: "Custom animations: logo pulse, 3D hover effects.", icon: <FaCode /> },
        { text: "React Context API & React Router v6.", icon: <FaReact /> }
      ],
      tags: [
        { name: "React", icon: <FaReact /> },
        { name: "Context", icon: <FaCode /> },
        { name: "Router", icon: <FaNodeJs /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "Netlify", icon: <SiNetlify /> }
      ],
      overlayTags: ["E-Commerce", "Luxury", "Cart"],
      link: "https://appas00.github.io/shoes-shop/"
    },

    // ========== PROJECT 3 - CAR RENTAL ==========
    {
      id: 3,
      number: "03",
      title: "Car Rental Web App",
      icon: <FaCar />,
      image: carRentalImage,
      badge: "Modern",
      badgeIcon: <FaBolt />,
      description: [
        { text: "Developed fully responsive car rental platform using Flask, HTML5, CSS3, JavaScript, and Tailwind CSS.", icon: <FaFlask /> },
        { text: "Designed with Glassmorphism UI and 3D animated car cards for modern visual experience.", icon: <FaCube /> },
        { text: "Integrated dynamic booking form with car-specific options and smooth background video playback.", icon: <FaVideo /> },
        { text: "Used AOS (Animate on Scroll) for scroll-based animations and transitions.", icon: <FaMagic /> },
        { text: "Connected booking and contact forms to Flask routes using POST method with full mobile responsiveness.", icon: <FaMobileAlt /> }
      ],
      tags: [
        { name: "Flask", icon: <FaFlask /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> }
      ],
      overlayTags: ["Car Rental", "Glassmorphism", "3D Cards", "Video BG"],
      link: "https://car-rentalproject.netlify.app/"
    },
    // ========== PROJECT 4 - DINNER BELL ==========
    {
      id: 4,
      number: "04",
      title: "Dinner Bell Restaurant",
      icon: <FaUtensils />,
      image: dinnerbellImage,
      badge: "Popular",
      badgeIcon: <FaCrown />,
      description: [
        { text: "Modern restaurant website with Flask & MySQL backend.", icon: <FaFlask /> },
        { text: "Dynamic food menu with 3D hover effects and animations.", icon: <FaCode /> },
        { text: "Order & contact forms with real-time toast feedback.", icon: <FaCheckCircle /> },
        { text: "Cart management and database integration.", icon: <FaDatabase /> },
        { text: "Fully responsive with floating logo animation.", icon: <FaMobileAlt /> }
      ],
      tags: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> },
        { name: "Flask", icon: <FaFlask /> },
        { name: "MySQL", icon: <SiMysql /> }
      ],
      overlayTags: ["Restaurant", "E-Commerce", "Backend"],
      link: "https://dinnerbell-premiumrestaurants.netlify.app/"
    },

    // ========== PROJECT 5 - DEMON SLAYER ==========
    {
      id: 5,
      number: "05",
      title: "Demon Slayer – 3D Anime",
      icon: <FaFilm />,
      image: demonSlayerImage,
      badge: "Cinematic",
      badgeIcon: <FaStar />,
      description: [
        { text: "Created immersive anime-themed site using HTML, CSS, and Vanilla JavaScript with advanced animation logic.", icon: <FaCode /> },
        { text: "Designed dynamic character cards featuring modals with stats, breathing styles, and motion animations.", icon: <FaCube /> },
        { text: "Integrated 3D background video, particle effects, and GSAP-powered animations for cinematic visuals.", icon: <FaMagic /> },
        { text: "Implemented parallax scroll and glowing interactive UI for engaging user experience.", icon: <FaPalette /> },
        { text: "Focused on high-performance rendering, UX consistency, and fast load times for all devices.", icon: <FaMobileAlt /> }
      ],
      tags: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> },
        { name: "GSAP", icon: <FaMagic /> }, // Replaced SiGsap with FaMagic
        { name: "Parallax", icon: <FaMagic /> }
      ],
      overlayTags: ["Anime", "3D", "GSAP", "Particle Effects", "Parallax"],
      link: "https://demonsslayer.netlify.app/"
    },
    // ========== PROJECT 6 - CR GROUP OF COMPANIES ==========
    {
      id: 6,
      number: "06",
      title: "CR Group of Companies",
      icon: <FaBuilding />,
      image: crItSolutionsImage,
      badge: "Corporate",
      badgeIcon: <FaGem />,
      description: [
        { text: "Developed official corporate website using HTML, CSS, and JavaScript to showcase divisions like CR IT Solutions and CR Group of Institutions.", icon: <FaBuilding /> },
        { text: "Created responsive 'About Us' and 'Team Members' sections with advanced card layouts, hover animations, and gradient UI effects.", icon: <FaUsers /> },
        { text: "Integrated social media links dynamically with interactive executive profile cards.", icon: <FaGlobe /> },
        { text: "Applied modern UI/UX principles and content flow for enhanced brand experience.", icon: <FaPalette /> },
        { text: "Ensured cross-browser compatibility and full mobile responsiveness for all sections.", icon: <FaMobileAlt /> }
      ],
      tags: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3Alt /> },
        { name: "JS", icon: <FaJs /> },
        { name: "Wix", icon: <SiWix /> },
        { name: "Responsive", icon: <FaMobileAlt /> }
      ],
      overlayTags: ["Corporate", "Team Profiles", "Business", "Responsive"],
      link: "https://appasm321.wixsite.com/my-site-3"
    }
  ];

  const nextSlide = () => {
    if (currentSlide < projects.length - 1 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide + 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(currentSlide - 1);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  const goToSlide = (index) => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentSlide(index);
      setTimeout(() => setIsAnimating(false), 600);
    }
  };

  // Cycle through card types
  useEffect(() => {
    const interval = setInterval(() => {
      setCardType((prev) => (prev + 1) % cardTypes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, isAnimating]);

  // Split title into characters for animation
  const titleChars = "Projects".split("").map((char, index) => (
    <span key={index} className={`char char-${index + 1}`}>{char}</span>
  ));

  return (
    <div className="projects-container">

      {/* Floating Tech Icons Background */}
      <div className="floating-tech-icon"><FaReact /></div>
      <div className="floating-tech-icon"><FaPython /></div>
      <div className="floating-tech-icon"><FaJs /></div>
      <div className="floating-tech-icon"><FaDatabase /></div>
      <div className="floating-tech-icon"><FaNodeJs /></div>
      <div className="floating-tech-icon"><FaAws /></div>
      <div className="floating-tech-icon"><FaCar /></div>
      <div className="floating-tech-icon"><FaFilm /></div>
      <div className="floating-tech-icon"><FaBuilding /></div>

      {/* ========== CENTERED HEADER ========== */}
      <div className="projects-header">
        <h1 className="projects-title">
          {titleChars}
        </h1>
        <p className="projects-subtitle">
          <strong>Recent Projects</strong> — A collection of full stack web projects I developed, focused on scalable backend systems and modern front-end technologies.
        </p>
      </div>

      {/* =========️ MODERN SLIDER WITH DIFFERENT CARD TYPES ========== */}
      <div className="slider-container">
        <div className="slider-wrapper">
          <div 
            className="slider-track" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div 
                key={project.id} 
                className={`project-card ${cardTypes[index % cardTypes.length]}`}
              >
                
                {/* Corner Accents */}
                <div className="corner corner-tl"></div>
                <div className="corner corner-tr"></div>
                <div className="corner corner-bl"></div>
                <div className="corner corner-br"></div>
                
                {/* Left Side - Image */}
                <div className="project-image-container">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="project-image"
                  />
                  <div className="image-badge">
                    <span>{project.badgeIcon}</span> {project.badge}
                  </div>
                  <div className="image-overlay">
                    <div className="overlay-tags">
                      {project.overlayTags.map((tag, index) => (
                        <span key={index} className="overlay-tag">{tag}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Content */}
                <div className="project-content">
                  <span className="project-number">
                    {project.icon} {project.number}
                  </span>
                  
                  <h2 className="project-title">
                    {project.title}
                    <span className="title-underline"></span>
                  </h2>

                  <ul className="project-description">
                    {project.description.map((item, index) => (
                      <li key={index}>
                        <i>{item.icon}</i> {item.text}
                      </li>
                    ))}
                  </ul>

                  <div className="project-tech-tags">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="tech-tag"
                        style={{ '--tag-index': index }}
                      >
                        {tag.icon} {tag.name}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                  >
                    View Project
                    <i><FaArrowRight /></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ========== MODERN ARROW NAVIGATION ========== */}
        <div className="arrow-navigation">
          
          {/* Previous Button */}
          <button 
            className={`arrow-btn ${currentSlide === 0 ? 'disabled' : ''}`}
            onClick={prevSlide}
            disabled={currentSlide === 0}
            aria-label="Previous project"
          >
            ←
          </button>
          
          {/* Slide Counter */}
          <div className="slide-counter">
            <span className="current-slide">0{currentSlide + 1}</span>
            <span className="slide-separator">/</span>
            <span className="total-slides">0{projects.length}</span>
          </div>
          
          {/* Next Button */}
          <button 
            className={`arrow-btn ${currentSlide === projects.length - 1 ? 'disabled' : ''}`}
            onClick={nextSlide}
            disabled={currentSlide === projects.length - 1}
            aria-label="Next project"
          >
            →
          </button>
        </div>

        {/* ========== MODERN SLIDE INDICATORS ========== */}
        <div className="slide-indicators">
          {projects.map((_, index) => (
            <div 
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              role="button"
              tabIndex={0}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Premium Progress Bar */}
        <div className="slider-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${((currentSlide + 1) / projects.length) * 100}%` }}
          ></div>
        </div>
        
        {/* Card Type Indicator */}
        <div style={{ 
          marginTop: '1rem', 
          color: 'var(--text-tertiary)', 
          fontSize: '0.8rem',
          letterSpacing: '2px',
          textTransform: 'uppercase'
        }}>
          {cardTypes[cardType].replace('-', ' ')} style
        </div>
      </div>
    </div>
  );
};

export default Projects;