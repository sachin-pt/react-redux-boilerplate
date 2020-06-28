import webpack from 'webpack'
import webpackConfig from '../config/webpack/index.js'
import paths from '../config/paths'
import rimraf from 'rimraf'
import logMessage from '../utils/logger'

console.log('Mode', process.env.NODE_ENV)

const compilerPromise = (name, compiler) => {
  return new Promise((resolve, reject) => {
    compiler.hooks.compile.tap(name, () => {
      logMessage(`[${name}] Compiling!`)
    })
    compiler.hooks.done.tap(name, stats => {
      if (!stats.hasErrors()) {
        return resolve()
      }
      return reject(new Error(`[${name}] Failed to compile`()))
    })
  })
}
const build = async () => {
  rimraf.sync(paths.build)
  const webpackCompiler = webpack(webpackConfig)
  const promise = compilerPromise('Webpack', webpackCompiler)
  webpackCompiler.watch({}, (error, stats) => {
    if (error || stats.hasErrors()) {
      logMessage(error || stats, 'error')
    }
    logMessage(stats.toString(webpackConfig.stats))
  })
  try {
    await promise
    logMessage('compilation done')
    process.exit()
  } catch (error) {
    logMessage(error, 'error')
    process.exit(1)
  }
}

build()
