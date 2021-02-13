const dbConfig = require('../../config')
const mongoose = require('mongoose')

const url = `mongodb://${ dbConfig.MongoURL }:${ dbConfig.MongoPort }/${ dbConfig.MongoDbName }`

/**
 * 连接
 */
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) {
    console.log('Connection Error:' + err)
  } else {
    console.log('Connection SUCCESS!')
  }
})

/**
  * 连接SUCCESS
  */
mongoose.connection.on('connected', function () {
  console.log('Mongoose connection open to ' + url)
})

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
  console.log('Mongoose connection error: ' + err)
})

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  console.log('Mongoose connection disconnected')
})

module.exports = mongoose