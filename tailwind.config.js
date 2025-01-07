/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '1280': '1280px',
      },
      width: {
        '128': '32rem',
        '1280': '1280px',
      },
      colors: {
        'first': '#14b8a6',
        'second': '#02ffe2',
        'third': '#b7fff7',
        'fourth': '#018071',
        'fifth': '#288076',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

