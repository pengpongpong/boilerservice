/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      text: ["Lexend", "sans-serif"],
      headline: ["Bruno Ace", "cursive"],
      ubuntu: ["Ubuntu", "sans-serif"]
    },
    colors: {
      red: "red",
      white: "white"
    },
    extend: {
      backgroundImage: {
        "hero-image": "url('https://res.cloudinary.com/dzvrnl80x/image/upload/v1688759836/boilerservice/hero_nysguj.jpg')"
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    themes: ["corporate"],
    prefix: "daisy_"
  }
}
