const mongoose = require('../db.js')

const log = require('npmlog')
const PRE = 'Tag DB'

const tagSchema = {
  name: String,
  date: {
    type: Date,
    default: Date.now,
  },
  deleted: {
    type: Boolean,
    default: false,
  },
}

const Tag = mongoose.model('tag', tagSchema)

const findTag = (tagInfo) => {
  log.verbose(PRE, `findTag(${ JSON.stringify(tagInfo) })`)
  return Tag.findOne(tagInfo)
}

const postTag = (tagInfo) => {
  log.verbose(PRE, `postTag(${ JSON.stringify(tagInfo) })`)
  return Tag.create(tagInfo)
}

const listTag = () => {
  log.verbose(PRE, 'getTagList()')
  return Tag.find({ deleted: false }).sort('-date')
}

module.exports = {
  findTag,
  postTag,
  listTag,
}