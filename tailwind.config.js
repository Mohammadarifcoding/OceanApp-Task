/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#fff",
        secondary: "#393E46",
        third: "#00ADB5",
        fourth: "#141515",
        themeFirstColor:'#007AFF',
        themelittleFirstColor:'#E6F2FF',
        themeSecondColor:'#F2F2F7'
      },
    },
  },
  plugins: [require("daisyui")],
};
