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
        secondary: "#8BCAE3",
        "txt-prime": "#fff",
      },
    },
  },
  plugins: [],
};
