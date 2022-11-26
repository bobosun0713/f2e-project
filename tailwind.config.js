/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{vue,ts,tsx,js,jsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '1440px',
      xl: '1920px'
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: '#007fab',
          dark: '#003a4f',
          tint: '#b0d2de'
        },
        secondary: {
          DEFAULT: '#ffc37d',
          dark: '#a46039',
          tint: '#ffe2a9'
        },
        highlight: {
          DEFAULT: '#ff5136',
          dark: '#cd331a',
          tint: '#ffb5a4'
        },
        gray: {
          100: '#000000',
          80: '#666666',
          60: '#666666',
          40: '#999999',
          20: '#cccccc',
          0: '#ffffff'
        }
      }
    }
  },
  plugins: []
};
