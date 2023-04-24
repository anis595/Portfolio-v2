/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      screens: {
        phone: "380px",
        tablet: "834px",
        laptop: "1440px",
        desktop: "1920px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          phone: "3rem",
          tablet: "3rem",
          laptop: "6rem",
          desktop: "4rem",
        },
      },
      plugins: [],
    },
  },
};
