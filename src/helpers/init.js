const projectService = require('../service/project.service')
const log = require('npmlog')

const PRE = 'init'

const init = () => {
  log.verbose(PRE, 'init frontend')
  projectService.getLatestFrontend()
}

module.exports = init