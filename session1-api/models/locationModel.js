const conn = require("../db_config");

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

module.exports = { getLocations };
