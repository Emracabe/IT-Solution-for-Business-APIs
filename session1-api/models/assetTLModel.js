const conn = require("../db_config");

const getAssetTransferLogs = (result) => {
  sqlQuery = "SELECT * FROM assettransferlogs";
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
