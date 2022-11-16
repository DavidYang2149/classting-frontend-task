/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'random-quiz-green': '#00c896',
        'random-quiz-font-bold': '#00281e',
        'random-quiz-font-normal': '#00503c',
        'random-quiz-font-light': '#00785a',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
