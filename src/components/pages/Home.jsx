import React, { useState } from "react";
import { hero_slide_contents } from "../../default_data";

// Styling
import "primeicons/primeicons.css";
import "../../Styles/Home.css";

export const Home = () => {
  return (
    <div>
      <HeroSect />
      <ServiceSect />
    </div>
  );
};

export const HeroSect = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    const nextSlide = (currentSlide + 1) % hero_slide_contents.length;

    setCurrentSlide(nextSlide);
  };

  const handlePrev = () => {
    const prevSlide =
      (currentSlide + hero_slide_contents.length - 1) %
      hero_slide_contents.length;
    setCurrentSlide(prevSlide);
  };

  const slideStyle = {
    transition: `opacity 2s ease-in-out`,
  };

  return (
    <div className="hero-sect-container">
      {hero_slide_contents.map((slide_content, i) => (
        <div
          key={i}
          className={`hero-slide-container ${
            currentSlide === i ? "active" : ""
          }`}
          style={slideStyle}
        >
          <div className="hero-overlay"></div>

          <div className="hero-slide">
            <div className="hero-slide-image">
              <img
                src={slide_content.image_url}
                alt=""
              />
            </div>
            <div className="hero-slide-content">
              <h1>{slide_content.header}</h1>
              <p>{slide_content.paragraph}</p>
            </div>
          </div>
        </div>
      ))}
      <button
        className="prev"
        onClick={handlePrev}
      >
        <i className="pi pi-arrow-left"></i>
      </button>
      <button
        className="next"
        onClick={handleNext}
      >
        <i className="pi pi-arrow-right"></i>
      </button>
    </div>
  );
};

export const ServiceSect = () => {
  return (
    <div
      className="service-sect-container"
      id="services"
    >
      Service
    </div>
  );
};
