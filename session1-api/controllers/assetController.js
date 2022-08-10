const assetModel = require("../models/assetModel");

const getAssetList = (req, res) => {
  assetModel.getAssets((err, result) => {
    if (err) {
      console.log("Error fetching assetss", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET assets" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET assets", data: result });
  });
};

module.exports = { getAssetList };
