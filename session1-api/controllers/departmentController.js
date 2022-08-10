const departmentsModel = require("../models/departmentsModel");

const getDepartmentList = (req, res) => {
  departmentsModel.getDepartments((err, result) => {
    if (err) {
      console.log("Error fetching departments", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET departments" });
    }
    res.status(200).json({ success: true, msg: "GET departments", data: result });
  });
};

module.exports = { getDepartmentList };
