import React from "react";

import "../../Styles/Blog.css";

export const Blog = () => {
  return (
    <div>
      <BlogHero />
    </div>
  );
};

export const BlogHero = () => {
  return (
    <div className="blog-post-container">
      <img
        src="https://i.pinimg.com/564x/8e/e0/60/8ee0600cce110a8b54126283322d952b.jpg"
        alt=""
      />
      <div className="overlay"></div>
      <div className="content">
        <h1>Get access to minor tech solutions</h1>
      </div>
    </div>
  );
};
