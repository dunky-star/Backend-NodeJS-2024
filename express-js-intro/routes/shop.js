const express = require('express');
const path = require('path');

const shopRouter = express.Router();

shopRouter.get('/', (req, res, next) => {
  // "use" is for all http methods.
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});

module.exports = shopRouter;
