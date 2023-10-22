/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: ['./**/*.html', './src/**/*.{js,css}'],
  },
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(171, 66%, 44%)',
        'light-blue': 'hsl(233, 100%, 69%)',
      },
    },
  },
  plugins: [],
};
