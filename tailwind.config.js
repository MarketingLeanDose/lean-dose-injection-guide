/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#EFFAF9', 100: '#D9F2F0', 200: '#B3E4E0', 300: '#80CFC9', 400: '#47B4AD',
          500: '#24978F', 600: '#187A74', 700: '#14625E', 800: '#124F4D', 900: '#0F3F3E', 950: '#072727',
        },
        accent: {
          50: '#FFF6EE', 100: '#FFE8D3', 200: '#FDCB9E', 400: '#F6A15A', 500: '#F08533', 600: '#C45A12', 700: '#9F470E',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 1px 2px rgba(15,63,62,0.04), 0 8px 24px -8px rgba(15,63,62,0.12)',
        lift: '0 2px 4px rgba(15,63,62,0.05), 0 18px 40px -12px rgba(15,63,62,0.20)',
      },
    },
  },
  plugins: [],
};
