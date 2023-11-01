import React, { useEffect, useState } from "react";

import Error from "../../../public/error.svg";

import "../../Styles/Blog.css";
import Footer from "../../layouts/Footer";
import axios from "axios";
import { Link } from "react-router-dom";

const formatDate = (dateString) => {
  const options = {
    year: "numeric",
    month: "short",
    day: "numeric",
    weekday: "short",
  };
  return new Date(dateString).toLocaleDateString("en-US", options);
};

export const Blog = () => {
  return (
    <div>
      <BlogHero />
      <div className="max-w-[85%] mx-auto">
        <BlogPosts />
      </div>
      {/* <Footer /> */}
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

  const [allBlogs, setAllBlogs] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get(
          "https://techalive.onrender.com/api/v1/blog-post/other-blogs"
        );

        const data = response.data;

        setAllBlogs(data.allBlogs);
      } catch (error) {
        console.log(error);
      }
    })();
  });

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
        {allBlogs.length === 0 ? (
          <div className="error-class">
            <img
              src={Error}
              alt=""
            />
            <h3 className="no-post">No post found!</h3>
          </div>
        ) : (
          allBlogs
            .filter((blog) =>
              searchTerm.toLowerCase() === ""
                ? blog
                : blog.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .map((blog, index) => (
              <Link
                to={`/techalive/blog/${blog._id}`}
                key={index}
                className="post-wrapper"
              >
                <img
                  src={blog.image}
                  alt=""
                />
                <div className="date">
                  <i className="pi pi-calendar-minus" />
                  <span>{formatDate(blog.createdOn)}</span>
                </div>
                <h3>
                  {blog.title.length > 25
                    ? blog.title.slice(0, 25) + "..."
                    : blog.title}
                </h3>
              </Link>
            ))
        )}
      </div>
    </div>
  );
};
