const log = require('npmlog')
const projectService = require('../service/project.service')

const PRE = 'Project Controller'

const updateFrontend = async (req, res) => {
  log.verbose(PRE, 'updateFrontend()')
  let version
  try {
    version = await projectService.getLatestFrontend()
  } catch (err) {
    res.json({
      result: 'failed',
      message: err.message
    })
  }

  res.json({
    result: 'success',
    data: {
      version
    }
  })
}

module.exports = {
  updateFrontend
}