import React, { useState } from "react";

import "../../Styles/Blog.css";
import { blog_posts } from "../../default_data";

export const Blog = () => {
  return (
    <div>
      <BlogHero />
      <div className="max-w-[85%] mx-auto">
        <BlogPosts />
      </div>
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

export const BlogPosts = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="post-container">
      <div className="head">
        <h3>Posts</h3>
        <input
          type="search"
          id=""
          placeholder="Search for post"
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />
      </div>
      <div className="posts">
        {blog_posts.map((blog_post, index) => (
          <div
            key={index}
            className="post-wrapper"
          >
            <img
              src={blog_post.image_url}
              alt=""
            />
            <div className="date">
              <i className="pi pi-calendar-minus" />
              <span>{blog_post.date}</span>
            </div>
            <h3>{blog_post.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
