"use client"
import { useState } from "react"

// const convertCamelCaseToSentenceCase = (str: string) => {
//   const words = str.replace(/([A-Z])/g, " $1").trim()

//   return words.charAt(0).toUpperCase() + words.slice(1).toLowerCase()
// }

export default function Register() {
  const [details, setDetails] = useState({
    fullName: "",
    emailAddress: "",
    phoneNumber: "",
    // pickupLocation: "",
    // homeAddress: "",
    // // deliveryTime: "",
    // // paymentMethod: "",
    // // deliveryInstructions: "",
    // // specialInstructions: "",
  })
  return (

    <div className="w-full h-full grid place-content-center py-[50px]">
      <div className="flex flex-col gap-5">
        {Object.keys(details).map((key, index) => (
          <div key={index} className="flex flex-col gap-2">
            <label>
              {key === "fullName"
                ? "Full name"
                : key === "emailAddress"
                ? "Email Address"
                : key === "phoneNumber"
                ? "Phone number"
                // : key === "pickupLocation"
                // ? "Pickup location"
                // : key === "homeAddress"
                // ? "Home address"
                // : key === "deliveryTime"
                // ? "Delivery time"
                : ""}
            </label>
            <input type="text" className="border outline-none h-[40px] w-[250px] rounded-lg" />
          </div>
        ))}
      </div>
    </div>
  )
}
