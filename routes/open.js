const express = require('express')
const router = express.Router()

const openController = require('../controllers/open.js')
router.get("/", openController.getIndex)

module.exports = router 