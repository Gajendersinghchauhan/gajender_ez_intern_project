import React, { useState, useEffect } from "react";
import "./Navbar.css";
import vfilms from "../assets/vfilms.png"; // ✅ use existing logo

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMenuOpen(false);
      setActiveSection(id); // ✅ instantly highlight when clicked
    }
  };

  useEffect(() => {
    const sectionIds = [
      "Varnan",
      "TheirStories",
      "OurStory",
      "Services",
      "Portfolio",
      "LetsTalk",
    ];

    const handleScroll = () => {
      let current = "";
      const scrollY = window.scrollY + window.innerHeight / 3;
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollY >= sectionTop && scrollY < sectionBottom) {
            current = id;
          }
        }
      });
      if (current && current !== activeSection) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return (
    <nav className="navbar">
      {/* ✅ V Films Logo (top-left, clickable) */}
      <div className="navbar-logo" onClick={() => scrollToSection("Varnan")}>
        <img src={vfilms} alt="V Films Logo" />
      </div>

      {/* ✅ Navigation Links */}
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li
          className={activeSection === "Varnan" ? "active-link" : ""}
          onClick={() => scrollToSection("Varnan")}
        >
          Varnan
        </li>
        <li
          className={activeSection === "TheirStories" ? "active-link" : ""}
          onClick={() => scrollToSection("TheirStories")}
        >
          Their Stories
        </li>
        <li
          className={activeSection === "OurStory" ? "active-link" : ""}
          onClick={() => scrollToSection("OurStory")}
        >
          Our Story
        </li>
        <li
          className={activeSection === "Services" ? "active-link" : ""}
          onClick={() => scrollToSection("Services")}
        >
          Services
        </li>
        <li
          className={activeSection === "Portfolio" ? "active-link" : ""}
          onClick={() => scrollToSection("Portfolio")}
        >
          Portfolio
        </li>
        <li
          className={`lets-talk-link ${
            activeSection === "LetsTalk" ? "active-link" : ""
          }`}
          onClick={() => scrollToSection("LetsTalk")}
        >
          Let's Talk
        </li>
      </ul>

      {/* ✅ Hamburger Menu Icon */}
      <div className="menu-icon" onClick={toggleMenu}>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        <div className={`bar ${menuOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
}

export default Navbar;
