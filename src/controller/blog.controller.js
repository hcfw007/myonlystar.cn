const log = require('npmlog')
const blogModel = require('../db/dao/blog')

const PRE = 'Blog Controller'

const postBlog = async (req, res) => {
  log.verbose(PRE, 'postBlog()')

  const body = req.body

  const result = await blogModel.postBlog(body)

  res.json({
    result: 'success',
    data: result
  })
}

const listBlog = async (req, res) => {
  log.verbose(PRE, 'listBlog()')

  const query = req.query

  const result = await blogModel.listBlog(query.query)

  res.json({
    result: 'success',
    data: result
  })
}

const getBlogById = async (req, res) => {
  log.verbose(PRE, 'getBlogById()')

  const query = req.query
  const id = query.id
  const result  = await blogModel.getBlogById(id)

  res.json({
    result: 'success',
    data: result
  })
}

module.exports = {
  postBlog,
  listBlog,
  getBlogById
}