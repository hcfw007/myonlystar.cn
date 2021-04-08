const path = require('path')
const express = require('express')
const cors = require('cors')
const config = require('./config/config')
const init = require('./helpers/init')

const log = require('npmlog')
log.level = 'verbose'
const PRE = 'app'

const apiRouter = require('./router')

const app = express()
const port = config.AppPort

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

if (!config.NoFrontend) {
  log.info(PRE, 'init frontend')
  init()

  app.get('/', (req, res) => res.sendFile(path.join(config.FrontendDir, 'frontend', 'index.html')))
  app.get('/pages/*', (req, res) => res.sendFile(path.join(config.Frontend, 'frontend', 'index.html')))
  app.use(express.static(path.join(config.FrontendDir, 'frontend')))
} else {
  log.info(PRE, 'init frontend skipped')
}

app.use('/api', apiRouter)


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
