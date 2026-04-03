import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import BackToTop from "./components/BackToTop";

const App = () => {
  return (
    <>
      <Navbar />
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="certificates"><Certificates /></section>
      <section id="contact"><Contact /></section>
      
      {/* Back to Top Button - placed at the end of content */}
      <div style={{ position: 'sticky', bottom: '30px', textAlign: 'right', paddingRight: '30px' }}>
        <BackToTop />
      </div>
    </>
  );
};

export default App;