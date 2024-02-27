// External dependencies
const express = require('express');
const router = express.Router();

// Routes for v1
const versionOne = require('./views/v1/routes')
router.use('/v1', versionOne);

// Routes for v2
const versionTwo = require('./views/v2/routes')
router.use('/v2', versionTwo);

module.exports = router;
