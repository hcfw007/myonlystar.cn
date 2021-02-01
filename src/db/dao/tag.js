const mongoose = require('../db.js')

const userSchema = {
  name: String,
}

const Tag = mongoose.model('tag', userSchema)

const findTag = (tagInfo, callback) => {
  Tag.findOne(tagInfo).then((res) => {
    callback(res)
  })
}

const createTag = (tagInfo, callback) => {
  Tag.create(tagInfo).then((res) => {
    callback(res)
  })
}

module.exports = {
  findTag,
  createTag
}