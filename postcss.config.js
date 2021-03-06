const { resolve } = require('path')
const smartImport = require('postcss-import')
const precss = require('precss')
const autoprefixer = require('autoprefixer')

module.exports = {
  plugins: [
    smartImport({
      path: resolve('shared')
    }),
    precss,
    autoprefixer
  ]
}
