/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tech: ["Share Tech Mono", "monospace"],
        montsettat: ["Montserrat", "sans-serif"],
      },
      colors: {
        "dark-blue": "#001220",
        "orange-home": "#FBAE3C",
      },
      height: {
        bgMax: "150%",
      },

      borderRadius: {
        "6xl": "3.5rem",
      },
      boxShadow: {
        minimal: "0 0 130px 0 var(--tw-ring-color)",
      },
      fontSize: {
        "12xl": "12rem",
      },

      zIndex: {
        max: 9999,
      },
      textShadow: {
        sm: "0 1px 2px var(--tw-shadow-color)",
        DEFAULT: "0 2px 4px var(--tw-shadow-color)",
        lg: "0 8px 16px var(--tw-shadow-color)",
      },
    },
  },
  plugins: [
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "text-shadow": (value) => ({
            textShadow: value,
          }),
        },
        { values: theme("textShadow") }
      );
    }),
  ],
};
