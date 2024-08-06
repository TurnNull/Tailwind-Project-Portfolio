/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        primary: '#9333ea',
        secondary: '#6b21a8',
        thiry: '#d8b4fe',
        slate: '#374151',
        dark: '#0f172a'
      },
      screen: {
        '2xl': '1320px' 
      }
    },
  },
  plugins: [
    require('tailwind-typewriter')({
      wordsets: {
        myTitle: {
          words: ["College Student", "Laravel Enthusiast"],
          delay: 2
        }
      }
    })
  ],
}

