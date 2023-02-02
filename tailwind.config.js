/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#242425",
        secondary: "#282A2D",
        tertiary: "#353739",

        "base-primary": "#2CA1C8",
      },
    },
    fontFamily: {
      fira: ["Fira Code", "monospace"],
      sans: ["Inter", "sans-serif"],
    },
  },
  plugins: [],
};
