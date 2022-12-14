/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: "#010020",
        aqua: "#189DC7",
        blue: "#3D2FE8",
        cyan: "#00FFF0",
        purple: "#9E00FF",
        "black-navy": "#010020"
      },
      backgroundImage: {
        blurry: "url('/src/assets/blurry.svg')",
        cta: "url('/src/assets/cta-bg.svg')"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
