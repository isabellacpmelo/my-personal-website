/**
 * @format
 * @type {import('tailwindcss').Config}
 */

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-1.5px)" },
          "50%": { transform: "translateX(1.5px)" },
          "75%": { transform: "translateX(-1.5px)" },
        },
      },
      animation: {
        shake: "shake 0.6s ease-in-out",
      },
    },
  },
  plugins: [],
};
