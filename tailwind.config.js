const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  important: true,
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{html,ts}"],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        gotham: "'Gotham', sans-serif",
        gotham100: "'Gotham Thin', sans-serif",
        gotham200: "'Gotham XLight', sans-serif",
        gotham300: "'Gotham Light', sans-serif",
        gotham400: "'Gotham', sans-serif",
        gotham500: "'Gotham Medium', sans-serif",
        gotham600: "'Gotham Bold', sans-serif",
        gotham700: "'Gotham Black', sans-serif",
        gotham800: "'Gotham Ultra', sans-serif",
        dankMono: "'Dank Mono', monospace",
      }
    },
  },
  variants: {
    extend: {},
  },
  jit: true,
  plugins: [],
};
