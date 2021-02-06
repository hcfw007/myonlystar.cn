const log = require('npmlog')
const tagModel = require('../db/dao/tag')

const PRE = 'Tag Controller'

const addTag = async (req, res) => {
  log.verbose(PRE, 'addTag()')

  const body = req.body

  await tagModel.createTag(body)

  res.json({
    result: 'success'
  })
}

const listTag = async (req, res) => {
  log.verbose(PRE, 'listTag()')
  const result = await tagModel.listTag()

  res.json({
    result: 'success',
    data: result
  })
}

module.exports = {
  addTag,
  listTag,
}