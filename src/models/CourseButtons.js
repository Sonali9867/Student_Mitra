const mongoose = require('mongoose')

const CourseButtons = mongoose.Schema({
  class: String,
  buttonText: String, 
  data_filter: String
})

module.exports = mongoose.model('course_buttons',CourseButtons)