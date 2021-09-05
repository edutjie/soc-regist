module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      textColor: {
        primary: "#0b0c22",
        brownie: "#996e5c",
        danger: "#e3342f",
        highlight: "#fffcfd",
        highlight2: "#7a8ea7",
        darkbrownie: "#3e2f2a",
      },
      colors: {
        gradient1: "#fcd0a3",
        gradient2: "#7a8ea7",
        gradient3: "#eeebe3",
        tosca: "#1ca390",
        tosca2: "#118575",
      },
      backgroundImage: (theme) => ({
        "wallpaper": "url('/src/images/wallpaper2.jpg')",
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
