// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        "champagne": "#e8e0a9ff",
        "turquoise": "#bce3cbff",
        "cyan": "#01b5e2ff",
        "violet": "#6b77d1ff",
        "pink": "#d6b0c7ff"
      }
    },
    fontFamily: {
      "sans": ["Merriweather Sans", "sans serif"],
      "serif": ['Merriweather', 'serif'],
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.700'),
        },
      },
    }),

  },
  plugins: [require("@tailwindcss/typography")]
};
