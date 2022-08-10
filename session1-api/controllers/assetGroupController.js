const assetGroupsModel = require("../models/assetGroupsModel");

const getAssetGroupsList = (req, res) => {
  assetGroupsModel.getAssetGroups((err, result) => {
    if (err) {
      console.log("Error fetching assetgroups", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET assetgroups" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET assetgroups", data: result });
  });
};

module.exports = { getAssetGroupsList };
