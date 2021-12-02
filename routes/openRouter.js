const express = require('express');
const router = express.Router();

const openController = require('../controllers/open/openController.js');
// getIndex wird nur aufgerufen, wenn bei isTrue next() aufgerufen wird
//* usecase  check if user is logged in  or have the privileges to access the getIndex side
router.get("/", openController.isTrue, openController.getIndex);

module.exports = router;
