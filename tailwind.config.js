/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'colorful-gradient': 'linear-gradient(45deg, #F9A8D4, #FDA4AF, #FDBA74, #FDE047, #BEF264, #7DD3FC, #C4B5FD, #F9A8D4, #FDA4AF)'
      },
      keyframes: {
        moveBackground: {
          '0%': { backgroundPosition: 'bottom left' },
          '100%': { backgroundPosition: 'top right' }
        }
      },
      animation: {
        moveBackground: 'moveBackground 20s linear infinite'
      }
    },
  },
  plugins: [],
}

