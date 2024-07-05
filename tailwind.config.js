/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        roboto:["Roboto",' sans-serif'],
        anglecia:["Anglecia"],
      },
      maxWidth: {
        container: "1470px",
      },
      colors: {
        btnhover: "#d9945f",
        btn:"#A6734B"
      },
    },
  },
  plugins: [],
}

