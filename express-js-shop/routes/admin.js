const express = require('express');
const path = require('path');

const adminRouter = express.Router();
const rootDir = require('../util/path');

const products = [];

adminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

adminRouter.post('/add-product', (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});

exports.routes = adminRouter;
exports.products = products;
