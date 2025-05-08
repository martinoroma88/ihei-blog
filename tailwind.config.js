// tailwind.config.js
module.exports = {
  mode: 'jit',
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './content/**/*.md'
  ],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "champagne": "#e8e0a9ff",
        "turquoise": "#bce3cbff",
        "cyan": "#01b5e2ff",
        "violet": "#6b77d1ff",
        "pink": "#d6b0c7ff",
        "azure": "#00B5E2",
        "blue": "#11202C",
        "lightblue": "#1d3649",
        "lighterblue": "#234158",
        "light": "#f7f7f7"
      }
    },
    fontFamily: {
      "sans": ["Merriweather Sans", "Noto Sans Arabic", "sans-serif"],
      "serif": ['Merriweather', "Noto Serif Arabic", 'serif'],
    },
    typography: (theme) => ({
      DEFAULT: {
        css: {
          color: theme('colors.lightblue'),
        },
      },
    }),
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")]
};
