const blogController = require('./controller/blog.controller')

const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
  res.send('sb')
})

router.post('/blog/post', blogController.postBlog)

module.exports = router