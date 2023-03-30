/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fontD: '#191919',
        fontED: '#333333'
      },
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
        mj : ['mj'],
        mjB : ['mjB'],
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}

