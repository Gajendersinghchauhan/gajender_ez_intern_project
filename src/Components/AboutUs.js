import React from "react";
import "./AboutUs.css";
import cocaCola from "../assets/cocaCola.png";
import mountain from "../assets/mountain.png";

function AboutUs() {
  return (
    <section id="OurStory" className="about-us">
      <div className="about-left">
        <h2>A montage of familiar faces and names.</h2>
        <p>
          Some stories come from the biggest names. Others begin with bold,
          rising voices. We’ve been fortunate to walk alongside both – listening,
          creating, and building stories that matter.
        </p>

        {/* Stat cards */}
        <div className="stats">
          <div className="stat-card">
            <h3>85+</h3>
            <p>Projects</p>
          </div>
          <div className="stat-card middle">
            <h3>50+</h3>
            <p>Happy Clients</p>
          </div>
          <div className="stat-card">
            <h3>10+</h3>
            <p>Experts Team</p>
          </div>
        </div>
      </div>

      <div className="about-right">
        <h3 className="right-heading">
          Every project is more than just a brief – it’s a new chapter waiting
          to be written. Together, we’ve crafted tales that inspire, connect, and
          endure.
        </h3>

        {/* Logos & art */}
        <div className="logos">
          <img src={cocaCola} alt="Coca Cola" className="logo coca" />
        </div>

        {/* Decorative mountain illustration */}
        <img src={mountain} alt="Mountain Art" className="mountain" />
      </div>
    </section>
  );
}

export default AboutUs;
