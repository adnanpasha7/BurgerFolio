/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "2rem",
        lg: "4rem",
      },
    },
    extend: {
      fontFamily: {
        fredoka: ['"Fredoka One"', "cursive"],
        // chewy: ["Chewy", "cursive"],
        bangers: ["Bangers", "cursive"],
        inter: ["Inter", "sans-serif"],
        caveat: ["Caveat", "cursive"],
      },
      screens: {
        sm: "375px",
        md: "768px",
        lg: "1200px",
      },
      keyframes: {
        wave: {
          "0%": { transform: "rotate(0deg)" },
          "10%": { transform: "rotate(14deg)" },
          "20%": { transform: "rotate(-8deg)" },
          "30%": { transform: "rotate(14deg)" },
          "40%": { transform: "rotate(-4deg)" },
          "50%": { transform: "rotate(10deg)" },
          "60%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
      },
      animation: {
        wave: "wave 2s infinite",
      },
    },
  },
  plugins: [],
};
