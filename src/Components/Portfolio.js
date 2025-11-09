import React, { useState } from "react";
import "./Portfolio.css";
import leftArrow from "../assets/leftArrow.png";
import rightArrow from "../assets/rightArrow.png";
import cameraOutline from "../assets/cameraOutline.png";
import mandala from "../assets/mandala.png";
import filmFrame from "../assets/filmFrame.png";
import videoCam from "../assets/videoCam.png";
import videoPlay from "../assets/videoPlay.png";
import footer from "../assets/footer.png"; // ✅ existing footer
import bottomLeftDesign from "../assets/bottomLeftDesign.png"; // ✅ replaced here

// ✅ Portfolio Images
import portfolioPhoto1 from "../assets/portfolioPhoto.png";
import portfolioPhoto2 from "../assets/portfolioPhoto2.png";
import portfolioPhoto3 from "../assets/portfolioPhoto3.png";

function Portfolio() {
  const photos = [portfolioPhoto1, portfolioPhoto2, portfolioPhoto3];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  // ✅ Handlers for arrow clicks with fade animation
  const handleNext = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
      setFade(false);
      setShowMessage(false);
    }, 300);
  };

  const handlePrev = () => {
    setFade(true);
    setTimeout(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + photos.length) % photos.length
      );
      setFade(false);
      setShowMessage(false);
    }, 300);
  };

  // ✅ Message toggle on play button click
  const handlePlayClick = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 2000);
  };

  return (
    <section className="portfolio">
      <h2 className="portfolio-heading">The Highlight Reel</h2>
      <p className="portfolio-subtext">Watch the magic we’ve captured.</p>

      {/* ✅ Film Frame Container */}
      <div className="film-frame">
        <img src={filmFrame} alt="Film Frame" className="film-border" />

        {/* ✅ Left and Right Arrows */}
        <img
          src={leftArrow}
          alt="Previous"
          className="nav-arrow left"
          onClick={handlePrev}
        />
        <img
          src={rightArrow}
          alt="Next"
          className="nav-arrow right"
          onClick={handleNext}
        />

        {/* ✅ Active Portfolio Image */}
        <div
          className={`portfolio-image-wrapper ${fade ? "fade-out" : "fade-in"}`}
        >
          <img
            src={photos[currentIndex]}
            alt={`Portfolio ${currentIndex + 1}`}
            className="portfolio-image"
          />

          {/* ✅ Video Play Button Overlay */}
          <img
            src={videoPlay}
            alt="Play Button"
            className="video-play-icon"
            onClick={handlePlayClick}
          />

          {/* ✅ Temporary Message Overlay */}
          {showMessage && (
            <div className="video-message">
              This is just a depiction and not an actual video.
            </div>
          )}
        </div>
      </div>

      {/* ✅ Decorative Elements */}
      <img src={videoCam} alt="Video Cam" className="decor-videoCam" />

      {/* ✅ Bottom-right Design — now using bottomLeftDesign.png */}
      <img
        src={bottomLeftDesign}
        alt="Bottom Left Design"
        className="right-bottom-design"
      />
    </section>
  );
}

export default Portfolio;
