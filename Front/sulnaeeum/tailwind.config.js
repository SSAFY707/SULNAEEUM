/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        jump: {
          from: { top: '0px' },
          to: { top: '-4px' }
        }
      },
      animation: {
        jump: 'jump 0.4s ease-in-out Infinite Alternate'
      },
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

