/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        'custom-color': 'rgba(23, 26, 32, 0.8)',
      },
    },
  },
  plugins: [],
}

