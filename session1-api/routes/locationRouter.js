const express = require("express");
const router = express.Router();

const locationController = require("../controllers/locationController");

router.route("/").get(locationController.getLocationList);

module.exports = router;
