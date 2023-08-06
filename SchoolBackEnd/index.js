const mongoose = require('mongoose');
const express = require('express');
const UserModel = require('./models/students')
const cors = require('cors');

const db = 'mongodb+srv://shreedhar0:Shridhar0@cluster0.atgnax4.mongodb.net/school?retryWrites=true&w=majority'
 mongoose.connect(db).then(()=>{
    console.log("Connected");
 }).catch((err)=>{
    console.log(err);
 });

const app = express();

app.use(cors())

app.get("/getStudents", (req, res) => {
    UserModel.find().then(
        students => res.json(students)
    ).catch(
        (err) => {
            console.log(err);
        }
    )
})

app.listen(5000, ()=>{
    console.log("Server is online on port 5000");
})