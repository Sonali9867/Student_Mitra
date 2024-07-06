const mongoose = require('mongoose')

const Courses = mongoose.Schema({
  imageUrl: String,
  courseLink: String,
  courseType: String
})

module.exports = mongoose.model('courses',Courses)