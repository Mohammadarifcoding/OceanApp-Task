/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        default: "#212B36",
        primary: "#007BFF",     // Changed to a blue primary color
        secondary: "#0056B3",   // Changed to a deeper blue for secondary
        tertiary: "#CCE5FF",    // Light blue for tertiary
        grayDefault: "#637381",
        orangeDefault: "#FF6636", // Keeping the orange unchanged, if needed for contrast
        backgroundColor: "#FBFBFB", // Light mode background color
        darkBackground: "#121212", // Dark mode background color
        lightBanner: "#FFFFFF", // Light mode banner background color
        darkBanner: "#1F1F1F", // Dark mode banner background color
        lightText: "#333333", // Light mode text color
        darkText: "#EAEAEA", // Dark mode text color
        darkGray: "#B0B0B0", // Additional color for better contrast
        lightGray: "#444444", // Additional color for better contrast
    }
    
    },
  },
  plugins: [require("daisyui")],
};
