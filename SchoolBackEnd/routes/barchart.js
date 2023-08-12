const express = require("express");
const barchartController = require('../controllers/barchartController')

const router = express.Router();

router.post("/saveData", barchartController.saveBarData);

module.exports = router;