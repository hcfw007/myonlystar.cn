const dbConfig = require('../../config')
const mongoose = require('mongoose')
const log = require('npmlog')

const PRE = 'db'
const url = `mongodb://${ dbConfig.MongoURL }:${ dbConfig.MongoPort }/${ dbConfig.MongoDbName }`

log.info(PRE, `mongo url: ${ url }`)
/**
 * 连接
 */
mongoose.connect(url, { useNewUrlParser: true }, (err) => {
  if (err) {
    log.error(`Mongoose connection error ${err}`)
  } else {
    log.info(PRE, 'mongoose connect')
  }
})

/**
  * 连接SUCCESS
  */
mongoose.connection.on('connected', function () {
  log.info(PRE, `Mongoose connection open to ${ url }`)
})

/**
 * 连接异常
 */
mongoose.connection.on('error', function (err) {
  log.error(`Mongoose connection error ${ err }`)
})

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
  log.warn('Mongoose connection disconnected')
})

module.exports = mongoose