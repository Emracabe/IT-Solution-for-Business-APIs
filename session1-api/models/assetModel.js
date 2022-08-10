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

module.exports = { getAssets };
