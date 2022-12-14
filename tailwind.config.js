/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#202428",
        "dark-prime": "#141A1F",
        "primary-2": "#262D33",
        secondary: "#8BCAE3",
        "txt-prime": "#fff",
      },
    },
  },
  plugins: [],
};
