import React, { useState } from "react";

// importing dependecies
import { nav_links } from "../default_data";
import { Link } from "react-scroll";

// Styling
import "../Styles/Layout.css";

export const Navbar = () => {
  const isDesktop = window.innerWidth >= 1024;

  const [isToggle, setIsToggle] = useState(true);

  const handleNavToggle = () => {
    setIsToggle(!isToggle);
  };

  return (
    <div className="nav-container">
      <div className="nav-wrapper">
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
                  <Link
                    to={nav_link.path}
                    smooth={true}
                    offset={200}
                    duration={500}
                  >
                    {nav_link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <button>Book Appointement</button>
          </nav>
        ) : (
          <MobileNavbar
            isToggle={isToggle}
            handleNavToggle={handleNavToggle}
          />
        )}
      </div>
    </div>
  );
};

export const MobileNavbar = ({ isToggle, handleNavToggle }) => {
  return (
    <div className={isToggle ? "nav-wrapper" : "nav-wrapper-bg"}>
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
                <Link
                  to={nav_link.path}
                  smooth={true}
                  offset={200}
                  duration={500}
                >
                  {nav_link.name}
                </Link>
              </li>
            ))}
            <button>Book Appointement</button>
          </div>
        </ul>
      </nav>
    </div>
  );
};
