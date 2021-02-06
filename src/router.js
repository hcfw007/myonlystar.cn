const blogController = require('./controller/blog.controller')
const tagController = require('./controller/tag.controller')

const express = require('express')
const router = express.Router()

router.get('/test', (req, res) => {
  res.send('sb')
})

// blogs
router.post('/blog/post', blogController.postBlog)
router.get('/blog/list', blogController.listBlog)
router.get('/blog/getById', blogController.getBlogById)

// tags

router.post('/tags/create', tagController.addTag)
router.get('/tags/list', tagController.listTag)

module.exports = router