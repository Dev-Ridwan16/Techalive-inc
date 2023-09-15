import React, { useState } from "react";
import { hero_slide_contents, services_contents } from "../../default_data";

// Styling
import "primeicons/primeicons.css";
import "../../Styles/Home.css";
import { AppointmentForm } from "../../layouts/AppointmentForm";

export const Home = () => {
  return (
    <div>
      <HeroSect />
      <div className="max-w-[85%] mx-auto">
        <ServiceSect />
      </div>
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
      <h1 className="section-subhead">
        Our <span className="text-pink underline">Services</span>
      </h1>
      <p className="text-center my-5 w-full md:w-[600px] mx-auto">
        Welcome to our wide range of services designed to meet your needs. At
        Techalive Consult LTD, we take pride in offering high-quality solutions
        tailored to your requirements. Explore our services below and discover
        how we can help you.
      </p>

      <div className="services-container">
        {services_contents.map((content, index) => (
          <div className="service-wrapper">
            <img
              src={content.image_url}
              alt=""
            />
            <div className="overlay-content">
              <h3>{content.service}</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Laudantium, odit!
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
