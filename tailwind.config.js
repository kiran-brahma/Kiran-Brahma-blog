/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};