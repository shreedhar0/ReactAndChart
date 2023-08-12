const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const studentRoute = require('./routes/student')
const barchartRoute = require('./routes/barchart')

const db = 'mongodb://shreedhar0:Shridhar0@ac-xoca1fm-shard-00-00.atgnax4.mongodb.net:27017,ac-xoca1fm-shard-00-01.atgnax4.mongodb.net:27017,ac-xoca1fm-shard-00-02.atgnax4.mongodb.net:27017/school?ssl=true&replicaSet=atlas-zth8kj-shard-0&authSource=admin&retryWrites=true&w=majority'
//const db = 'mongodb+srv://shreedhar0:Shridhar0@cluster0.atgnax4.mongodb.net/school?retryWrites=true&w=majority'
const connectionParams = {
    useNewUrlParser : true,
    useUnifiedTopology : true
}

mongoose.connect(db, connectionParams).then(()=>{
    console.info("Connected");
}).catch((err)=>{
    console.log(err);
});

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended : true}))

app.use(cors())

app.use("/student", studentRoute)

app.use("/barchart", barchartRoute)

app.listen(5000, ()=>{
    console.log("Server is online on port 5000");
})

//mongosh "mongodb+srv://cluster0.atgnax4.mongodb.net/" --apiVersion 1 --username shreedhar0