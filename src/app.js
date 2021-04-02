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

const frontend = path.join(config.FrontendDir, 'frontend')
const index = path.join(frontend, 'index.html')

if (!config.NoFrontend) {
  log.info(PRE, 'init frontend')
  init()

  app.get('/', (req, res) => res.sendFile(index))
  app.get('/pages/*', (req, res) => res.sendFile(index))
  app.use(express.static(frontend))
} else {
  log.info(PRE, 'init frontend skipped')
}

app.use('/api', apiRouter)


app.listen(port, () => console.log(`app started on port ${port}!`))
