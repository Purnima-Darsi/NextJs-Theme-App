/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: 'var(--color-primary)',
      background: 'var(--color-background)', 
      text: 'var(--color-text)'
    }
  }
};
