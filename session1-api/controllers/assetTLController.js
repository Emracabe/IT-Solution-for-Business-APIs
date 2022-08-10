const assetTLModel = require("../models/assetTLModel");

const getAssetTLList = (req, res) => {
  assetTLModel.getAssetTransferLogs((err, result) => {
    if (err) {
      console.log("Error fetching assettransferlogs", err);
      return res
        .status(401)
        .json({ success: false, msg: "Error GET assettransferlogs" });
    }
    res
      .status(200)
      .json({ success: true, msg: "GET assettransferlogs", data: result });
  });
};

module.exports = { getAssetTLList };
