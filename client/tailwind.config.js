/** @type {import('tailwindcss').Config} */
export default {
  content: [
  "./index.html",
  "./src/**/*.{js,jsx,ts,tsx}",
  "./src/**/*.{html}"
],
  theme: {
    extend: {
      colors: {
        cream: "#FFF5E4",
        "soft-pink": "#FADADD",
        "vanilla-beige": "#F8EDEB",
        "light-brown": "#C89F9C",
        "chocolate-brown": "#5C3A21",
        "strawberry-pink": "#FF8FAB",
        "soft-peach": "#FFD6D6",
        "dark-brown": "#3A2E2A",
        "soft-gray": "#6B6B6B",
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        poppins: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        "cake": "1.5rem",
      }
    },
  },
  plugins: [],
}
