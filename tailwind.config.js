/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        beige: {
          300: "#CEB692",
          400: "#BBA584",
          500: "#A68F6D",
          600: "#958060",
        },
        black: {
          300: "#333333",
          400: "#292825",
          500: "#2B2A2A",
        },
        red: {
          300: "#D85040",
        },
        badge: {
          museum: "#CBA33E",
          monument: "#47C4D6",
          nature: "#43DC65",
          castle: "#E15050",
          lake: "#2F65EF",
          cave: "#979398",
          waterfall: "#51E5C2",
          gem: "#C764DF",
        },
      },
      screens: {
        touch: { max: "1024px" },
      },
    },
    fontFamily: {
      sans: ['"Montserrat"', "sans-serif"],
      secondary: ['"Overlock"'],
    },
  },
  plugins: [],
}
