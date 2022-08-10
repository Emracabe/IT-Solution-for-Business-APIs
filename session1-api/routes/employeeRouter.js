const express = require("express");
const router = express.Router();

const employeeController = require("../controllers/employeeController");

router.route('/').get(employeeController.getEmployeeList);

module.exports = router;
