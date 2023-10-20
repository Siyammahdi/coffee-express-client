/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rancho: ['Rancho', 'cursive'],
        raleway: ['Raleway', 'sans-serif']
      },
      colors: {
        'btn-bg': '#E3B577',
        'btn-text': '#242222',
        'primary-color': '#331A15',
        'card-bg': '#ECEAE3',
        'block-btn-bg': '#D2B48C'
      },
    },
  },
  plugins: [require("daisyui")],
}

