const locationModel = require("../models/locationModel");

const getLocationList = (req, res) => {
  locationModel.getLocations((err, result) => {
    if (err) {
      console.log("Error fetching locations", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET locations" });
    }
    res.status(200).json({ success: true, msg: "GET locations", data: result });
  });
};

module.exports = { getLocationList };
