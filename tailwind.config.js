/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "blog/*.js", "blog/_includes/*.njk"],
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