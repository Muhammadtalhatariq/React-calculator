/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        border : "#DCDCDC",
        button : "#4A9500",
        buttonsec :"#22222280",
        footer : " #404040",
        icon : "#FB5B21",
        iconcol :"#E86C00",
        graylight: 'rgb(137, 137, 137)',
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

