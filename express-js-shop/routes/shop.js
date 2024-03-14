const express = require('express');

const shopRouter = express.Router();
const Product = require('../models/product');

shopRouter.get('/', (req, res, next) => {
  // "use" is for all http methods.
  const products = Product.fetchAll();
  res.render('shop', {
    prods: products,
    pageTitle: 'shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
});

module.exports = shopRouter;
