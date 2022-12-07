const dashboardController = require("../controllers/dashboardController");
const express = require("express");
const router = express.Router();
const {ensureAuthenticated} = require('./middleware');

router.get("/", ensureAuthenticated, dashboardController.index);

module.exports = router;