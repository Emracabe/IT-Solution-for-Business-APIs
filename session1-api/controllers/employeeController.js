const employeeModel = require("../models/employeeModel");

const getEmployeeList = (req, res) => {
  employeeModel.getEmployees((err, result) => {
    if (err) {
      console.log("Error fetching employees", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET employees" });
    }
    res.status(200).json({ success: true, msg: "GET employees", data: result });
  });
};

module.exports = { getEmployeeList };
