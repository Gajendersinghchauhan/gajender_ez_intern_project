import React, { useEffect } from "react";
import "./HeroSection.css";
import mandala from "../assets/mandala.png"; // you’ll need to place mandala image here
import vfilmsLogo from "../assets/vfilms.png"; // logo image

function HeroSection() {
  // ✅ Scroll state control for refresh and CTA back behavior
  useEffect(() => {
    const scrollContainer = document.querySelector(".horizontal-scroll");
    if (!scrollContainer) return;

    const navType = performance.getEntriesByType("navigation")[0]?.type; // detect refresh/navigation
    const savedScrollX = sessionStorage.getItem("scrollX");

    const goToServices = () => {
      const services = document.getElementById("Services");
      if (services) services.scrollIntoView({ behavior: "auto" });
    };

    const restoreScroll = () => {
      if (navType === "reload" && savedScrollX) {
        scrollContainer.scrollLeft = parseFloat(savedScrollX);
      }
    };

    const timeout = setTimeout(() => {
      // 1️⃣ If coming from CTA → go to Services
      if (window.history.state && window.history.state.usr?.scrollTo === "Services") {
        goToServices();
        // clear flag so it doesn’t persist on refresh
        window.history.replaceState({}, document.title, window.location.pathname);
      }
      // 2️⃣ If refresh → restore scroll position
      else if (navType === "reload" && savedScrollX) {
        restoreScroll();
      }
      // 3️⃣ Else stay at default (Varnan)
      else {
        scrollContainer.scrollLeft = 0;
      }
    }, 80); // wait till DOM renders

    const handleScroll = () => {
      sessionStorage.setItem("scrollX", scrollContainer.scrollLeft);
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="hero-section" id="home">
      <div className="hero-content container">
        {/* Left: Logo & Mandala */}
        <div className="hero-left">
          <div className="mandala-wrapper">
            <img src={mandala} alt="Mandala" className="mandala-bg" />
            <img src={vfilmsLogo} alt="V Films" className="vfilms-logo" />
          </div>
        </div>

        {/* Right: Text content */}
        <div className="hero-right">
          <h1 className="hero-title">
            Varnan is where stories find<br />their voice and form
          </h1>
          <h3 className="hero-subtitle">Films . Brands . Art</h3>
          <p className="hero-description">
            Since 2009, V’ve been telling stories – stories of people, their journeys, and the
            places that shape them. Some begin in polished boardrooms, others in humble
            village squares. But every story starts the same way – by listening with intention.
            V believes it takes trust, patience, and an eye for the unseen to capture what truly
            matters. V doesn’t just tell stories – V honors them.
          </p>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
