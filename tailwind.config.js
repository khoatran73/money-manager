/** @type {import('tailwindcss').Config} */

const array12Col = Array.from({ length: 12 }, (_, i) => i + 1);

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      minWidth: {
        'dropdown': '230px',
      },
      maxWidth: {
        'dropdown': '400px',
      },
      boxShadow: {
        dropdown: '0 6px 16px 0 rgba(0,0,0,.08), 0 3px 6px -4px rgba(0,0,0,.12), 0 9px 28px 8px rgba(0,0,0,.05)'
      }
    },
  },
  plugins: [],
  safelist: [
    ...array12Col.map(x => `col-span-${x}`),
],
  important: 'body'
}
