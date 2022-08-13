const conn = require("../db_config");

// Assets Model
const getAssets = (result) => {
  sqlQuery =
    "SELECT `a`.`ID`, `a`.`AssetName`, `a`.`AssetSN`, `d`.`Name` AS 'Department', `l`.`Name` AS 'Location', CONCAT(`e`.`FirstName`, ' ', `e`.`LastName`) AS 'Employee', `ag`.`Name` AS 'AssetGroup', `a`.`Description`, `a`.`WarrantyDate` FROM `assets` `a` LEFT JOIN departmentlocations `dl` ON `dl`.`ID` = `a`.`DepartmentLocationID` LEFT JOIN departments `d` ON `d`.`ID` = `dl`.`DepartmentID` LEFT JOIN locations `l` ON `l`.ID = `dl`.`LocationID` LEFT JOIN employees `e` ON `a`.`EmployeeID` = `e`.`ID` LEFT JOIN assetgroups `ag` ON `ag`.`ID` = `a`.`AssetGroupID`";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched assets", err);
      result(null, err);
    } else {
      console.log("Assets fetched successfully");
      result(null, res);
    }
  });
};

const getAssetByQuery = (result, assetGroup, department) => {
  sqlQuery =
    "SELECT `a`.`ID`, `a`.`AssetName`, `a`.`AssetSN`, `d`.`Name` AS 'Department', `l`.`Name` AS 'Location', CONCAT(`e`.`FirstName`, ' ', `e`.`LastName`) AS 'Employee', `ag`.`Name` AS 'AssetGroup', `a`.`Description`, `a`.`WarrantyDate` FROM `assets` `a` LEFT JOIN departmentlocations `dl` ON `dl`.`ID` = `a`.`DepartmentLocationID` LEFT JOIN departments `d` ON `d`.`ID` = `dl`.`DepartmentID` LEFT JOIN locations `l` ON `l`.ID = `dl`.`LocationID` LEFT JOIN employees `e` ON `a`.`EmployeeID` = `e`.`ID` LEFT JOIN assetgroups `ag` ON `ag`.`ID` = `a`.`AssetGroupID` WHERE `ag`.`Name` = ? OR `d`.`Name` = ?";
    conn.query(sqlQuery, [assetGroup, department], (err, res) => {
      if (err) {
        console.log("Cannot fetched the asset", err);
        result(null, err);
      } else {
        console.log("Asset fetched successfully");
        result(null, res);
      }
    });
};
// End of Assets Model

// AssetGroups Model
const getAssetGroups = (result) => {
  sqlQuery = "SELECT * FROM assetgroups";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched assetgroups", err);
      result(null, err);
    } else {
      console.log("AssetGroups fetched successfully");
      result(null, res);
    }
  });
};
// End of AssetGroups Model

// AssetTransferLogs Model
const getAssetTransferLogs = (result) => {
  sqlQuery =
    "SElECT `atl`.`ID`, `a`.`AssetName`, `atl`.`FromAssetSN`, `atl`.`ToAssetSN`, `df`.`Name` AS 'FromDepartment', `dm`.`Name` AS 'ToDepartment', `atl`.`TransferDate` FROM assettransferlogs `atl` LEFT JOIN assets `a` ON `a`.`ID` = `atl`.`AssetID` LEFT JOIN departmentlocations `dlf` ON `atl`.`FromDepartmentLocationID` = `dlf`.`ID` LEFT JOIN departmentlocations `dlt` ON `atl`.`ToDepartmentLocationID` = `dlt`.`ID` LEFT JOIN departments `df` ON `dlf`.`DepartmentID` = `df`.`ID` LEFT JOIN departments `dm` ON `dlt`.`DepartmentID` = `dm`.`ID`;";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched assettransferlogs", err);
      result(null, err);
    } else {
      console.log("AssetTransferLogs fetched successfully");
      result(null, res);
    }
  });
  const getLocations = (result) => {
    sqlQuery = "SELECT * FROM locations";
    conn.query(sqlQuery, (err, res) => {
      if (err) {
        console.log("Cannot fetched locations", err);
        result(null, err);
      } else {
        console.log("Locations fetched successfully");
        result(null, res);
      }
    });
  };
};
// End of AssetTransferLogs Model

// Departments Model
const getDepartments = (result) => {
  sqlQuery = "SELECT * FROM departments";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched departments", err);
      result(null, err);
    } else {
      console.log("Departments fetched successfully");
      result(null, res);
    }
  });
};
// End of Departments Model

// DepartmentLocations Model
const getDepartmentLocations = (result) => {
  sqlQuery =
    "SELECT `dl`.`ID`, `d`.`Name` AS 'Department', `l`.`Name` AS 'Location', `dl`.`StartDate` AS 'Department', `dl`.`StartDate`, `dl`.`EndDate` FROM departmentlocations `dl` LEFT JOIN departments `d` ON `d`.`ID` = `dl`.`DepartmentID` LEFT JOIN locations `l` ON `l`.`ID` = `dl`.`LocationID`;";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched departmentlocations", err);
      result(null, err);
    } else {
      console.log("DepartmentLocations fetched successfully");
      result(null, res);
      const getLocations = (result) => {
        sqlQuery = "SELECT * FROM locations";
        conn.query(sqlQuery, (err, res) => {
          if (err) {
            console.log("Cannot fetched locations", err);
            result(null, err);
          } else {
            console.log("Locations fetched successfully");
            result(null, res);
          }
        });
      };
    }
  });
};

const getDepartmentLocationsById = (result, id) => {
  sqlQuery =
    "SELECT `dl`.`ID`, `d`.`Name` AS 'Department', `l`.`Name` AS 'Location', `dl`.`StartDate` AS 'Department', `dl`.`StartDate`, `dl`.`EndDate` FROM departmentlocations `dl` LEFT JOIN departments `d` ON `d`.`ID` = `dl`.`DepartmentID` LEFT JOIN locations `l` ON `l`.`ID` = `dl`.`LocationID` WHERE `dl`.`ID` = ?;";
  conn.query(sqlQuery, [id], (err, res) => {
    if (err) {
      console.log("Cannot fetched departmentlocations", err);
      result(null, err);
    } else {
      console.log("DepartmentLocations fetched successfully");
      result(null, res);
    }
  });
};
// End of DepartmentLocations Model

// Employee Model
const getEmployees = (result) => {
  sqlQuery = "SELECT * FROM employees";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched employees", err);
      result(null, err);
    } else {
      console.log("Employees fetched successfully");
      result(null, res);
    }
  });
};
// End of Employee Model

// Location Model
const getLocations = (result) => {
  sqlQuery = "SELECT * FROM locations";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched locations", err);
      result(null, err);
    } else {
      console.log("Locations fetched successfully");
      result(null, res);
    }
  });
};
// End of Location Model

// Exporting the Module
module.exports = {
  // Assets
  getAssets,
  // getAssetById,
  getAssetByQuery,

  // AssetGroups
  getAssetGroups,

  // AssetTransferLogs
  getAssetTransferLogs,

  // Departments
  getDepartments,

  // DepartmentLocations
  getDepartmentLocations,
  getDepartmentLocationsById,

  // Employees
  getEmployees,

  // Locations
  getLocations,
};
