const conn = require("../db_config");

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

module.exports = { getAssetGroups };
