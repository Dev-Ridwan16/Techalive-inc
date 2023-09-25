import React, { useEffect, useState } from "react";
import {
  about_contents,
  about_indicators,
  blog_posts,
  hero_slide_contents,
  products_contents,
  reviews_contents,
  services_contents,
  why_choose_us_contents,
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
        <Why_Choose_Us />
      </div>
      <Archivement />
      <div className="max-w-[85%] mx-auto">
        <ReviewsSect />
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

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + 1) % hero_slide_contents.length;
      setCurrentSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);
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
          <div
            key={index}
            className="service-wrapper"
          >
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
          <div
            key={index}
            className="product-wrapper-card"
          >
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

  useEffect(() => {
    const interval = setInterval(() => {
      const nextSlide = (currentSlide + divisionFactor) % blog_posts.length;
      setCurrentSlide(nextSlide);
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);
  const slideStyle = {
    transform: `translateX(-${(currentSlide * 100) / divisionFactor}%)`,
  };

  return (
    <div
      className="blog-sect-container"
      id="blogs"
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
            <div
              key={index}
              className="blog-post-slide"
            >
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

export const Why_Choose_Us = () => {
  return (
    <div
      className="why-choose-us-container"
      id="why-choose-us"
    >
      <h1 className="section-subhead text-center">
        Why <span className="text-pink underline">Choose Us</span>
      </h1>
      <p className="text-center my-5 w-full md:w-[600px] mx-auto">
        Explore our wide range of services designed to meet your needs. At
        Techalive Consult LTD, we take pride in offering high-quality solutions
        tailored to your requirements. Explore our services below and discover
        how we can help you.
      </p>
      <div className="why_choose_us_container">
        {why_choose_us_contents.map((content, index) => (
          <div
            key={index}
            className="why_choose_us_wrapper"
          >
            <i className={content.icon}></i>
            <h3>{content.header}</h3>
            <p>{content.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const Archivement = () => {
  const [counters, setCounters] = useState({
    workers: 0,
    contracts: 0,
    awards: 0,
    clients: 0,
  });

  const limit = {
    workers: 10,
    contracts: 20,
    awards: 40,
    clients: 30,
  };

  let interval;

  const incrementCounts = (counterName) => {
    setCounters((prevCount) => ({
      ...prevCount,
      [counterName]: prevCount[counterName] + 1,
    }));
  };

  useEffect(() => {
    const counterNames = Object.keys(counters);

    interval = setInterval(() => {
      counterNames.forEach((counterName) => {
        if (counters[counterName] < limit[counterName]) {
          incrementCounts(counterName);
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [counters, limit]);

  return (
    <div className="archievement-container">
      <img
        src="https://i.pinimg.com/564x/7a/e9/e9/7ae9e9fd2b348f03421abc3a6a3a1be9.jpg"
        alt=""
      />

      <div className="overlay"></div>

      <div className="content">
        <div className="workers">
          <h1>{counters.workers}</h1>
          <p>Workers</p>
        </div>
        <div className="contract">
          <h1>{counters.contracts}</h1>
          <p>Contracts</p>
        </div>
        <div className="award">
          <h1>{counters.awards}</h1>
          <p>Awards</p>
        </div>
        <div className="custormer">
          <h1>{counters.clients}</h1>
          <p>Clients</p>
        </div>
      </div>
    </div>
  );
};

export const ReviewsSect = () => {
  const tablet = window.innerWidth <= 1023;
  const [currentReview, setCurrentReview] = useState(0);

  let divisionFactor = 1;

  if (tablet) {
    divisionFactor = 2;
  }

  const slideStyle = {
    transform: `translateX(-${(currentReview * 100) / divisionFactor}%)`,
  };
  return (
    <div
      className="reviews-container"
      id="reviews"
    >
      <div className="reviews-wrapper">
        <div className="section-intro">
          <h1 className="section-subhead">
            What <span className="text-pink">Our Customers</span> Say
          </h1>
          <p>
            We care what people say about us. We work hard to gain the trust and
            kind words our customers share. Choose us and be one of the
            thousands of happy customers we have worked with.
          </p>
        </div>
        <div className="reviews-slides-wrapper">
          <div
            className="reviews-slides"
            style={slideStyle}
          >
            {reviews_contents.map((content, index) => (
              <div
                key={index}
                className={`reviews_slide ${
                  currentReview === index ? "active" : ""
                }`}
              >
                <div className="client-details">
                  <img
                    src={content.image_url}
                    alt=""
                  />
                  <div className="handle">
                    <h5>{content.name}</h5>
                    <p>
                      {content.position === "CEO" ||
                      content.position === "Director"
                        ? content.position + " @ " + content.company
                        : content.position === "Founder"
                        ? content.position + " of " + content.company
                        : content.company}
                    </p>
                  </div>
                </div>
                <p>{content.review}</p>
              </div>
            ))}
          </div>
          <div className="indicators">
            {reviews_contents.map((indicator, index) => (
              <div
                className={`indicator ${
                  currentReview === index ? "active" : ""
                }`}
                onClick={() => setCurrentReview(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
