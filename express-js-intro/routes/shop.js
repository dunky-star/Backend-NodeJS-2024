const express = require('express');
const path = require('path');

const shopRouter = express.Router();
const adminData = require('./admin');

shopRouter.get('/', (req, res, next) => {
  // "use" is for all http methods.
  console.log(adminData.products);
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = shopRouter;
