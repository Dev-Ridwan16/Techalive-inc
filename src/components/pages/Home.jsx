import React, { useEffect, useState } from "react";
import {
  about_contents,
  about_indicators,
  blog_posts,
  hero_slide_contents,
  products_contents,
  services_contents,
} from "../../default_data";

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
        <ProductSect />
        <AboutSect />
        <BlogSect />
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
      <h1 className="section-subhead text-center">
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

export const ProductSect = () => {
  return (
    <div
      className="product-sect-container"
      id="products"
    >
      <h1 className="section-subhead text-center">
        Our <span className="text-pink underline">Product</span>
      </h1>
      <p className="text-center my-5 w-full md:w-[600px] mx-auto">
        Explore our top-notch products designed to elevate your experience. From
        cutting-edge technology to stylish accessories, we offer a range of
        solutions tailored to your lifestyle.
      </p>
      <div className="product-container">
        {products_contents.map((content, index) => (
          <div className="product-wrapper-card">
            <img
              src={content.image_url}
              alt=""
            />
            <p>{content.category}</p>
            <h4 id="name">{content.name}</h4>
            <h4 id="price">{content.price}</h4>
            <div className="product-intrested">
              <span>Intrested? </span>
              <i className="pi pi-arrow-right"></i>
              <div className="contact-to-get">
                <a href="https://wa.me/2348050500466">
                  <i className="pi pi-whatsapp"></i>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const AboutSect = () => {
  const [currentAbout, setCurrentAbout] = useState(0);

  // Autoslide Functionalities
  useEffect(() => {
    const interval = setInterval(() => {
      const nextAbout = (currentAbout + 1) % about_contents.length;
      setCurrentAbout(nextAbout);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentAbout]);

  const slideStyle = {
    transform: `translateX(-${(currentAbout * 100) / 1}%)`,
  };
  return (
    <div
      className="about-sect-container"
      id="about"
    >
      <div className="about-indicators">
        {about_indicators.map((indicator, index) => (
          <h3
            className={`indicator ${currentAbout === index ? "active" : ""}`}
            onClick={() => setCurrentAbout(index)}
            key={index}
          >
            {indicator.title}
          </h3>
        ))}
      </div>
      <div
        className="the-about"
        style={slideStyle}
      >
        {about_contents.map((content, index) => (
          <div
            key={index}
            className={`the-about-wrapper ${
              currentAbout === index ? "active" : ""
            }`}
          >
            <div className="img">
              <img
                src={content.image_url}
                alt=""
              />
            </div>
            <div className="about-content">
              <h5 className="text-f20 font-medium text-blue">
                {content.header}
              </h5>
              <p>{content.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export const BlogSect = () => {
  const mobile = window.innerWidth <= 767;
  const tablet = window.innerWidth <= 1023;
  const [currentSlide, setCurrentSlide] = useState(0);

  let divisionFactor = 4;

  if (mobile) {
    divisionFactor = 1;
  } else if (tablet) {
    divisionFactor = 2;
  }

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - divisionFactor);
    } else {
      setCurrentSlide(blog_posts.length - divisionFactor);
    }
  };

  const handleNext = () => {
    if (currentSlide < blog_posts.length - divisionFactor) {
      setCurrentSlide(currentSlide + divisionFactor);
    } else {
      setCurrentSlide(0);
    }
  };

  const slideStyle = {
    transform: `translateX(-${(currentSlide * 100) / divisionFactor}%)`,
  };

  return (
    <div
      className="blog-sect-container"
      id="blog"
    >
      <h1 className="section-subhead text-center">
        Our <span className="text-pink underline">Blog</span>
      </h1>
      <p className="text-center my-5 w-full md:w-[600px] mx-auto">
        Discover our collection of insightful articles covering a variety of
        topics. Dive into our latest posts below.
      </p>

      <div className="blog-container">
        <div
          className="blog-slider"
          style={slideStyle}
        >
          {blog_posts.map((post, index) => (
            <div className="blog-post-slide">
              <img
                src={post.image_url}
                alt=""
              />
              <div className="blog-post-content">
                <h3>{post.title}</h3>
                <p>
                  {post.content.length > 20
                    ? post.content.slice(0, 150) + "..."
                    : post.content}
                </p>
                <button>{post.read_more}</button>
                <div className="the-footer">
                  <i>{post.author}</i>
                  <i>{post.date}</i>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="btns">
          <div className="blog-page-btn">
            <button>View all blogs</button>
          </div>
          <div className="controller">
            <button onClick={handlePrev}>
              <i className="pi pi-angle-left"></i>
            </button>
            <button onClick={handleNext}>
              <i className="pi pi-angle-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
