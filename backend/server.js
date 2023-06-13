// DEPENDENCIES
const express = require('express');
const methodOverride = require('method-override');
const mongoose = require('mongoose');

// CONFIGURATION
require('dotenv').config();

const app = express(); // Creating Express app

const PORT = process.env.PORT; // Using Port 3000
const MONGODB = process.env.MONGODB_URI; // Connecting to MongoDB

// MIDDLEWARE
app.set('views', __dirname + '/views'); // double underscore "__dirname" = dunder-score
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public')); // Setup serving static assets
app.use(express.urlencoded({ extended: true })); // Send our POST request
app.use(methodOverride('_method')); // Allows to override form default

// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to Nurse_Plus');
});

// // User
// const usersController = require('./controllers/users_controller.js');
// app.use('/users', usersController);
// Post

app.use('/posts', require('./controllers/posts_controller.js'));
// // Authentication
// const authenticationController = require('./controllers/authentication_controller.js');
// app.use('/auth', authenticationController);

// 404 Page
app.get('*', (req, res) => {
  res.render('error'); // 404 Not Found
});

// LISTEN to MONGO 
mongoose.connect(MONGODB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB:', MONGODB);
    // LISTEN to local
    app.listen(PORT, () => {
      console.log('Server is listening on port', PORT);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports = app;
