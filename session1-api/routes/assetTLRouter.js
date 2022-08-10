const express = require("express");
const router = express.Router();

const assetTLController = require("../controllers/assetTLController");

router.route('/').get(assetTLController.getAssetTLList);

module.exports = router;
