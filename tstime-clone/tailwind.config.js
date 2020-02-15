module.exports = {
  theme: {
    extend: {},
    colors: {
      orange: {
        '100': '#FCEA42',
        '200': '#FCE130',
        '300': '#F5D230',
        '400': '#FBCD2D',
        '500': '#F2B72B',
      },
      primary: "#4A4B4C"
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
};
