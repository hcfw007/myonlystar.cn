const OS = require('os')
const child_process = require('child_process')
const path = require('path')

const tempDir = OS.tmpdir()

const getLatestFrontend = async () => {
  child_process.execSync('rm -rf frontend', { cwd: tempDir })
  child_process.execSync('git clone https://github.com/hcfw007/myonlystar.cn.git frontend --depth=1', { cwd: tempDir })
  const version = child_process.execSync('cat package.json | grep version | head -1 | awk -F: \'{ print $2 }\' | sed \'s/[\\",]//g\' | tr -d \'[[:space:]]\'', { cwd: path.join(tempDir, 'frontend') })
  child_process.execSync('npm install', { cwd: path.join(tempDir, 'frontend') })
  child_process.execSync('npx vite build', { cwd: path.join(tempDir, 'frontend') })
  child_process.execSync('rm -rf /app/frontend', {})
  child_process.execSync('cp -r dist /app/frontend', { cwd: path.join(tempDir, 'frontend') })
  return version.toString()
}

module.exports = {
  getLatestFrontend
}