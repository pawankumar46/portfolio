/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A0F",
        night: "#12121A",
        violet: { DEFAULT: "#7C3AED", soft: "#A78BFA" },
        coral: "#FF4D6D",
        lime: "#C6F432",
        mist: "#A1A1B5",
      },
      fontFamily: {
        display: ['"Space Grotesk"', "system-ui", "sans-serif"],
        sans: ['"Inter"', "system-ui", "sans-serif"],
      },
      maxWidth: {
        page: "88rem",
      },
    },
  },
  plugins: [],
};
