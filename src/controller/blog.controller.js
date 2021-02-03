const blogModel = require('../db/dao/blog')

const postBlog = async (req, res) => {

  const body = req.body

  await blogModel.postBlog(body)

  res.json({
    result: 'success'
  })
}

const listBlog = async (req, res) => {

  const query = req.query

  const result = await blogModel.getBlogList(query.query, Number(query.pageSize), Number(query.pageNum))

  res.json({
    result: 'success',
    data: result
  })
}

module.exports = {
  postBlog,
  listBlog
}