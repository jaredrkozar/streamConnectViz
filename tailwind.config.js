/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
          'fade-in-down': {
              '0%': {
                  opacity: '0',
              },
              '100%': {
                  opacity: '1',
              },
          }
      },
      animation: {
          'fade-in-down': 'fade-in-down 0.2s ease-out'
      }
  },
  },
  transitionProperty: {
    'width': 'width',
    'max-width': 'max-width',
  },
  plugins: [],
  variants: {
    extend: {
      border: ['focus'],
      width: ["responsive", "hover", "focus"]
    }
  },
}