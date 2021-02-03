const mongoose = require('../db.js')
const Schema = mongoose.Schema

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
  console.log(blogInfo)
  return Blog.create(blogInfo)
}

const getBlogList = (query = {}, pageSize = 10, pageNum = 0) => {
  return Blog.find(query).sort('-date').skip(pageNum * pageSize).limit(pageSize)
}

module.exports = {
  postBlog,
  getBlogList,
}