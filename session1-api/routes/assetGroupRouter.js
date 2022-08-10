const express = require("express");
const router = express.Router();

const assetGroupController = require("../controllers/assetGroupController");

router.route('/').get(assetGroupController.getAssetGroupsList);

module.exports = router;
