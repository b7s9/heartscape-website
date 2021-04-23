const colors = require('tailwindcss/colors')

module.exports = {
  purge: {
    content: ["_site/**/*.html"],
    options: {
      safelist: [],
    },
  },
  theme: {
    extend: {
      // screens: {
      //   'sm': { 'min': '640px', 'max': '767px' },
      //   'md': { 'min': '768px', 'max': '1023px' },
      //   'lg': { 'min': '1024px', 'max': '1279px' },
      //   'xl': { 'min': '1280px', 'max': '1339px' },
      //   '2xl': { 'min': '1440' },
      // },
      fontSize: {
        'sm': '0.64rem',
        'tiny': '0.8rem',
        'base': '1rem',
        'lg': '1.25rem',
        'xl': '1.56rem',
        '2xl': '1.95rem',
        '3xl': '2.44rem',
        '4xl': '3.05rem',
        '5xl': '3.81rem',
        '6xl': '4.77rem',
        '7xl': '5.96rem',
      },
      colors: {
        change: "black",
        yellow: colors.yellow,
        orange: colors.orange,
        green: colors.emerald,
        gray: colors.coolGray,
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['active'],
      textColor: ['active']
    }
  },
  plugins: [],
};
