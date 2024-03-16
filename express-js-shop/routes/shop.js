const express = require('express');

const shopRouter = express.Router();
const Product = require('../models/product');
const productController = require('../controllers/productsCtrl');

shopRouter.get('/', productController.getShopProducts);

module.exports = shopRouter;
