/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'lightGrey': '#f6f6f6',
        'lightBlue': '#007Aff'
      },
      backgroundImage: {
        'bg_picture': 'url("/assets/bank.jpeg")'
      },
    },
  },
  plugins: [],
}
