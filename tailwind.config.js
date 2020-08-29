/*
** TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/

const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    extend: {
      colors: {
        orange: {
          ...colors.orange,
          '500': '#D97604'
        }
      }
    }
  },
  variants: {},
  plugins: [
    require('@tailwindcss/ui')
  ],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js'
    ]
  }
}
