const BarModel = require("../models/barchart_data");
const DumpModel = require("../models/barchart_dump")

const saveBarData = (req, res) => {
  const newDataArray = req.body;
  BarModel.insertMany(newDataArray)
  .then(() => {
    res.status(200).json({ message: "Data saved successfully!" });
  })
  .catch((error) => {
    res.status(500).json({ error: "Error saving data to database." });
  });
}

const dumpBarData = (req, res) => {
  const newDataArray = req.body;
  const newDump = new DumpModel({ data: newDataArray });
  newDump.save().then(
    res.json({msg : "Success"})
  )
}
module.exports = {
    saveBarData,
    dumpBarData
}