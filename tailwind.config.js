/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'black': '#000000',
      'Blueviolet': '#6556FF',
      'semiblueviolet': 'rgba(101, 86, 255, 0.15)',
      'midnightblue': '#222C44',
      'kellygreen': "#43C639",
      "charcoal": "#2D2F30",
      'cornflowerblue': "#699BF7",
      'paleblue': '#D5EFFA',
      'ultramarine': '#1A21BC',
      'slategray': '#57595F',
      'lightkblue': '#F6FAFF',
      'grey500': '#ECECEC',
      'red': '#B40000',
      'gold': '#FFB900',
      'darkgray': 'rgba(54, 54, 54, 0.75)',
      'darkbrown': '#352E2E',
      'lightgray': '#A3A7AD',
      'gunmetalgray': '#363636',
      'gray-blue': 'rgba(105, 120, 131, 0.16)',
      'dark-red': 'rgba(44, 9, 11, 0.8)',

    },
    fontSize: {
      xs: ['0.75rem', { lineHeight: '1rem' }],
      sm: ['0.875rem', { lineHeight: '1.25rem' }],
      base: ['1rem', { lineHeight: '1.5rem' }],
      lg: ['1.125rem', { lineHeight: '1.75rem' }],
      xl: ['1.25rem', { lineHeight: '1.75rem' }],
      '2xl': ['1.5rem', { lineHeight: '2rem' }],
      '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
      '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
      '5xl': ['3rem', { lineHeight: '1' }],
      '6xl': ['3.75rem', { lineHeight: '1' }],
      '7xl': ['4.5rem', { lineHeight: '1' }],
      '8xl': ['6rem', { lineHeight: '1' }],
      '9xl': ['8rem', { lineHeight: '1' }],
      '55xl': ['55px', { lineHeight: '1' }],
      '22xl': ['22px', { lineHeight: '1' }],

    },
    extend: {},
  },
  plugins: [],
}