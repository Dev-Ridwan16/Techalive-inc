import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  setFormValid,
  setFormInvalid,
  setFormErrors,
} from "../features/formValiditySlice";

export const AppointmentForm = ({ closeAppointmentForm }) => {
  // Pop up transition
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    setIsFormVisible(true);
  }, []);

  // user deatils functionalities
  const dispatch = useDispatch();
  const { isFormValid, errors } = useSelector((state) => state.formValidity);

  const [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "time") {
      const date = new Date(value);
      setUserDetails({ ...userDetails, [name]: value });
    } else {
      setUserDetails({ ...userDetails, [name]: value });
    }

    if (value.length > 0) {
      dispatch(setFormValid());
      dispatch(setFormErrors({ ...errors, [name]: "" }));
    }
  };

  // Submit Handler Touch No Code
  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = Object.values(userDetails).every(
      (value) => value.length > 0
    );

    if (isValid) {
      dispatch(setFormValid());
      // console.log("Name:", userDetails.name);
      // console.log("Email:", userDetails.email);
      // console.log("Phone:", userDetails.phone);
      // console.log("Message:", userDetails.message);
      // console.log("Time:", userDetails.time);
    } else {
      dispatch(setFormInvalid());
      const customError = {};
      Object.entries(userDetails).forEach(([field, value]) => {
        if (value.length === 0) {
          customError[field] = `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`;
        }
      });
      dispatch(setFormErrors(customError));
    }
  };

  return (
    <div className="appoint-layout">
      <div
        className={`appoint-container ${isFormVisible ? "activateForm" : ""}`}
      >
        <div className="lead-appoint-head">
          <h1 className="appoint-header">Book An Appointment</h1>
          <i
            className="pi pi-times-circle"
            onClick={closeAppointmentForm}
          ></i>
        </div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="appoint-form"
        >
          <div className="field1">
            <div className="field">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={userDetails.name}
                onChange={handleChange}
              />
              <div className="error-msg">{errors.name}</div>
            </div>
            <div className="field">
              <input
                type="text"
                name="email"
                placeholder="Your Email Address"
                value={userDetails.email}
                onChange={handleChange}
              />
              <div className="error-msg">{errors.email}</div>
            </div>
          </div>

          <div className="field2">
            <div className="field">
              <input
                type="number"
                name="phone"
                placeholder="Your Number (Numbers Only)"
                value={userDetails.phone}
                onChange={handleChange}
              />
              <div className="error-msg">{errors.phone}</div>
            </div>
            <select
              name="purpose"
              value={userDetails.purpose}
              onChange={handleChange}
            >
              <option
                value=""
                disabled
              >
                Select a Purpose
              </option>
              <option value="business">Business</option>
              <option value="individual">Individual</option>
            </select>
          </div>
          <div className="field3">
            <div className="field">
              <textarea
                name="message"
                className="appoint-msg"
                placeholder="Your Message..."
                value={userDetails.message}
                onChange={handleChange}
              />
              <div className="error-msg">{errors.message}</div>
            </div>
            <div className="field">
              <input
                type="datetime-local"
                name="time"
                className="appoint-time"
                value={userDetails.time}
                onChange={handleChange}
              />
              <div className="error-msg">{errors.time}</div>
            </div>
          </div>

          <button type="submit">Make Appointment</button>
        </form>
      </div>
    </div>
  );
};
