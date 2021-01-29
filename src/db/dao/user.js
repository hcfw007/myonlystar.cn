const mongoose = require('../db.js')

const userSchema = {
  username: String,
  password: String,
}

const User = mongoose.model('user', userSchema)

const findUser = (userInfo, callback) => {
  User.findOne(userInfo).then((res) => {
    callback(res)
  })
}

module.exports = {
  findUser
}