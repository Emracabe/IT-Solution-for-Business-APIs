const conn = require("../db_config");

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

const getAssetById = (result, id) => {
  sqlQuery =
    "SELECT `a`.`ID`, `a`.`AssetName`, `a`.`AssetSN`, `d`.`Name` AS 'Department', `l`.`Name` AS 'Location', CONCAT(`e`.`FirstName`, ' ', `e`.`LastName`) AS 'Employee', `ag`.`Name` AS 'AssetGroup', `a`.`Description`, `a`.`WarrantyDate` FROM `assets` `a` LEFT JOIN departmentlocations `dl` ON `dl`.`ID` = `a`.`DepartmentLocationID` LEFT JOIN departments `d` ON `d`.`ID` = `dl`.`DepartmentID` LEFT JOIN locations `l` ON `l`.ID = `dl`.`LocationID` LEFT JOIN employees `e` ON `a`.`EmployeeID` = `e`.`ID` LEFT JOIN assetgroups `ag` ON `ag`.`ID` = `a`.`AssetGroupID` WHERE `a`.`ID` = ?";
  conn.query(sqlQuery, [id], (err, res) => {
    if (err) {
      console.log("Cannot fetched the asset", err);
      result(null, err);
    } else {
      console.log("Asset fetched successfully");
      result(null, res);
    }
  });
};

module.exports = { getAssets, getAssetById };
