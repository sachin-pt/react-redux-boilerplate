import chalk from 'chalk'
export default (message, level = 'info') => {
  const color = level === 'error' ? 'red' : level === 'warning' ? 'yellow' : 'green'
  console.log(`[${new Date().toISOString()}]`, chalk[color](message))
}
