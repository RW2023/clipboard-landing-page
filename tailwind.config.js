/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:
    process.env.NODE_ENV === 'production'
      ? {
          content: ['./**/*.html', './src/**/*.{js,css}'],
          options: {
            safelist: [], // Specify a safelist of classes that should not be purged
          },
        }
      : false,
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
