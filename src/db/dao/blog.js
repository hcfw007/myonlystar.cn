const mongoose = require('../db.js')
const Schema = mongoose.Schema

const log = require('npmlog')
const PRE = 'Blog DB'

const blogSchema = {
  title: String,
  content: String,
  date: {
    type: Date,
    default: Date.now,
  },
  tags: {
    type: [Schema.ObjectId],
    default: [],
  },
  deleted: {
    type: Boolean,
    default: false,
  }
}

const Blog = mongoose.model('blog', blogSchema)

const postBlog = (blogInfo) => {
  log.verbose(PRE, `postBlog(${ JSON.stringify(blogInfo) })`)
  return Blog.create(blogInfo)
}

const getBlogList = (query = {}, pageSize = 10, pageNum = 0) => {
  log.verbose(PRE, `getBlogList(${ JSON.stringify(query) }, ${ pageSize }, ${ pageNum })`)
  return Blog.find(query).sort('-date').skip(pageNum * pageSize).limit(pageSize)
}

const getBlog = (query = {}) => {
  log.verbose(PRE, `getBlog(${ JSON.stringify(query) }`)
  return Blog.findOne(query)
}

module.exports = {
  postBlog,
  getBlogList,
  getBlog,
}