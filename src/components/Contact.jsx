import React, { useState } from "react";
import "../styles/Contact.css";  // ✅ Make sure this path is correct

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [showCelebration, setShowCelebration] = useState(false);
  const [isHoveringWhatsApp, setIsHoveringWhatsApp] = useState(false);
  const [isHoveringEmail, setIsHoveringEmail] = useState(false);
  const [copied, setCopied] = useState(false);

  // ✅ LIVE Backend URL
  const BACKEND_URL = "https://appasm.pythonanywhere.com";
  
  // ✅ WhatsApp Configuration
  const WHATSAPP_NUMBER = "919080286624";
  const WHATSAPP_MESSAGE = "Hii Appas";
  
  // ✅ Email Configuration
  const EMAIL_ADDRESS = "appasm321@gmail.com";
  const EMAIL_SUBJECT = "Hello Appas";
  const EMAIL_BODY = "Hi Appas, I'd like to connect with you!";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleWhatsAppClick = (e) => {
    e.preventDefault();
    const encodedMessage = encodeURIComponent(WHATSAPP_MESSAGE);
    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(EMAIL_SUBJECT);
    const encodedBody = encodeURIComponent(EMAIL_BODY);
    const mailtoUrl = `mailto:${EMAIL_ADDRESS}?subject=${encodedSubject}&body=${encodedBody}`;
    window.location.href = mailtoUrl;
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(EMAIL_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const createColorPapers = () => {
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        const paper = document.createElement('div');
        paper.className = 'color-paper';
        paper.style.left = Math.random() * 100 + '%';
        paper.style.top = Math.random() * 100 + '%';
        paper.style.animationDelay = Math.random() * 2 + 's';
        paper.style.background = `linear-gradient(135deg, 
          ${i % 2 === 0 ? '#00e5f7' : '#b829e0'}, 
          ${i % 3 === 0 ? '#ff4d6d' : '#00d68f'})`;
        document.body.appendChild(paper);
        setTimeout(() => paper.remove(), 5000);
      }, i * 100);
    }
  };

  const createConfetti = () => {
    const confettiContainer = document.createElement('div');
    confettiContainer.className = 'confetti-container';
    
    for (let i = 0; i < 50; i++) {
      const confetti = document.createElement('div');
      confetti.className = 'confetti';
      confetti.style.left = Math.random() * 100 + '%';
      confetti.style.animationDelay = Math.random() * 3 + 's';
      confetti.style.background = `linear-gradient(45deg, 
        ${['#00e5f7', '#b829e0', '#ff4d6d', '#00d68f', '#ffde57'][Math.floor(Math.random() * 5)]}, 
        ${['#b829e0', '#ff4d6d', '#00d68f', '#ffde57', '#00e5f7'][Math.floor(Math.random() * 5)]})`;
      confettiContainer.appendChild(confetti);
    }
    
    document.body.appendChild(confettiContainer);
    setTimeout(() => confettiContainer.remove(), 5000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const res = await fetch(`${BACKEND_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Server Error");
      }

      const data = await res.json();

      if (data.status === "success") {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
        setShowCelebration(true);
        createConfetti();
        createColorPapers();
        setTimeout(() => setShowCelebration(false), 4000);
      } else {
        setStatus("❌ " + (data.message || "Something went wrong"));
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("❌ Network Error: Backend not reachable");
    }
  };

  return (
    <div className="contact-container">
      {/* Floating Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>

      {/* Celebration Alert */}
      {showCelebration && (
        <div className="celebration-alert">
          <div className="celebration-icon">
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
            <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
            </svg>
          </div>
          <div className="celebration-message">Thank You!</div>
          <div className="celebration-text">Your message has been sent successfully!</div>
        </div>
      )}

      {/* Left Side */}
      <div className="contact-left">
        <h2>
          <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
          </svg>
          Contact Me
        </h2>
        
        <div className="contact-description">
          <svg viewBox="0 0 24 24" width="1.5em" height="1.5em" fill="currentColor">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
          </svg>
          <span>Have a question or want to collaborate? I'd love to hear from you! Drop me a message and I'll get back to you as soon as possible.</span>
        </div>
        
        {/* Contact Info Container */}
        <div className="contact-info-container">
          {/* Email Container */}
          <div className="contact-info-item email-item">
            <div className="contact-info-header">
              <div className="contact-icon-wrapper email-icon-wrapper">
                <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </div>
              <span className="contact-info-label">Email</span>
            </div>
            
            <div className="contact-info-content">
              <a 
                href="#" 
                onClick={handleEmailClick}
                className="contact-info-link email-link"
                onMouseEnter={() => setIsHoveringEmail(true)}
                onMouseLeave={() => setIsHoveringEmail(false)}
              >
                <span className="contact-info-text">{EMAIL_ADDRESS}</span>
                <span className="contact-info-badge email-badge">Send</span>
              </a>
              
              <button 
                className={`contact-copy-btn ${copied ? 'copied' : ''}`}
                onClick={handleCopyEmail}
              >
                {copied ? (
                  <>
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                    </svg>
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <svg viewBox="0 0 24 24" width="1em" height="1em">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
                    </svg>
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>

            {/* Email Tooltip */}
            <div className={`contact-tooltip ${isHoveringEmail ? 'visible' : ''}`}>
              <svg viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <span>Click to send email or copy address</span>
            </div>

            {/* Quick Replies */}
            <div className={`contact-quick-replies ${isHoveringEmail ? 'show' : ''}`}>
              <button className="quick-reply-btn email-quick-reply" onClick={handleEmailClick}>
                📧 General
              </button>
              <button className="quick-reply-btn email-quick-reply" onClick={handleEmailClick}>
                💼 Business
              </button>
              <button className="quick-reply-btn email-quick-reply" onClick={handleEmailClick}>
                🤝 Collab
              </button>
            </div>
          </div>

          {/* WhatsApp Container */}
          <div className="contact-info-item whatsapp-item">
            <div className="contact-info-header">
              <div className="contact-icon-wrapper whatsapp-icon-wrapper">
                <svg viewBox="0 0 24 24" width="1.2em" height="1.2em">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                </svg>
              </div>
              <span className="contact-info-label">WhatsApp</span>
            </div>
            
            <div className="contact-info-content">
              <a 
                href="#" 
                onClick={handleWhatsAppClick}
                className="contact-info-link whatsapp-link"
                onMouseEnter={() => setIsHoveringWhatsApp(true)}
                onMouseLeave={() => setIsHoveringWhatsApp(false)}
              >
                <span className="contact-info-text">9080286624</span>
                <span className="contact-info-badge whatsapp-badge">
                  <span className="badge-dot"></span>
                  Online
                </span>
              </a>
            </div>

            {/* WhatsApp Tooltip */}
            <div className={`contact-tooltip whatsapp-tooltip ${isHoveringWhatsApp ? 'visible' : ''}`}>
              <svg viewBox="0 0 24 24" width="1em" height="1em">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <span>Click to chat on WhatsApp</span>
            </div>

            {/* Quick Replies */}
            <div className={`contact-quick-replies ${isHoveringWhatsApp ? 'show' : ''}`}>
              <button className="quick-reply-btn whatsapp-quick-reply" onClick={handleWhatsAppClick}>
                👋 Hi
              </button>
              <button className="quick-reply-btn whatsapp-quick-reply" onClick={handleWhatsAppClick}>
                💼 Project
              </button>
              <button className="quick-reply-btn whatsapp-quick-reply" onClick={handleWhatsAppClick}>
                🤝 Collab
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Contact Form */}
      <div className="contact-right">
        {status && (
          <div className={`status-message ${status.includes('✅') ? 'success' : status.includes('Sending') ? 'info' : 'error'}`}>
            {status}
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              Phone (Optional)
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="+1 234 567 8900"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">
              <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
                <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
              </svg>
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Tell me about your project or idea..."
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
            />
          </div>

          <button type="submit" className="submit-btn">
            <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="currentColor">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
            </svg>
            Send Message
            <svg viewBox="0 0 24 24" width="1.2em" height="1.2em" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;