const express = require('express');
const path = require('path');
const errorController = require('./controllers/error');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

// Templating engine
app.set('view engine', 'ejs');
app.set('views', 'views');
// Custom routes
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

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

mongoConnect(() => {
  app.listen(3000, () => console.log('Server is running on port 3000\n\n'));
});
