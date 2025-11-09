import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import HeroSection from "./Components/HeroSection";
import AboutTeam from "./Components/AboutTeam";
import AboutUs from "./Components/AboutUs";
import Services from "./Components/Services";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import "./App.css";

function HomePage() {
  const location = useLocation();

  useEffect(() => {
    const scrollContainer = document.querySelector(".horizontal-scroll");
    if (!scrollContainer) return;

    const navType = performance.getEntriesByType("navigation")[0]?.type;
    const savedScrollX = sessionStorage.getItem("scrollX");

    // --- Function to restore saved scroll after render ---
    const restoreScroll = () => {
      if (savedScrollX && navType === "reload") {
        scrollContainer.scrollLeft = parseFloat(savedScrollX);
      }
    };

    // --- Function to go to Services (from back button) ---
    const goToServices = () => {
      const services = document.getElementById("Services");
      if (services) services.scrollIntoView({ behavior: "auto" });
    };

    // Delay ensures sections are rendered before we scroll
    const timeout = setTimeout(() => {
      // ✅ Case 1: Coming from CTA (Back button)
      if (location.state?.scrollTo === "Services") {
        goToServices();
      }
      // ✅ Case 2: Refresh
      else if (navType === "reload" && savedScrollX) {
        restoreScroll();
      }
      // ✅ Case 3: Fresh load → default (Varnan)
      else {
        scrollContainer.scrollLeft = 0;
      }
    }, 50); // slight delay ensures DOM is ready

    // --- Track scroll position for future reloads ---
    const handleScroll = () => {
      sessionStorage.setItem("scrollX", scrollContainer.scrollLeft);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      clearTimeout(timeout);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, [location]);

  return (
    <div className="horizontal-scroll">
      <Navbar />
      <section id="Varnan">
        <HeroSection />
      </section>
      <section id="TheirStories">
        <AboutTeam />
      </section>
      <section id="OurStory">
        <AboutUs />
      </section>
      <section id="Services">
        <Services />
      </section>
      <section id="Portfolio">
        <Portfolio />
      </section>
      <section id="LetsTalk">
        <Contact />
      </section>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Main homepage */}
        <Route path="/" element={<HomePage />} />

        {/* Individual CTA pages */}
      </Routes>
    </Router>
  );
}

export default App;


