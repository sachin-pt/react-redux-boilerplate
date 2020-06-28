import path from 'path'

const resolveApp = relativePath => path.resolve(relativePath)
export default {
  entry: resolveApp('./src'),
  build: resolveApp('build'),
  indexHtml: resolveApp('src/index.html'),
  reportHtml: resolveApp('report.html'),
  store: resolveApp('src/store'),
  src: resolveApp('src'),
  assets: resolveApp('src/assets'),
  pages: resolveApp('src/pages'),
  components: resolveApp('src/components'),
  constants: resolveApp('src/constants'),
}
