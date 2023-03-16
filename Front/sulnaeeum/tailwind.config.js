/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        star : ['star'],
        preBl : ['preBl'],
        preB : ['preB'],
        preEB : ['preEB'],
        preEL : ['preEL'],
        preL : ['preL'],
        preM : ['preM'],
        preR : ['preR'],
        preSB : ['preSB'],
        preT : ['preT'],
      }
    },
  },
  plugins: [],
}