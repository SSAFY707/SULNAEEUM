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
        },
        flow : {
          from: {background: 'linear-gradient(to-right, rgb(45 212 191), rgb(52 211 153))'},
          to: {background: 'linear-gradient(to-left, rgb(45 212 191), rgb(52 211 153))'}
        }
      },
      animation: {
        jump: 'jump 0.4s ease-in-out Infinite Alternate',
        flow: 'flow 0.5s ease-in'
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

