/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./views/**/*.ejs",
    './views/partials/**/*.ejs',
    './index.js',
    '/views/style/**/*.css'
    
  ],
  theme: {
    extend: {},
  },
  plugins: [ require('daisyui')],
}

