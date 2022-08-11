const conn = require("../db_config");

const getAssetTransferLogs = (result) => {
  sqlQuery = "SElECT `atl`.`ID`, `a`.`AssetName`, `atl`.`FromAssetSN`, `atl`.`ToAssetSN`, `df`.`Name` AS 'FromDepartment', `dm`.`Name` AS 'ToDepartment', `atl`.`TransferDate` FROM assettransferlogs `atl` LEFT JOIN assets `a` ON `a`.`ID` = `atl`.`AssetID` LEFT JOIN departmentlocations `dlf` ON `atl`.`FromDepartmentLocationID` = `dlf`.`ID` LEFT JOIN departmentlocations `dlt` ON `atl`.`ToDepartmentLocationID` = `dlt`.`ID` LEFT JOIN departments `df` ON `dlf`.`DepartmentID` = `df`.`ID` LEFT JOIN departments `dm` ON `dlt`.`DepartmentID` = `dm`.`ID`;";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched assettransferlogs", err);
      result(null, err);
    } else {
      console.log("AssetTransferLogs fetched successfully");
      result(null, res);
    }
  });
};

module.exports = { getAssetTransferLogs };
