const express = require('express');
const Product = require('../models/product');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
});

router.post('/add-product', (req, res, next) => {
  const product = new Product(req.body.title);
  product.save();
  res.redirect('/');
});

module.exports = router;
