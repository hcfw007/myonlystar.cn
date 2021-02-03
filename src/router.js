const blogController = require('./controller/blog.controller')

const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
  res.send('sb')
})

// blogs
router.post('/blog/post', blogController.postBlog)
router.get('/blog/list', blogController.listBlog)

module.exports = router