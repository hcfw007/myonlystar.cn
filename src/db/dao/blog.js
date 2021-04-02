const mongoose = require('../db.js')
const Schema = mongoose.Schema
const ObjectId = mongoose.Types.ObjectId

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

const postBlog = async (blogInfo) => {
  if (blogInfo.date) {
    blogInfo.date = new Date(blogInfo.date)
  }
  log.verbose(PRE, `postBlog(${ JSON.stringify(blogInfo) })`)
  const newBlog = await Blog.create(blogInfo)
  return newBlog
}

const listBlog = (query = {}, pageSize = 10, pageNum = 0) => {
  log.verbose(PRE, `getBlogList(${ JSON.stringify(query) }, ${ pageSize }, ${ pageNum })`)
  return Blog.find(query).sort('-date').skip(pageNum * pageSize).limit(pageSize)
}

const getBlogById = (id) => {
  log.verbose(PRE, `getBlogById(${ id })`)
  return Blog.findOne({
    _id: ObjectId(id)
  })
}

module.exports = {
  postBlog,
  listBlog,
  getBlogById,
}