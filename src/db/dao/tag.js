const mongoose = require('../db.js')

const userSchema = {
  name: String,
}

const Tag = mongoose.model('tag', userSchema)

const findTag = (tagInfo) => {
  return Tag.findOne(tagInfo)
}

const createTag = (tagInfo) => {
  return Tag.create(tagInfo)
}

module.exports = {
  findTag,
  createTag
}