/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    "./sections/**/*.{js,ts,jsx,tsx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'jet': "#312D2D",
        'cobalt-blue': "#5588FF",
        'eerie-black': '#151717',
        "neon-blue": "#7F94FF",
        "eerie-hover": "#191b1b",
        "amber": "#FFBE0B"
      },
      fontFamily: {
        inter: ['var(--font-inter)']
      }
    },
  },
  plugins: [],
}