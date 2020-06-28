
import paths from '../paths'
import HtmlWebPackPlugin from 'html-webpack-plugin'
import BundleAnalyzer from 'webpack-bundle-analyzer'
import webpack from 'webpack'

export default [
  new webpack.HashedModuleIdsPlugin(), // so that file hashes don't change unexpectedly
  new BundleAnalyzer.BundleAnalyzerPlugin({
    analyzerMode: 'static',
    openAnalyzer: false,
    defaultSizes: 'gzip',
    reportFilename: paths.reportHtml
  }),
  new HtmlWebPackPlugin({
    template: paths.indexHtml,
    filename: './index.html'
  })
]
