const mongoose = require("mongoose")

const LoginCollection  = mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  emailId:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  }
})

module.exports = mongoose.model('loginCollection', LoginCollection);