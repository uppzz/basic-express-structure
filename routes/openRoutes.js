const express = require('express');
const router = express.Router();

const openController = require('../controllers/openController.js');
router.get("/", openController.isTrue, openController.getIndex);

module.exports = router;
