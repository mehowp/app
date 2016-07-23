var express = require('express')
var router = express.Router()

router.get('/',  require('../bin/controllers/index'))

module.exports = router
