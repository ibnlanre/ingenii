const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "smoky-black": "#0F0F0F",
        "dark-puce": "#4C433C",
        "davys-grey": "#545454",
        "philippine-gray": "#8A8A8A",
        "silver-foil": "#B0B0B0",
        lotion: "#FAFAFA",
        "ghost-white": "#F9F8F9",
        begonia: "#FF7070",
        "venetian-red": "#CC1512",
        violet: "#8300EB",
        lavender: "#F3E7FD",
        "electric-violet": "#8F00FF",
        "pale-lavender": "#E4D3F1",
        "chinese-black": "#111111",
        "vampire-black": "#050505",
        gray: "#BBBBBB",
      },
      boxShadow: {
        need: "12px 12px 24px 0px #F0F0F0",
        card: "14px 14px 30px 0px #F0F0F0",
      },
      maxWidth: {
        "8xl": 1440,
      },
    },
  },
  plugins: [
    plugin(({ addVariant }) => {
      addVariant("clump", "@supports (font-size: clamp(1rem,2vw,3rem))");
    }),
  ],
};
