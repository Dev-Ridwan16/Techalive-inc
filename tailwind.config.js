/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        headFamily: "'Josefin Sans', sans-serif",
        bodyFamily: "'Open Sans', sans-serif;",
      },
      fontSize: {
        f35: "35px",
        f30: "30px",
        f25: "25px",
        f20: "20px",
        f18: "18px",
        f14: "14px",
      },
      colors: {
        pink: "#FF046E",
        blue: "#081325",
        red: "#800000",
        green: "#005541",
        white: "#9f9f9f",
        grey: "#6c6c6c",
      },
    },
  },
  plugins: [],
};
