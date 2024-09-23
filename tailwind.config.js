// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        "poppins-regular": ['Poppins-regular', 'sans-serif'],
        "poppins-medium": ['Poppins-medium', 'sans-serif'],
        "poppins-bold": ['Poppins-bold', 'sans-serif'],
        "poppins-semibold": ['Poppins-semiBold', 'sans-serif']


      },
    },
  },
  plugins: [],
}
