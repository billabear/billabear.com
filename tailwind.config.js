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
      },
      width: {
        '128': '32rem',
      },
      colors: {
        'first': '#14b8a6',
        'second': '#02ffe2',
        'third': '#51ffec',
        'fourth': '#018071',
        'fifth': '#288076',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};

