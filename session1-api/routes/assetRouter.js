const express = require("express");
const router = express.Router();

const assetController = require("../controllers/assetController");

router.route('/').get(assetController.getAssetList);

module.exports = router;
