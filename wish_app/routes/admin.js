const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const rootDirectory = require('../utilities/path');
const wishController = require('../controllers/wish');
const router = express.Router();
//const products = [];


router.get('/add-wish', wishController.getAddWishPage);

router.post('/add-wish', wishController.postAddWish);

module.exports = router;