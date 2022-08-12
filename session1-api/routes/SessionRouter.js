const express = require("express");
const router = express.Router();

const SessionController = require('../controllers/SessionController');

// AssetGroups Routes
router.route('/assetgroups').get(SessionController.getAssetGroupsList);


// Assets Routes
router.route("/assets").get(SessionController.getAssetList);
router.route("/assets/query").get(SessionController.getAssetByNameQuery);


// AssetTransferLogs Routes
router.route('/assetTL').get(SessionController.getAssetTLList);


// Departments Routes
router.route("/departments").get(SessionController.getDepartmentList);


// DepartmentLocations Routes
router.route("/departmentlocations").get(SessionController.getDepartmentLocationList);
router
  .route("/departmentlocations/:deptLocationID")
  .get(SessionController.getDepartmentLocationByIdList);
  

// Employee Routes
router.route('/employees').get(SessionController.getEmployeeList);


// Locations Routes
router.route("/locations").get(SessionController.getLocationList);



// Exporting the Router
module.exports = router;
