import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      screens: {
        xs: { max: '379px' },
        md: { max: '767px' },
        lg: { max: '1199px' },
        xl: { max: '1439px' },
      },
    },
  },
  plugins: [],
} satisfies Config;
