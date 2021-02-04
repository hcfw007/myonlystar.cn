const log = require('npmlog')
const blogModel = require('../db/dao/blog')

const PRE = 'Blog Controller'

const postBlog = async (req, res) => {
  log.verbose(PRE, 'postBlog()')

  const body = req.body

  await blogModel.postBlog(body)

  res.json({
    result: 'success'
  })
}

const listBlog = async (req, res) => {
  log.verbose(PRE, 'listBlog()')

  const query = req.query

  const result = await blogModel.getBlog(query.query)

  res.json({
    result: 'success',
    data: result
  })
}

const getBlogById = async (req, res) => {
  log.verbose(PRE, 'getBlogById()')

  const query = req.query
  const id = query.id

  const result  = await blogModel.getBlog({ id })

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