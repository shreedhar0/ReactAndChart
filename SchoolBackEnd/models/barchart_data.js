
const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  Name: String,
  Num1: Number,
  Num2: Number,
});

const BarModel = mongoose.model("barchart", dataSchema);

module.exports = BarModel;
