import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css'
import { Home } from './components/pages/Home'
import { Navbar } from './layouts/Navbar'
import { AppointmentForm } from './layouts/AppointmentForm'
import { useEffect, useState } from 'react'
import { Blog } from './components/pages/Blog'
import BlogPost from './components/outs/BlogPost'
import Footer from './layouts/Footer'
import ReviewSite from './layouts/ReviewSite'
import AboutUs from './components/pages/AboutUs'
import OurVision from './components/pages/OurVision'

function App() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false)
  const body = document.querySelector('body')
  const openAppointmentForm = () => {
    setShowAppointmentForm(true)
    body.style.overflow = 'hidden'
  }

  const closeAppointmentForm = () => {
    setShowAppointmentForm(false)
    body.style.overflow = 'auto'
  }

  useEffect(() => {
    return () => {}
  })

  return (
    <div>
      <div>
        {window.location.pathname !== '/review/aehtlcvei' && (
          <Navbar openAppointmentForm={openAppointmentForm} />
        )}

        <Routes>
          <Route
            path='review/aehtlcvei'
            element={<ReviewSite />}
          />
          <Route
            path='/techalive/blog/:blogId'
            element={<BlogPost />}
          />
          <Route
            index
            element={<Home openAppointmentForm={openAppointmentForm} />}
          />
          <Route
            path='/blog-posts'
            element={<Blog />}
          />
          <Route
            path='about-us'
            element={<AboutUs />}
          />
          <Route
            path='our-vision'
            element={<OurVision />}
          />
        </Routes>
      </div>
      {showAppointmentForm && (
        <AppointmentForm closeAppointmentForm={closeAppointmentForm} />
      )}
      {window.location.pathname !== '/review/aehtlcvei' && <Footer />}
    </div>
  )
}

export default App
