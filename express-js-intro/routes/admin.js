const express = require('express');
const path = require('path');

const adminRouter = express.Router();
const rootDir = require('../util/path');

adminRouter.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
});

adminRouter.post('/add-product', (req, res, next) => {
  console.log('In the post:', req.body.title);
  res.redirect('/');
});

module.exports = adminRouter;
