import React, { useState, useEffect } from 'react';
import { FaLaptopCode } from 'react-icons/fa';
import '../styles/BackToTop.css';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {isVisible && (
        <button 
          className="back-to-top"
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <FaLaptopCode className="back-to-top-icon" />
          <span className="back-to-top-text">Top</span>
        </button>
      )}
    </>
  );
};

export default BackToTop;