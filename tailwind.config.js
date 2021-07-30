module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ["DM Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
