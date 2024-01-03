/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gradientColorStops: {
        yellow: "#F4FE85",
        purple: "#CB14F9",
      },

      fontFamily: { nanum: ["Nanum Brush Script", "cursive"]},
    },
  },
  plugins: [],
};
