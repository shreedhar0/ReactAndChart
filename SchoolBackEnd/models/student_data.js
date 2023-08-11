const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({
    firstName : String,
    lastName : String,
    email : String 
})

const StudentModel = mongoose.model("student_data", studentSchema)
module.exports = StudentModel