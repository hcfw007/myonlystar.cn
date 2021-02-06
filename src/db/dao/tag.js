const mongoose = require('../db.js')

const log = require('npmlog')
const PRE = 'Tag DB'

const userSchema = {
  name: String,
}

const Tag = mongoose.model('tag', userSchema)

const findTag = (tagInfo) => {
  log.verbose(PRE, `findTag(${ JSON.stringify(tagInfo) })`)
  return Tag.findOne(tagInfo)
}

const createTag = (tagInfo) => {
  log.verbose(PRE, `createTag(${ JSON.stringify(tagInfo) })`)
  return Tag.create(tagInfo)
}

const getTagList = () => {
  log.verbose(PRE, 'getTagList()')
  return Tag.findAll()
}

module.exports = {
  findTag,
  createTag,
  getTagList,
}