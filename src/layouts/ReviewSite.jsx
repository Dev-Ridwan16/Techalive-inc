import axios from "axios"
import React, { useState } from "react"

const ReviewSite = () => {
  const [review, setReview] = useState({
    name: "",
    service: "",
    category: "",
    companyName: "",
    role: "",
    testimonial: "",
  })

  const [reviewFieldError, setReviewFieldError] = useState({
    name: "",
    service: "",
    category: "",
    companyName: "",
    role: "",
    testimonial: "",
  })

  const [testimonialMaxLength, setTestimonialMaxLength] = useState(300)

  const [appreciation, setAppreciation] = useState(false)
  const [badRequest, setBadRequest] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === "testimonial") {
      const currentLength = value.length

      const previousLenght = review.testimonial.length
      const changeInLength = currentLength - previousLenght

      setTestimonialMaxLength((prevMaxLength) =>
        Math.max(prevMaxLength - changeInLength, 0)
      )
    }

    setReview((prevReview) => ({
      ...prevReview,
      [name]: value,
      companyName:
        prevReview.category === "Business"
          ? name === "companyName"
            ? value
            : prevReview.companyName
          : "",
      role:
        prevReview.category === "Business"
          ? name === "role"
            ? value
            : prevReview.role
          : "",
    }))

    setReviewFieldError({
      ...reviewFieldError,
      [name]:
        value === ""
          ? `${name.charAt(0).toUpperCase() + name.slice(1)} is required please`
          : "",
    })
  }

  const validateForm = () => {
    const newError = {}

    let isValid = true
    Object.entries(review).forEach(([fieldName, fieldVale]) => {
      if (
        review.category !== "Individual" ||
        (fieldName !== "companyName" && fieldName !== "role")
      ) {
        if (fieldVale.trim() === "") {
          newError[fieldName] = `${
            fieldName.charAt(0).toUpperCase() + fieldName.slice(1)
          } is required please`
          isValid = false
        }
      }
    })

    setReviewFieldError(newError)
    return isValid
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      if (validateForm()) {
        setLoading(true)

        console.log(review)

        const response = await axios.post(
          "https://techalive-backend-service.onrender.com/api/v1/review/post-review",
          review
        )

        switch (response.status) {
          case 201:
            setReview({
              name: "",
              category: "",
              service: "",
              companyName: "",
              role: "",
              testimonial: "",
            })

            setLoading(false)

            setAppreciation(true)

            break

          default:
        }
      }
    } catch (error) {
      console.log(error)
      setLoading(false)

      setAppreciation(true)
      setBadRequest(true)
    }
  }

  useState(() => {
    const interval = setInterval(() => {
      setAppreciation(false)
    }, 5000)

    return () => clearTimeout(interval)
  }, [appreciation])

  return (
    <div className="grid place-items-center h-screen">
      {appreciation && (
        <div
          className="appreciation bg-[#fff] w-[250px] h-[150px] rounded-md text-blue grid place-content-center
      absolute top-[45%] left-[50%] translate-x-[-50%] translate-y-[-45%]"
        >
          <div className="flex flex-col items-center justify-center gap-5 max-w-[800px] mx-auto w-full px-3">
            {badRequest ? (
              <i className="fa-regular fa-face-sad-tear text-f30" />
            ) : (
              <i className="fa-regular fa-handshake text-f30" />
            )}
            <h2 className="text-f18 text-center">
              {badRequest
                ? "An error occur, please try again!"
                : "Thank you for the Time and the Review"}
            </h2>
          </div>
        </div>
      )}
      <div className="shadow-md w-[90%] md:w-[400px] py-5 flex flex-col gap-5">
        <div>
          <div className="flex flex-row items-center justify-center">
            <img
              src="https://i.imgur.com/UKGl5Qk.png"
              alt="Techalive Logo"
              className="w-[50px]"
            />
          </div>
          <h1 className="text-center text-f16 text-pink">
            Kindly give us a review
          </h1>
        </div>

        <form
          action=""
          onSubmit={handleSubmit}
          className="w-[90%] mx-auto flex flex-col gap-3"
        >
          <div>
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="border outline-none w-full h-[30px] rounded px-2"
              value={review.name}
              onChange={handleChange}
            />
            <p className="text-[10px] text-[#d33] h-[15px]">
              {reviewFieldError.name}
            </p>
          </div>

          <div>
            <select
              name="service"
              value={review.service}
              className="border outline-none w-full h-[30px] rounded px-2"
              onChange={handleChange}
            >
              <option
                value=""
                disabled
                selected
              >
                Select Service
              </option>
              <option value="Buys">Buys</option>
              <option value="Repairs">Repairs</option>
              <option value="Training">Training</option>
              <option value="Technical Consultant">Technical Consultant</option>
            </select>
            <p className="text-[10px] text-[#d33] h-[15px]">
              {reviewFieldError.service}
            </p>
          </div>

          <div>
            <select
              name="category"
              value={review.category}
              className="border outline-none w-full h-[30px] rounded px-2"
              onChange={handleChange}
            >
              <option
                value=""
                disabled
                selected
              >
                Select Category
              </option>
              <option value="Individual">Individual</option>
              <option value="Business">Business</option>
            </select>
            <p className="text-[10px] text-[#d33] h-[15px]">
              {reviewFieldError.category}
            </p>
          </div>

          {review.category === "Business" && (
            <div
              className="flex flex-col gap-3
            "
            >
              <div>
                <input
                  name="companyName"
                  type="text"
                  placeholder="Company name"
                  className="border outline-none w-full h-[30px] rounded px-2"
                  value={review.companyName}
                  onChange={handleChange}
                />
                <p className="text-[10px] text-[#d33] h-[15px]">
                  {reviewFieldError.companyName}
                </p>
              </div>

              <div>
                <input
                  name="role"
                  type="text"
                  placeholder="Role"
                  className="border outline-none w-full h-[30px] rounded px-2"
                  value={review.role}
                  onChange={handleChange}
                />
                <p className="text-[10px] text-[#d33] h-[15px]">
                  {reviewFieldError.role}
                </p>
              </div>
            </div>
          )}
          <div>
            <textarea
              maxLength={300}
              name="testimonial"
              className="border outline-none w-full min-h-[100px] max-h-[100px] rounded-md px-2"
              placeholder="Testimonial"
              value={review.testimonial}
              onChange={handleChange}
            />
            <div className="flex flex-row justify-between">
              <p className="text-[10px] text-[#d33] h-[15px]">
                {reviewFieldError.testimonial}
              </p>
              <p style={{ fontVariant: "tabular-nums" }}>
                {testimonialMaxLength} / 300
              </p>
            </div>
          </div>

          <button className="bg-blue text-white w-[200px] h-[30px] rounded mx-auto">
            {loading ? (
              <div>
                <span>Please wait...</span>
                <i className="pi pi-spin pi-spinner" />
              </div>
            ) : (
              "Post Review"
            )}
          </button>
        </form>
      </div>
    </div>
  )
}

export default ReviewSite
