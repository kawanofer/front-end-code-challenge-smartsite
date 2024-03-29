import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: '#333333',
        lightText: '#e5e5e5',
        mediumText: '#939393',
        lightGrey: '#808080',
        boxBGColor: '#F5F5F5',
        yellow: '#FFB612',
        red: '#dc0a17',
        green: '#2FC022',
        black: '#000',
        white: '#fff'
      }
    }
  },
  plugins: []
}
export default config
