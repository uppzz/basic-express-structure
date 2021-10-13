import express from 'express'
const router = express.Router()

import getIndex from '../controllers/open.js'
router.get("/", getIndex)

export default router 