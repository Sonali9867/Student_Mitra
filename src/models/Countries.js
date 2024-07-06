const mongoose = require("mongoose")

const Countries = mongoose.Schema({
  name:String,
  code:String
})

module.exports = mongoose.model('countries', Countries);