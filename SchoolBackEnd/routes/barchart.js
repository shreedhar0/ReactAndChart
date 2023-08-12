const express = require("express");
const barchartController = require('../controllers/barchartController')

const router = express.Router();

router.post("/savedata", barchartController.saveBarData);

router.post("/savedump", barchartController.dumpBarData);

module.exports = router;