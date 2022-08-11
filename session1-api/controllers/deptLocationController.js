const deptLocationModel = require("../models/deptLocationModel");

const getDepartmentLocationList = (req, res) => {
  deptLocationModel.getDepartmentLocations((err, result) => {
    if (err) {
      console.log("Error fetching departmentlocations", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET departmentlocations" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET departmentlocations", data: result });
  });
};

const getDepartmentLocationByIdList = (req, res) => {
  const { deptLocationID } = req.params;
  deptLocationModel.getDepartmentLocationsById((err, result) => {
    if (err) {
      console.log("Error fetching departmentlocations", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET departmentlocations" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET departmentlocations", data: result });
  }, deptLocationID);
};

module.exports = { getDepartmentLocationList, getDepartmentLocationByIdList };
