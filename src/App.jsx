import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import { Home } from "./components/pages/Home";
import { Navbar } from "./layouts/Navbar";
import { AppointmentForm } from "./layouts/AppointmentForm";
import { useState } from "react";

function App() {
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);
  const openAppointmentForm = () => {
    setShowAppointmentForm(true);
  };

  const closeAppointmentForm = () => {
    setShowAppointmentForm(false);
  };

  return (
    <div>
      <Navbar openAppointmentForm={openAppointmentForm} />
      {showAppointmentForm && (
        <AppointmentForm closeAppointmentForm={closeAppointmentForm} />
      )}
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
