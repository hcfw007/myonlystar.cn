const blogController = require('./controller/blog.controller')
const tagController = require('./controller/tag.controller')
const projectController = require('./controller/project.controller')
const fileController = require('./controller/file.controller')

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

router.post('/tag/post', tagController.postTag)
router.get('/tag/list', tagController.listTag)

// project

router.get('/project/updateFrontend', projectController.updateFrontend)

// files

router.post('file/upload', fileController.uploadFile)

module.exports = router