const express = require('express')
const router = express.Router()

router.use('/v1',require('./access/index'))
router.use('/v1',require('./account/index'))
router.use('/v1',require('./cart/index'))
router.use('/v1',require('./checkout/index'))
router.use('/v1',require('./products/index'))

module.exports = router
