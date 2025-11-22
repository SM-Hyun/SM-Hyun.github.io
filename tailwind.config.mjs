/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1A1A1A',
        secondary: '#666666',
        'light-90': '#E6E6E6',
        'light-80': '#C9C9C9FF',
        main: '#012464',
        'blue-60': '#006EFF',
        // 'red-60': '#990000',

        'common-0': '#000000',
        'common-100': '#FFFFFF',
      },
      fontSize: {
        xs: '11px',
        sm: '12px',
        sl: '13px',
        base: '14px',
        lg: '16px',
        xl: '18px',
        '2xl': '20px',
        '3xl': '22px',
        '4xl': '28px',
        '5xl': '32px',
      },
    },
  },
  plugins: [],
};
