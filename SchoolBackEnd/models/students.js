const mongoose = require('mongoose')

const userSchema  = new mongoose.Schema({
    name : String,
    age : Number,
    score : Number
})

const UserModel = mongoose.model("students", userSchema)

module.exports = UserModel