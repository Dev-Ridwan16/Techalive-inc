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

  const [appointment, setAppointment] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
    date: "",
    time: "",
  });

  const [appointmentFieldError, setAppointmentFieldError] = useState({
    name: "",
    email: "",
    phone: "",
    purpose: "",
    message: "",
    date: "",
    time: "",
  });

  const appointment_purpose = [
    {
      value: "Buys",
      child: "Buys",
    },

    {
      value: "Reapirs",
      child: "Reapirs",
    },

    {
      value: "Trainings",
      child: "Trainings",
    },

    {
      value: "Technical Consultancy",
      child: "Technical Consultancy",
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "time") {
      const date = new Date(value);
      setAppointment({ ...appointment, [name]: value });
    } else {
      setAppointment({ ...appointment, [name]: value });
    }

    setAppointmentFieldError({
      ...appointmentFieldError,
      [name]:
        value === ""
          ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
          : "",
    });
  };

  const validateField = () => {
    const newError = {};

    let isValid = true;

    Object.entries(appointment).forEach(([fieldName, fieldValue]) => {
      if (fieldValue.trim() === "") {
        newError[fieldName] = `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`;

        isValid = false;
      }
    });

    setAppointmentFieldError(newError);

    return isValid;
  };

  // Submit Handler Touch No Code
  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateField()) {
      console.log(appointment);
    } else {
      console.log("Some fields are empty");

      return;
    }

    // const isValid = Object.values(appointment).every(
    //   (value) => value.length > 0
    // );

    // if (isValid) {
    //   dispatch(setFormValid());
    //   console.log(appointment);
    //   setShowError(true);
    // } else {
    //   dispatch(setFormInvalid());
    //   const customError = {};
    //   Object.entries(appointment).forEach(([field, value]) => {
    //     if (value.length === 0) {
    //       customError[field] = `${
    //         field.charAt(0).toUpperCase() + field.slice(1)
    //       } is required`;
    //     }
    //   });
    //   dispatch(setFormErrors(customError));
    // }
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
          <div className="appoint-field">
            <input
              name="name"
              type="text"
              placeholder="Enter your full name"
              value={appointment.name}
              onChange={handleChange}
            />

            <div className="error-msg">{appointmentFieldError.name}</div>
          </div>

          <div className="appoint-field">
            <input
              name="email"
              type="text"
              placeholder="Your email address"
              value={appointment.email}
              onChange={handleChange}
            />

            <div className="error-msg">{appointmentFieldError.email}</div>
          </div>

          <div className="appoint-field">
            <input
              name="phone"
              type="tel"
              placeholder="Your email address"
              value={appointment.phone}
              onChange={handleChange}
            />

            <div className="error-msg">{appointmentFieldError.phone}</div>
          </div>

          <div className="appoint-field">
            <select
              name="purpose"
              value={appointment.purpose}
              onChange={handleChange}
            >
              <option
                value=""
                disabled
              >
                Select a purpose
              </option>

              {appointment_purpose.map((purpose) => (
                <option
                  key={purpose.value}
                  value={purpose.value}
                >
                  {purpose.child}
                </option>
              ))}
            </select>

            <div className="error-msg">{appointmentFieldError.purpose}</div>
          </div>
          <div className="asides">
            <div className="appoint-field">
              <input
                name="date"
                type="date"
                value={appointment.date}
                onChange={handleChange}
              />

              <div className="error-msg">{appointmentFieldError.date}</div>
            </div>

            <div className="appoint-field">
              <input
                name="time"
                type="time"
                value={appointment.time}
                onChange={handleChange}
              />

              <div className="error-msg">{appointmentFieldError.time}</div>
            </div>
          </div>

          <div className="appoint-field">
            <textarea
              name="message"
              type="tel"
              placeholder="Leave a message"
              value={appointment.message}
              onChange={handleChange}
            />

            <div className="error-msg">{appointmentFieldError.message}</div>
          </div>

          <button type="submit">Make Appointment</button>
        </form>
      </div>
    </div>
  );
};
