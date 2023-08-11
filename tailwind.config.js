/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx,mdx}",
    "./content/**/*.{md,mdx}",
  ],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        slate: {
          '950': '#374151', // Define slate-950 color
          '50': '#F9FAFB', // Define slate-50 color
        },
      },
      typography: {
        DEFAULT: {
          css: {
            color: 'inherit',

            h1: {
              color: 'var(--color-slate-950)', // Set h1 color to slate-950
            },
            h2: {
              color: 'var(--color-slate-950)', // Set h2 color to slate-950
            },
            h3: {
              color: 'var(--color-slate-950)', // Set h3 color to slate-950
            },
            blockquote: {
              color: 'inherit', // Set blockquote color to inherit from surrounding text
            },
            code: {
              color: 'inherit', 
                // Set blockquote color to inherit from surrounding text
            },
            a: {
              color: 'var(--color-slate-950)', // Set h3 color to slate-950
              
            },
           li: {
              color: 'var(--color-slate-950)', // Set h3 color to slate-950
              
            },
            h4: {
              color: 'var(--color-slate-950)', // Set h3 color to slate-950
              
            },
            p:{              color: 'var(--color-slate-950)', // Set h3 color to slate-950
          },



          },
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("daisyui"),
  ],
};