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
      colors: {
        change: "black",
        gray: colors.coolGray,
      },
    },
  },
  variants: {},
  plugins: [],
};
