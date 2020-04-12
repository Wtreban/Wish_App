const express = require('express');
const path = require('path');
const rootDirectory = require('../utilities/path');
const adminData = require('./admin');
const wishController = require('../controllers/wish');
const router = express.Router();

router.get('/', wishController.getWish);

module.exports = router;