const mongoose = require('mongoose')

const dumpModelSchema = new mongoose.Schema({
    data: [{
        Name: String,
        Num1: Number,
        Num2: Number
    }]
});

const DumpModel = mongoose.model("barchart_dump", dumpModelSchema);

module.exports = DumpModel;

