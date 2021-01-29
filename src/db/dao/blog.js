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
}

const Blog = mongoose.model('blog', blogSchema)

const postBlog = (blogInfo, callback) => {
  Blog.create(blogInfo).then(res => {
    callback(res)
  })
}

module.exports = {
  postBlog
}