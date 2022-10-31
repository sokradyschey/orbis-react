/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        // Labware primary colors
        'lwblue': '#0d488f',
        'lime': '#8ec74e',
        'mutedblue': '#819FC2',
        'accentblue': '#bccbdc',
        // Labware supplementary colors
        'bronze': '#c88600',
        'lightblue': '#47a9e4',
        'purple': '#965c8d',
        'rose': '#d67979',
        'midnight': '#042539',
        // Labware alert colors
        'alertgreen': '#06aa51',
        'lightalertgreen': '#b4e6cb',
        'darkalertgreen': '#04873f',
        'alertred': '#c14f50',
        'lightalertred': '#e3b0b0',
        'darkalertred': '#9c2425',
        // Labware neutral colors
        'white': '#ffffff',
        'black': '#000000',
        'charcoal': '#444444',
        'gray75': '#737373',
        'gray50': '#8f8f8f',
        'gray30': '#c7c7c7',
        'gray15': '#dbdbdb',
        'gray5': '#f6f6f6'
      }
    }
  },
  plugins: []
}
