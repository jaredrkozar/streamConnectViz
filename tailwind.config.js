/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'navyBlue': {
          DEFAULT: '#00081F',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#CCFDFF',
          300: '#8FEFFF',
          400: '#52D5FF',
          500: '#14AFFF',
          600: '#0078D6',
          700: '#004799',
          800: '#00225C',
          900: '#00081F'
        },
      }
    }
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