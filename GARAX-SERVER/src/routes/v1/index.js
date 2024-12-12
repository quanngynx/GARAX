const express = require('express')
const router = express.Router()

router.use('/v1',require('./access/index'))
router.use('/v1',require('./auth/index'))
router.use('/v1',require('./account/index'))
router.use('/v1',require('./order/index'))
router.use('/v1',require('./checkout/index'))
router.use('/v1',require('./products/index'))
router.use('/v1',require('./categoryProducts/index'))
router.use('/v1',require('./news/index'))
router.use('/v1',require('./categoryNews/index'))

module.exports = router
