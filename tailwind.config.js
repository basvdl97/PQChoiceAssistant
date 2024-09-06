/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{vue, html}",
  ],
  theme: {
    extend: {
      colors: {
        // blue and green
        primary: '#3f529f',
        secondary: '#41b590',

        // white background
        tertiary: '#feffff',
      },
      screens: {
        'platform-viewport-breakpoint': '768px',
      }
    },
  },
  plugins: [],
}

