const conn = require("../db_config");

const getEmployees = (result) => {
  sqlQuery = "SELECT * FROM employees";
  conn.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("Cannot fetched employees", err);
      result(null, err);
    } else {
      console.log("Employees fetched successfully");
      result(null, res);
    }
  });
};

module.exports = { getEmployees };
