import React, { useState, useEffect } from "react";

// importing dependecies
import { nav_links } from "../default_data";
import { Link } from "react-scroll";
import { Link as PathLink } from "react-router-dom";

// Styling
import "../Styles/Layout.css";

export const Navbar = ({ openAppointmentForm }) => {
  const isDesktop = window.innerWidth >= 1024;

  const [isToggle, setIsToggle] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  const handleNavToggle = () => {
    setIsToggle(!isToggle);
  };

  const changeNavbarBg = () => {
    if (window.scrollY >= 600) setIsScrolling(true);
    else {
      setIsScrolling(false);
    }
  };

  window.addEventListener("scroll", changeNavbarBg);

  return (
    <div className="nav-container">
      <div className={isScrolling ? "changing-nav-bg" : "nav-wrapper"}>
        {isDesktop ? (
          <nav>
            <div className="brand">
              <img
                src="https://i.imgur.com/UKGl5Qk.png"
                alt="techalive-logo"
              />
              <p className="brand-name">TECHALIVE</p>
            </div>
            <ul className="nav-links">
              {nav_links.map((nav_link, index) => (
                <li key={index}>
                  {window.location.pathname === "/blog-posts" ? (
                    <PathLink to="/">{nav_link.name}</PathLink>
                  ) : (
                    <Link
                      to={nav_link.path}
                      smooth={true}
                      offset={200}
                      duration={500}
                    >
                      {nav_link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
            <button onClick={openAppointmentForm}>Book Appointement</button>
          </nav>
        ) : (
          <MobileNavbar
            isToggle={isToggle}
            setIsToggle={setIsToggle}
            handleNavToggle={handleNavToggle}
            openAppointmentForm={openAppointmentForm}
          />
        )}
      </div>
    </div>
  );
};

export const MobileNavbar = ({
  isToggle,
  setIsToggle,
  handleNavToggle,
  openAppointmentForm,
}) => {
  const [isScrolling, setIsScrolling] = useState(true);

  const closeNavbar = () => {
    setIsToggle(true);
  };
  const changeNavbarBg = () => {
    if (window.location.pathname === "/blog-posts") {
      if (window.scrollY >= 200) {
        console.log(300);
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    } else {
      if (window.scrollY >= 600) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNavbarBg);

    // Remove the event listener when unmounting
    return () => {
      window.removeEventListener("scroll", changeNavbarBg);
    };
  }, []);

  return (
    <div
      className={`
        ${isToggle ? "nav-wrapper" : "nav-wrapper-bg changing-nav-bg"}
        ${isScrolling ? "changing-nav-bg" : "nav-wrapper"}
      `}
    >
      <nav>
        <div className="brand">
          <img
            src="https://i.imgur.com/UKGl5Qk.png"
            alt="techalive-logo"
          />
          <p className="brand-name">TECHALIVE</p>
        </div>

        <div
          className="nav-menu-btn text-[#fff]"
          onClick={handleNavToggle}
        >
          {isToggle ? (
            <i className="pi pi-bars"></i>
          ) : (
            <i className="pi pi-times"></i>
          )}
        </div>

        <ul className={!isToggle ? "mobile-nav-links" : "disactive"}>
          <div className="mobile-nav-children">
            {nav_links.map((nav_link, index) => (
              <li key={index}>
                {window.location.pathname === "/blog-posts" ? (
                  <PathLink to="/">{nav_link.name}</PathLink>
                ) : (
                  <Link
                    to={nav_link.path}
                    smooth={true}
                    offset={200}
                    duration={500}
                    onClick={closeNavbar}
                  >
                    {nav_link.name}
                  </Link>
                )}
              </li>
            ))}
            <button onClick={openAppointmentForm}>Book Appointement</button>
          </div>
        </ul>
      </nav>
    </div>
  );
};
