import React, { useState } from "react";
import "../styles/Contact.css";
import { 
  FaEnvelope, 
  FaUser, 
  FaPhone, 
  FaComment, 
  FaPaperPlane, 
  FaRocket,
  FaSmile,
  FaStar,
  FaCrown,
  FaBolt,
  FaHeart,
  FaFire,
  FaGem,
  FaMagic,
  FaCheckCircle
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);
  const [celebrationMessage, setCelebrationMessage] = useState("");

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("http://127.0.0.1:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (result.status === "success") {
        // Show celebration with confetti and color papers
        setCelebrationMessage("✨ Message Sent Successfully! ✨");
        setShowCelebration(true);
        
        // Reset form
        setFormData({ name: "", email: "", phone: "", message: "" });
        
        // Hide celebration after 4 seconds
        setTimeout(() => {
          setShowCelebration(false);
        }, 4000);
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (err) {
      alert("❌ Network Error: Could not send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      
      {/* Floating Neon Orbs */}
      <div className="floating-orb orb-1"></div>
      <div className="floating-orb orb-2"></div>
      <div className="floating-orb orb-3"></div>
      
      {/* CELEBRATION CONFETTI & COLOR PAPERS */}
      {showCelebration && (
        <>
          {/* Confetti */}
          <div className="confetti-container">
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
            <div className="confetti"></div>
          </div>
          
          {/* Color Paper Strips */}
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          <div className="color-paper"></div>
          
          {/* Celebration Alert */}
          <div className="celebration-alert">
            <div className="celebration-icon">
              <FaStar />
              <FaCrown />
              <FaGem />
              <FaFire />
            </div>
            <div className="celebration-message">Thank You!</div>
            <div className="celebration-text">{celebrationMessage}</div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <FaCheckCircle style={{ color: '#00e5f7' }} />
              <FaCheckCircle style={{ color: '#b829e0' }} />
              <FaCheckCircle style={{ color: '#ffde57' }} />
            </div>
          </div>
        </>
      )}

      {/* Left Side - Intro with Icons */}
      <div className="contact-left">
        <h2>
          <i><FaMagic /></i>
          Contact Me
        </h2>
        <p>
          <i><FaSmile /></i>
          You can write me a message if you want to collaborate on a project
          or just say hi!
        </p>
      </div>

      {/* Right Side - Form with Icons */}
      <div className="contact-right">
        <form onSubmit={handleSubmit} className="contact-form">
          
          <div className="form-group">
            <label>
              <i><FaUser /></i>
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <span className="input-icon">
              <FaUser />
            </span>
          </div>

          <div className="form-group">
            <label>
              <i><FaEnvelope /></i>
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <span className="input-icon">
              <FaEnvelope />
            </span>
          </div>

          <div className="form-group">
            <label>
              <i><FaPhone /></i>
              Contact No
            </label>
            <input
              type="text"
              name="phone"
              placeholder="+91 98765 43210"
              value={formData.phone}
              onChange={handleChange}
            />
            <span className="input-icon">
              <FaPhone />
            </span>
          </div>

          <div className="form-group">
            <label>
              <i><FaComment /></i>
              Message
            </label>
            <textarea
              name="message"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
            <span className="input-icon">
              <FaComment />
            </span>
          </div>

          <button type="submit" className="submit-btn" disabled={loading}>
            <i><FaPaperPlane /></i>
            {loading ? "SENDING..." : "SEND MESSAGE"}
            <i><FaRocket /></i>
          </button>
          
        </form>
      </div>
    </div>
  );
};

export default Contact;