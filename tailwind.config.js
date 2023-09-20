/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'menu': '0 -10px 0 0 rgba(30,41,59)',
        'menu-white': '0 -10px 0 0 white',
      },
      keyframes: {
        upDown: {
          '0%, 100%': {top: '0', left: '0'},
          '50%': {top: '-30px', left: '10px'},
        },
        upDown2: {
          '0%, 100%': {top: '0'},
          '50%': {top: '100px'},
        },
        upDown3: {
          '0%, 100%': {top: '0', left: '0'},
          '50%': {top: '-30px', left: '10px'},
        },
        upDown4: {
          '0%, 100%': {top: '0'},
          '50%': {top: '50px'},
        },
        upDown5: {
          '0%, 100%': {top: '0'},
          '50%': {top: '5px'},
        },
        marqueeSlide:{
          '0%':{transform: 'translateX(-100%)'},
          '100%':{transform: 'translateX(100%)'},
        }
      },
      animation: {
        upDown: 'upDown 5s ease-in-out infinite',
        upDown2: 'upDown3 12s ease-in-out infinite ',
        upDown3: 'upDown4 7s ease-in-out infinite ',
        upDown4: 'upDown2 15s ease-in-out infinite ',
        upDown5: 'upDown5 10s ease-in-out infinite ',
        marqueeSlide: 'marqueeSlide 20s linear infinite',
      },
      color: {
        'orange': '#ff8f00'
      },
      backgroundImage: {
        'footer': "url('https://dabram.ir/file/image/footer.png')",
      },
    },
  },
  plugins: [],
}

