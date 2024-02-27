/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('https://www.kamoto.ai/assets/images/shapes/stripe-dark.svg')",
      },
    },
  },
  plugins: [],
};
