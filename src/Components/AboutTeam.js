import React from "react";
import "./AboutTeam.css";
import indiaGate from "../assets/indiaGate.png";
import teamSilhouette from "../assets/teamSilhouette.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import arrowBottom from "../assets/arrow-bottom.png";

function AboutTeam() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("Portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth", inline: "center" });
    }
  };

  return (
    <section id="TheirStories" className="about-team">
      {/* Note Paper */}
      <div className="about-note">
        <p>
          Some craft films. Some build brands. Some curate art.
          <br /> We bring it all together — a collective of storytellers driven
          by one belief: every project deserves to be more than just a message;
          it should become a masterpiece.
        </p>
        <p>
          From first spark to final frame, from raw ideas to timeless visuals —
          we shape stories that stay with you.
        </p>
      </div>

      {/* Left India Gate */}
      <img src={indiaGate} alt="India Gate" className="india-gate" />

      {/* Team Section */}
      <div className="team-layout">
        <div className="team-graphic">
          <h3 className="film-makers">Film Makers</h3>
          <img src={arrowRight} alt="arrow" className="arrow-film" />

          <img src={teamSilhouette} alt="Our Team" className="team-image" />

          <h3 className="branding-experts">Branding Experts</h3>
          <img src={arrowLeft} alt="arrow" className="arrow-brand" />

          <h3 className="art-curators">Art Curators</h3>
          <img src={arrowBottom} alt="arrow" className="arrow-art" />
        </div>

        {/* CTA */}
        <div className="cta">
          <p>Take a closer look at the stories V bring to life.</p>
          <button onClick={scrollToPortfolio}>View Portfolio</button>
        </div>
      </div>
    </section>
  );
}

export default AboutTeam;
