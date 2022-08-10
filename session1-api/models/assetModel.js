const conn = require("../db_config");

const getAssets = (result) => {
  sqlQuery = "SELECT * FROM assets";
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
  sqlQuery = "SELECT * FROM assets WHERE id = ?";
  conn.query(sqlQuery, [id], (err, res) => {
      if (err) {
        console.log("Cannot fetched the asset", err);
        result(null, err);
      } else {
        console.log("Asset fetched successfully");
        result(null, res);
      }
  })
}

module.exports = { getAssets, getAssetById };
