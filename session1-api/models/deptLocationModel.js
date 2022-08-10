const conn = require("../db_config");

const getDepartmentLocations = (result) => {
  sqlQuery = "SELECT * FROM departmentlocations";
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

module.exports = { getDepartmentLocations };
