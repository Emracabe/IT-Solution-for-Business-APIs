const conn = require("../db_config");

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

module.exports = { getDepartmentLocations, getDepartmentLocationsById };
