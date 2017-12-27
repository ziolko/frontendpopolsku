
const path = require('path')
const dir = require('node-dir')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { ANALYZE } = process.env

module.exports = {
  webpack: function (config) {
    if (ANALYZE) {
      config.plugins.push(new BundleAnalyzerPlugin({
        analyzerMode: 'server',
        analyzerPort: 8888,
        openAnalyzer: true
      }))
    }

    return config
  },

  exportPathMap: function () {
    const pagesDir = 'pages'

    const pages = dir.files(pagesDir, { sync: true })
      .filter(page => !page.includes('_'))
      .map(page => '/' + path.relative(pagesDir, page))
      .map(page => path.posix.format(path.parse(page)))
      .map(page => page.replace('index.js', ''))
      .map(page => page.replace('.js', ''))

    return pages.reduce((acc, page) => Object.assign(acc, { [page]: { page } }), {})
  }
}
