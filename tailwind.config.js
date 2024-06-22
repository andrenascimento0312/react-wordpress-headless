module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#090D1F',
      },
    },
  },
  variants: {},
  plugins: [
    // require('@tailwindcss/aspect-ratio')
  ],
}