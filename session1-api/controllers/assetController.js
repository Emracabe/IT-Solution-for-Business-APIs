const assetModel = require("../models/assetModel");

const getAssetList = (req, res) => {
  assetModel.getAssets((err, result) => {
    if (err) {
      console.log("Error fetching assetss", err);
      return res.status(401).json({ success: false, msg: "Error GET assets" });
    }
    res.status(200).json({ success: true, msg: "GET assets", data: result });
  });
};

const getAssetByIdList = (req, res) => {
  const { assetID } = req.params;
  assetModel.getAssetById((err, result) => {
    if (err) {
      console.log("Error fetching assetss", err);
      return res.status(401).json({ success: false, msg: "Error GET assets" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET assets by ID", data: result });
  }, assetID);
};

module.exports = { getAssetList, getAssetByIdList };
