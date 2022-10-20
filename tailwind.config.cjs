/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "dropdown-appear": {
          "0%": {
            opacity: 0,
            transform: "scale(0)",
          },
          "80%": {
            opacity: 0.8,
            transform: "scale(1.3)",
          },
          "100%": {
            opacity: 1,
            transform: "scale(1)",
          },
        },
      },
      animation: {
        "dropdown-appear": "dropdown-appear 0.25s ease-in",
      },
    },
  },
  plugins: [],
};
