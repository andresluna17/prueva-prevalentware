const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      ...colors,
      grayNavBar: "#2F3337",
      grayLayout: "#E5E7EB"
    },
    fontFamily: {
      "sans": ["Roboto", "Helvetica", "Arial", "sans-serif"]
    },
    fontSize: {
      ...defaultTheme.fontSize,
      xxs: ".563rem"
    },
    extend: {}
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('daisyui'),
  ]
};
