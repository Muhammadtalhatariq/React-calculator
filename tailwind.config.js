/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        button : "#4A9500",
        footer : " #404040",
        icon : "#FB5B21",
        graylight: 'rgb(138, 138, 138)',
        graydark: 'rgb(47, 47, 47)',
      },
      backgroundImage: {
        'hero-pattern': "url('/bg.jfif')",
        'navbar': "url('/navbar.png')",
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

