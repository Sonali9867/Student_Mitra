const mongoose = require('mongoose')
const Contact = mongoose.Schema({
    name: String,
    email: String,
    country: String,
    phone: String,
    query: String,
    time: { type: Date, default: Date.now},
})

module.exports=mongoose.model("queries", Contact)