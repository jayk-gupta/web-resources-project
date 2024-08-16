/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      pacifico: ["Pacifico", "cursive"],
      montserrat: ['Montserrat', "sans-serif"],
      ultra: ["Ultra", "serif"],
      francois: ["Francois One", "sans-serif"],
      merriweather: ["Merriweather", "serif"],
      lobster: ['Lobster', "cursive"]
    },
    boxShadow: {
      "3xl": "0 1px 8px 2px rgba(75,0,94,0.2)",
      "4xl": "0 1px 15px 4px rgb(75,0,94,0.4)",
      "xl" : "0px 7px 29px 0px rgba(100, 100, 111, 0.2)"
    },
    dropShadow: {
      xl: "0 5px 15px rgb(78, 70, 55,0.3)",
    },
    colors: {
      grape: {
        50: "#f3d9fa",
        100: "#eebefa",
        200: "#862e9c",
        300: "#4b005e",
      },
      white:"#fff" ,
      extend: {},
    },
    plugins: [],
  },
};
