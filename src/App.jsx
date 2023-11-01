import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Navbar } from "./layouts/Navbar";
import { AppointmentForm } from "./layouts/AppointmentForm";
import { useEffect, useState } from "react";
import { Blog } from "./components/pages/Blog";
import BlogPost from "./components/outs/BlogPost";
import Footer from "./layouts/Footer";

function App() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const body = document.querySelector("body");
  const openAppointmentForm = () => {
    setShowAppointmentForm(true);
    body.style.overflow = "hidden";
  };

  const closeAppointmentForm = () => {
    setShowAppointmentForm(false);
    body.style.overflow = "auto";
  };

  useEffect(() => {
    return () => {};
  });

  return (
    <div>
      <div>
        <Navbar openAppointmentForm={openAppointmentForm} />

        <Routes>
          <Route
            path="techalive/blog/:blogId"
            element={<BlogPost />}
          />
          <Route
            path="/"
            element={<Home openAppointmentForm={openAppointmentForm} />}
          />
          <Route
            path="/blog-posts"
            element={<Blog />}
          />
        </Routes>
      </div>
      {showAppointmentForm && (
        <AppointmentForm closeAppointmentForm={closeAppointmentForm} />
      )}
      <Footer />
    </div>
  );
}

export default App;
