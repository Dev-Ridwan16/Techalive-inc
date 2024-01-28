import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../features/loadingSlice'

import axios from 'axios'

export const AppointmentForm = ({ closeAppointmentForm }) => {
  // Pop up transition
  const [isFormVisible, setIsFormVisible] = useState(false)

  useEffect(() => {
    setIsFormVisible(true)
  }, [])

  // user deatils functionalities
  const dispatch = useDispatch()
  // const { isFormValid, errors } = useSelector((state) => state.formValidity);
  const { isLoading } = useSelector((state) => state.loading)

  const [appointment, setAppointment] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
    date: '',
    time: '',
  })

  const [appointmentFieldError, setAppointmentFieldError] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
    message: '',
    date: '',
    time: '',
  })

  const appointment_purpose = [
    {
      value: 'Buys',
      child: 'Buys',
    },

    {
      value: 'Reapirs',
      child: 'Reapirs',
    },

    {
      value: 'Trainings',
      child: 'Trainings',
    },

    {
      value: 'Technical Consultancy',
      child: 'Technical Consultancy',
    },
  ]

  const [statusName, setStatusName] = useState('')
  const [notify, setNotify] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'time') {
      const date = new Date(value)
      setAppointment({ ...appointment, [name]: value })
    } else {
      setAppointment({ ...appointment, [name]: value })
    }

    setAppointmentFieldError({
      ...appointmentFieldError,
      [name]:
        value === ''
          ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required`
          : '',
    })
  }

  const validateField = () => {
    const newError = {}

    let isValid = true

    Object.entries(appointment).forEach(([fieldName, fieldValue]) => {
      if (fieldValue.trim() === '') {
        newError[fieldName] = `${
          fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
        } is required`

        isValid = false
      }
    })

    setAppointmentFieldError(newError)

    return isValid
  }

  // Submit Handler Touch No Code
  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (validateField()) {
        dispatch(setLoading(true))

        const response = await axios.post(
          'https://techalive.onrender.com/api/v1/appointment/book-appointment',
          appointment
        )

        switch (response.status) {
          case 201:
            console.log(response.data)

            setNotify(true)

            setAppointment({
              name: '',
              email: '',
              phone: '',
              purpose: '',
              message: '',
              date: '',
              time: '',
            })

            setStatusName('success')

            dispatch(setLoading(false))

            break
          default:
        }
      } else {
        console.log('Some fields are empty')

        return
      }
    } catch (error) {
      console.log(error)

      setStatusName('error')

      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    const interval = setInterval(function () {
      setNotify(false)
    }, 5000)

    return () => clearInterval(interval)
  }, [statusName])

  return (
    <div className='appoint-layout'>
      <div
        className={`appoint-container ${isFormVisible ? 'activateForm' : ''}`}
      >
        {notify && <Notify statusName={statusName} />}
        <div className='lead-appoint-head'>
          <h1 className='appoint-header'>Book An Appointment</h1>

          <i
            className='pi pi-times-circle'
            onClick={closeAppointmentForm}
          ></i>
        </div>

        <form
          action=''
          onSubmit={handleSubmit}
          className='appoint-form'
        >
          <div className='appoint-field'>
            <input
              name='name'
              type='text'
              placeholder='Enter your full name'
              value={appointment.name}
              onChange={handleChange}
            />

            <div className='error-msg'>{appointmentFieldError.name}</div>
          </div>

          <div className='appoint-field'>
            <input
              name='email'
              type='text'
              placeholder='Your email address'
              value={appointment.email}
              onChange={handleChange}
            />

            <div className='error-msg'>{appointmentFieldError.email}</div>
          </div>

          <div className='appoint-field'>
            <input
              name='phone'
              type='tel'
              placeholder='Your phone number'
              value={appointment.phone}
              onChange={handleChange}
            />

            <div className='error-msg'>{appointmentFieldError.phone}</div>
          </div>

          <div className='appoint-field'>
            <select
              name='purpose'
              value={appointment.purpose}
              onChange={handleChange}
            >
              <option
                value=''
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

            <div className='error-msg'>{appointmentFieldError.purpose}</div>
          </div>
          <div className='asides'>
            <div className='appoint-field'>
              <input
                name='date'
                type='date'
                value={appointment.date}
                onChange={handleChange}
              />

              <div className='error-msg'>{appointmentFieldError.date}</div>
            </div>

            <div className='appoint-field'>
              <input
                name='time'
                type='time'
                value={appointment.time}
                onChange={handleChange}
              />

              <div className='error-msg'>{appointmentFieldError.time}</div>
            </div>
          </div>

          <div className='appoint-field'>
            <textarea
              name='message'
              type='tel'
              placeholder='Leave a message'
              value={appointment.message}
              onChange={handleChange}
            />

            <div className='error-msg'>{appointmentFieldError.message}</div>
          </div>

          <button
            type='submit'
            disabled={isLoading ? true : false}
          >
            {isLoading ? (
              <div>
                <span>Booking</span>
                <i className='pi pi-spin pi-spinner' />
              </div>
            ) : (
              'Book Appointment'
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export const Notify = ({ statusName }) => {
  let message, icon

  switch (statusName) {
    case 'success':
      message = 'Appointment Received'
      icon = 'pi-thumbs-up'
      break
    case 'error':
      message = 'Error booking appointment'
      icon = 'pi-exclamation-circle'
    default:
  }
  return (
    <div className='absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[999] bg-[#fff] w-[300px] h-[150px] grid place-content-center rounded-md'>
      <div
        className={`flex flex-col items-center justify-center gap-5 ${
          statusName === 'success' ? ' text-green' : 'text-rose-500'
        }`}
      >
        <i className={`pi ${icon} text-f30 font-bold`} />

        <h1 className='text-f20'>{message}</h1>
      </div>
    </div>
  )
}
