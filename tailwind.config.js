/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),
  require("daisyui")
],
}
