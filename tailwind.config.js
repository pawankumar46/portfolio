/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#08090B",
        muted: "#5A5C61",
        surface: "#F0EDE6",
        accent: "#CDF22B",
        field: "#08090B",
        ivory: "#FAF8F3",
      },
      fontFamily: {
        sans: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
