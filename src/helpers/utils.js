const SECOND = 1000

const sleep = async (timeoutSecond) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeoutSecond)
  })
}

module.exports = {
  sleep,

  SECOND
}