const express = require("express");
const router = express.Router();

const departmentController = require("../controllers/departmentController");

router.route("/").get(departmentController.getDepartmentList);

module.exports = router;
