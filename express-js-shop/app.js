const express = require('express');
const path = require('path');
const errorController = require('./controllers/errorCtrl');

const app = express();

// Templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');
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

app.use(express.static(path.join(__dirname, 'public'))); // For serving css static files in public directory

app.use('/admin', adminRoutes);
app.use(shopRoutes);

// For page not found error code
app.use(errorController.get404);

app.listen(3000, () => console.log('Server is running on port 3000\n\n'));
