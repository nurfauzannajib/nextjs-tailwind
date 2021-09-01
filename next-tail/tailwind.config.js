module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#E9F9FF",
          410: "#0066FF",
          420: "#94E0FF",
        },
        grey: {
          10: "#5F727B",
        },
        green: {
          10: "#4CAF50",
        },
      },
      fontFamily: {
        mono: "Manrope",
        serif: "Work Sans",
        sans: "Open Sans",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
