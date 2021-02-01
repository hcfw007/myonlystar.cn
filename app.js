const path = require('path')
const express = require('express')

const apiRouter = require('./src/router')

const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'frontend', 'index.html')))

app.use('/api', apiRouter)

app.use(express.static('frontend'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
