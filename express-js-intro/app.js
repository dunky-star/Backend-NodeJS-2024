const express = require('express');
const path = require('path');

const app = express();

// Custom routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
// app.use('/', (req, res, next) => {
//   // For requests to be use by all the middleware.
//   console.log('This always runs!');
//   next();
// });

/*
 * Read the parameters from POST requests
 */
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // To parse the incoming requests with JSON payloads

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// For page not found error code
app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(3000, () => console.log('Server is running on port 3000\n\n'));
