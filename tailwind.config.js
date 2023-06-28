/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      default: [
        "Open Sans",
        "system - ui",
        "-apple - system",
        "Segoe UI",
        "Roboto",
        "Helvetica Neue",
        "Arial",
        "Noto Sans",
        "Liberation Sans",
        "sans - serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "Noto Color Emoji",
      ],
      primary: ["Montserrat", "sans - serif"],
      secondary: ["Poppins", "sans - serif"],
    },
    extend: {
      colors: {
        dark: "#000808",
        light: "#fdfcf7",
        primary: "#50edf0",
        secondary: "#eed131",
      },
    },
  },
  plugins: [],
};
