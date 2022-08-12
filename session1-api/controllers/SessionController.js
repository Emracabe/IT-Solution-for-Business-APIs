const SessionModel = require('../models/SessionModel');

// Asset Controller
const getAssetList = (req, res) => {
  SessionModel.getAssets((err, result) => {
    if (err) {
      console.log("Error fetching assetss", err);
      return res.status(401).json({ success: false, msg: "Error GET assets" });
    }
    res.status(200).json({ success: true, msg: "GET assets", data: result });
  });
};

const getAssetByIdList = (req, res) => {
  const { assetID } = req.params;
  SessionModel.getAssetById((err, result) => {
    if (err) {
      console.log("Error fetching assetss", err);
      return res.status(401).json({ success: false, msg: "Error GET assets" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET assets by ID", data: result });
  }, assetID);
};
// End of Asset Controller



// AssetGroup Controller
const getAssetGroupsList = (req, res) => {
  SessionModel.getAssetGroups((err, result) => {
    if (err) {
      console.log("Error fetching assetgroups", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET assetgroups" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET assetgroups", data: result });
  });
};
// End of AssetGroup Controller


// AssetTransferLog Controller
const getAssetTLList = (req, res) => {
  SessionModel.getAssetTransferLogs((err, result) => {
    if (err) {
      console.log("Error fetching assettransferlogs", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET assettransferlogs" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET assettransferlogs", data: result });
  });
};
// End of AssetTransferLog Controller


// Department Controller
const getDepartmentList = (req, res) => {
  SessionModel.getDepartments((err, result) => {
    if (err) {
      console.log("Error fetching departments", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET departments" });
    }
    res.status(200).json({ success: true, msg: "GET departments", data: result });
  });
};
// End of Department Controller



// DepartmentLocation Controller
const getDepartmentLocationList = (req, res) => {
  SessionModel.getDepartmentLocations((err, result) => {
    if (err) {
      console.log("Error fetching departmentlocations", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET departmentlocations" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET departmentlocations", data: result });
  });
};

const getDepartmentLocationByIdList = (req, res) => {
  const { deptLocationID } = req.params;
  SessionModel.getDepartmentLocationsById((err, result) => {
    if (err) {
      console.log("Error fetching departmentlocations", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET departmentlocations" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET departmentlocations", data: result });
  }, deptLocationID);
};
// End of DepartmentLocation Controller



// Employee Controller
const getEmployeeList = (req, res) => {
  SessionModel.getEmployees((err, result) => {
    if (err) {
      console.log("Error fetching employees", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET employees" });
    }
    res.status(200).json({ success: true, msg: "GET employees", data: result });
  });
};
// End of Employee Controller


// Location Controller
const getLocationList = (req, res) => {
  SessionModel.getLocations((err, result) => {
    if (err) {
      console.log("Error fetching locations", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET locations" });
    }
    res.status(200).json({ success: true, msg: "GET locations", data: result });
  });
};
// End of Location Controller


// Exporting the Functions
module.exports = {
	// Assets
	getAssetList,
	getAssetByIdList,
	
	// AssetGroup
	getAssetGroupsList,
	
	// AssetTransferLog
	getAssetTLList,
	
	// Department
	getDepartmentList, 
	
	// DepartmentLocation
	getDepartmentLocationList,
	getDepartmentLocationByIdList,
	
	// Employee
	getEmployeeList,
	
	// Location
	getLocationList,
};
