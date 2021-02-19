const path = require('path')
const express = require('express')
const cors = require('cors')
const AppPort = require('./config').AppPort

const log = require('npmlog')
log.level = 'verbose'

const apiRouter = require('./src/router')

const app = express()
const port = AppPort

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cors())

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'index.html')))

app.use('/api', apiRouter)

app.use(express.static('frontend'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
