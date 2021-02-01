const blogModel = require('../db/dao/blog')

const postBlog = async (req, res) => {

  const body = req.body
  await blogModel.postBlog(body)

  res.json({
    result: 'success'
  })
}

module.exports = {
  postBlog
}