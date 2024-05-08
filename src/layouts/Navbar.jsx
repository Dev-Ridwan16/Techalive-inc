import React, { useState, useEffect } from 'react'

// importing dependecies
import { nav_links } from '../default_data'
import { Link } from 'react-scroll'
import { Link as PathLink, useLocation, useNavigate } from 'react-router-dom'

// Styling
import '../Styles/Layout.css'

export const Navbar = ({ openAppointmentForm }) => {
  const isDesktop = window.innerWidth >= 1024
  const location = useLocation()
  const navigate = useNavigate()

  const [isToggle, setIsToggle] = useState(true)
  const [isScrolling, setIsScrolling] = useState(false)

  const handleNavToggle = () => {
    setIsToggle(!isToggle)
  }

  const changeNavbarBg = () => {
    if (window.scrollY >= 600) {
      setIsScrolling(true)
    } else {
      setIsScrolling(false)
    }
  }

  window.addEventListener('scroll', changeNavbarBg)

  const handleSmoothScroll = (target) => {
    const targetElement = document.querySelector(target)

    if (targetElement) {
      const offset = targetElement.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: offset,
        behavior: 'smooth',
      })
    }
  }

  const handleNavLinkClick = (e, target) => {
    e.preventDefault()
    if (location.pathname !== '/') {
      navigate('/')

      setTimeout(() => {
        handleSmoothScroll(target)
      }, 1000)
    }

    handleSmoothScroll(target)
  }

  return (
    <div className='nav-container'>
      <div
        className={
          isScrolling
            ? 'changing-nav-bg'
            : location.pathname.includes('/blog/')
            ? isScrolling
              ? 'changing-nav-bg'
              : 'changing-nav-bg'
            : 'nav-wrapper'
        }
      >
        {isDesktop ? (
          <nav>
<<<<<<< HEAD
            <div className='brand'>
=======
            <div className='brand' onClick={() => navigate(-1)}>
>>>>>>> a75f3271ff09224332af87444a219cb419c526f8
              <img
                src='https://i.imgur.com/UKGl5Qk.png'
                alt='techalive-logo'
              />
              <p className='brand-name'>TECHALIVE</p>
            </div>
            <ul className='nav-links'>
              {nav_links.map((nav_link, index) => (
                <li key={index}>
                  {/* {window.location.pathname === '/blog-posts' ? (
                    <a href={`/#${nav_link.path}`}>{nav_link.name}</a>
                  ) : ( */}
                  <a
                    href={`/#${nav_link.path}`}
                    onClick={(e) => handleNavLinkClick(e, `#${nav_link.path}`)}
                  >
                    {nav_link.name}
                  </a>
                  {/* )} */}
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
            handleNavLinkClick={handleNavLinkClick}
          />
        )}
      </div>
    </div>
  )
}

export const MobileNavbar = ({
  isToggle,
  setIsToggle,
  handleNavToggle,
  openAppointmentForm,
  handleNavLinkClick,
}) => {
  const [isScrolling, setIsScrolling] = useState(true)
  const location = useLocation()
<<<<<<< HEAD
=======
  const navigate = useNavigate()
>>>>>>> a75f3271ff09224332af87444a219cb419c526f8

  const closeNavbar = () => {
    setIsToggle(true)
  }
  const changeNavbarBg = () => {
    if (window.location.pathname === '/blog-posts') {
      if (window.scrollY >= 200) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    } else {
      if (window.scrollY >= 600) {
        setIsScrolling(true)
      } else {
        setIsScrolling(false)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNavbarBg)

    // Remove the event listener when unmounting
    return () => {
      window.removeEventListener('scroll', changeNavbarBg)
    }
  }, [])

  return (
    <div
      className={`
        ${isToggle ? 'nav-wrapper' : 'nav-wrapper-bg changing-nav-bg'}
        ${
          location.pathname === '/techalive/blog/:blogId'
            ? isScrolling
              ? 'changing-nav-bg'
              : 'nav-wrapper'
            : 'changing-nav-bg'
        }
      `}
    >
      <nav>
<<<<<<< HEAD
        <div className='brand'>
=======
        <div className='brand' onClick={() => navigate(-1)}>
>>>>>>> a75f3271ff09224332af87444a219cb419c526f8
          <img
            src='https://i.imgur.com/UKGl5Qk.png'
            alt='techalive-logo'
          />
          <p className='brand-name'>TECHALIVE</p>
        </div>

        <div
          className='nav-menu-btn text-[#fff]'
          onClick={handleNavToggle}
        >
          {isToggle ? (
            <i className='pi pi-bars'></i>
          ) : (
            <i className='pi pi-times'></i>
          )}
        </div>

        <ul className={!isToggle ? 'mobile-nav-links' : 'disactive'}>
          <div className='mobile-nav-children'>
            {nav_links.map((nav_link, index) => (
              <li key={index}>
                {window.location.pathname === '/blog-posts' ? (
                  <a href={`/#${nav_link.path}`}>{nav_link.name}</a>
                ) : (
                  <a
                    href={`/#${nav_link.path}`}
                    onClick={(e) => handleNavLinkClick(e, `#${nav_link.path}`)}
                  >
                    {nav_link.name}
                  </a>
                )}
              </li>
            ))}
            <button onClick={openAppointmentForm}>Book Appointement</button>
          </div>
        </ul>
      </nav>
    </div>
  )
}
