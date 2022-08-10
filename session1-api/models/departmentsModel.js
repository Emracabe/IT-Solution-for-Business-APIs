const conn = require("../db_config");

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

module.exports = { getDepartments };
