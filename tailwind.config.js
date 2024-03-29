/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        headFamily: "'Montserrat Alternates', sans-serif",
        bodyFamily: "'Poppins', sans-serif",
        // bodyFamily: "'Lato', sans-serif",
      },
      fontSize: {
        f35: '35px',
        f30: '30px',
        f25: '25px',
        f20: '20px',
        f18: '18px',
        f16: '16px',
        f14: '14px',
        f12: '12px',
        f10: '10px',
      },
      colors: {
        pink: '#FF046E',
        blue: '#081325',
        red: '#800000',
        green: '#005541',
        white: '#9f9f9f',
        grey: '#6c6c6c',
      },
    },
  },
  plugins: [],
}
