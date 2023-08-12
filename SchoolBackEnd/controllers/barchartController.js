const BarModel = require("../models/barchart_data");

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

module.exports = {
    saveBarData
}