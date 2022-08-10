const express = require("express");
const router = express.Router();

const deptLocationController = require("../controllers/deptLocationController");

router.route("/").get(deptLocationController.getDepartmentLocationList);

module.exports = router;
