/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1200px",
      xl: "1440px"
    },
    extend: {
      backgroundImage: {
        'blueBg': "url('images/image.png')",
      
      }
    },
  },
  plugins: [],
}

