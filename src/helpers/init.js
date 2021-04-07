const projectService = require('../service/project.service')
const log = require('npmlog')
const fs = require('fs')
const path = require('path')

const PRE = 'init'

const init = () => {
  log.verbose(PRE, 'init frontend')
  const frontendExists = fs.existsSync(path.join(__dirname, '..', '..', 'frontend', 'index.html'))
  if (frontendExists) {
    log.info(PRE, 'frontend already exists')
    return
  }
  log.info(PRE, 'frontend not found, will get latest version...')
  projectService.getLatestFrontend()
}

module.exports = init