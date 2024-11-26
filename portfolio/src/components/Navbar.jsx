import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      <div className="container nav_bar" data-aos="fade-down" data-aos-duration="1000">
        <div className="left nav_items"></div>
        <div className="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span className="menu-icon">☰</span>
        </div>
        <div className={`right ${isMenuOpen ? "menu-open" : ""}`}>
          <a href="#home" className="nav_items">
            Home
          </a>
          <a href="#experience" className="nav_items">
            About
          </a>
          <a href="#projects" className="nav_items">
            Portfolio
          </a>
          <a href="#contact" className="nav_items">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;