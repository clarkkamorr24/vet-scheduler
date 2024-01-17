import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      'white': '#ffffff',
      'orange': '#FF630B',
      'medium-orange': "#FF9447",
      'white-orange': '#FFE0CE',
      'gray': "#D8D3CC",
      'light-gray': "#9D9C9C",
      'dark': "#1C1C1E",
      'medium-dark': "#323234",
      'light-dark': "#8D8D8E",
      'yellow': "#F3F2F0",
      'light-yellow': "#F3F2F0"
    },
  },
  plugins: [require("tw-elements/dist/plugin.cjs")],
}
export default config
