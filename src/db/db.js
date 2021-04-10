const dbConfig = require('../config/config')
const mongoose = require('mongoose')
const log = require('npmlog')
const { SECOND, sleep } = require('../helpers/utils')

const PRE = 'db'
const url = `mongodb://${ dbConfig.MongoURL }:${ dbConfig.MongoPort }/${ dbConfig.MongoDbName }`

log.info(PRE, `mongo url: ${ url }`)
/**
 * 连接
 */

let isConnecting = false
const connect = () => {
  if (isConnecting) {
    log.info(PRE, 'connect() is already connecting, skip')
  }

  isConnecting = true
  mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    isConnecting = false
    if (err) {
      log.error(PRE, `Mongoose connection error ${err}`)
    } else {
      log.info(PRE, 'Mongoose connected')
    }
  })
}

connect()

/**
  * 连接SUCCESS
  */
mongoose.connection.on('connected', function () {
  log.info(PRE, `Mongoose connection open to ${ url }`)

  isConnecting = false
})

/**
 * 连接异常
 */
mongoose.connection.on('error', async function (err) {
  log.error(PRE, `Mongoose connection error ${ err }, will reconnect in 5`)

  isConnecting = false
  await sleep(5 * SECOND)
  connect()
})

/**
 * 连接断开
 */
mongoose.connection.on('disconnected', async function () {
  log.warn(PRE, 'Mongoose connection disconnected, will reconnect in 5')

  isConnecting = false
  await sleep(5 * SECOND)
  connect()
})

module.exports = mongoose