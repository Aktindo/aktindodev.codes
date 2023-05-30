/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#131313",
        secondary: "#1B1B1B",
        tertiary: "#2C2C2C",

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
