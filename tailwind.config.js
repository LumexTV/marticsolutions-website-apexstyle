/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'impact': ['Impact', 'sans-serif'],
      },
      colors: {
        // Neues Farbschema: Weißer Hintergrund, schwarze Schrift, helleblaue Akzente
        'brand-light-blue': '#3B82F6',
        'brand-blue': '#2563EB',
        'brand-dark': '#1F2937',
        'brand-light': '#F9FAFB',
        'brand-gray': '#6B7280',
        'brand-gray-light': '#E5E7EB',
      },
    },
  },
  plugins: [],
};
