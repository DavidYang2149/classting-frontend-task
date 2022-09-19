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
        'classting-green': '#00c896',
        'classting-font-bold': '#00281e',
        'classting-font-normal': '#00503c',
        'classting-font-light': '#00785a',
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
}
