const mongoose = require('../db.js')

const log = require('npmlog')
const PRE = 'User DB'

const userSchema = {
  username: String,
  password: String,
}

const User = mongoose.model('user', userSchema)

const findUser = (userInfo) => {
  log.verbose(PRE, `findUser(${ JSON.stringify(userInfo) })`)
  return User.findOne(userInfo)
}

module.exports = {
  findUser
}