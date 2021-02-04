const mongoose = require('../db.js')

const userSchema = {
  username: String,
  password: String,
}

const User = mongoose.model('user', userSchema)

const findUser = (userInfo) => {
  return User.findOne(userInfo)
}

module.exports = {
  findUser
}