import React, { useState } from "react";
import "./Services.css";
import filmProd from "../assets/filmProduction.png";
import branding from "../assets/branding.png";
import artCuration from "../assets/artCuration.png";
import footer from "../assets/footer.png";
import underline from "../assets/underline.png";

function Services() {
  const [showMessage, setShowMessage] = useState(false);

  // Function to show message temporarily
  const handleCTA = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000); // Hide after 2 seconds
  };

  return (
    <section id="Services" className="services">
      <h2 className="services-heading">
        The storyboard reveals the breadth of our craft.
      </h2>
      <img src={underline} alt="Underline" className="underline-img" />

      <div className="services-gallery">
        {/* ✅ Film Production CTA */}
        <div
          className="service-card rotate-left"
          onClick={handleCTA}
          style={{ cursor: "pointer" }}
        >
          <img src={filmProd} alt="Film Production" className="service-img" />
        </div>

        {/* ✅ Branding CTA */}
        <div
          className="service-card rotate-straight"
          onClick={handleCTA}
          style={{ cursor: "pointer" }}
        >
          <img src={branding} alt="Branding" className="service-img" />
        </div>

        {/* ✅ Art Curation CTA */}
        <div
          className="service-card rotate-right"
          onClick={handleCTA}
          style={{ cursor: "pointer" }}
        >
          <img src={artCuration} alt="Art Curation" className="service-img" />
        </div>
      </div>

      {/* ✅ Footer Design */}
      <img src={footer} alt="Footer Design" className="footer-pattern" />

      {/* ✅ Temporary Message */}
      {showMessage && (
        <div className="cta-message">
          Currently not active, in development 🚧
        </div>
      )}
    </section>
  );
}

export default Services;
