/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        // Apex Light Theme Palette
        'apex-bg': '#F8FAFC',          // Slate-50 (Off-white)
        'apex-bg-soft': '#F1F5F9',     // Slate-100 (Slightly darker)
        'apex-navy': '#0F172A',        // Deep Slate/Navy (Slate-900)
        'apex-navy-light': '#334155',  // Lighter Navy (Slate-700)
        'apex-gray': '#64748B',        // Cool Gray (Slate-500)
        'apex-blue': '#3B82F6',        // Primary Blue
        'apex-cyan': '#06B6D4',        // Accent Cyan
        'apex-border': '#E2E8F0',      // Slate-200
      },
      backgroundImage: {
        'apex-gradient': 'linear-gradient(135deg, #E0F2FE 0%, #F0F9FF 100%)', // Very light blue gradient for backgrounds
        'apex-blue-gradient': 'linear-gradient(to right, #3B82F6, #06B6D4)',  // Button/Accent gradient
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      boxShadow: {
        'apex-card': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)', // Soft shadow
        'apex-glow': '0 0 20px rgba(59, 130, 246, 0.15)', // Blue glow
      }
    },
  },
  plugins: [],
};
