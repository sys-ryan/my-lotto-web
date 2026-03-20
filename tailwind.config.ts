import type { Config } from 'tailwindcss'

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ball: {
          yellow: '#FBC400',
          blue: '#69C8F2',
          red: '#FF7272',
          gray: '#AAAAAA',
          green: '#B0D841',
        },
      },
    },
  },
  plugins: [],
} satisfies Config
