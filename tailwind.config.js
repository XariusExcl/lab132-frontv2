/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.11ty.js", "blog/*.11ty.js", "_includes/*.njk"],
  theme: {
    extend: {
      colors: {
      'primary': '#000000',
      'secondary': '#FFD203',
      'accent': '#749801'
      }
    },
  },
  plugins: [],
}