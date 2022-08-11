const express = require("express");
const router = express.Router();

const deptLocationController = require("../controllers/deptLocationController");

router.route("/").get(deptLocationController.getDepartmentLocationList);
router
  .route("/:deptLocationID")
  .get(deptLocationController.getDepartmentLocationByIdList);

module.exports = router;
