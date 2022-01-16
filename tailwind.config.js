module.exports = {
  purge: [
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      'zinc-900': 'rgb(24 24 27)',
      'zinc-800': 'rgb(39 39 42)',
      'orange-600': 'rgb(234 88 12)',
      'white': '#fff',
      'stone-800': 'rgb(41 37 36)',
      'zinc-400': 'rgb(161 161 170)',
      'gray-800': 'rgb(31 41 55)',
      'gray-50': 'rgb(249 250 251)',
      'gray-100': 'rgb(243 244 246)',
      'gray-200': 'rgb(229 231 235)',
      'green-400': 'rgb(74 222 128)',
      'green-600': 'rgb(22 163 74)',
      'purple-600': 'rgb(147 51 234)',
      'red-400': 'rgb(248 113 113)',
      'red-600': 'rgb(220 38 38)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
