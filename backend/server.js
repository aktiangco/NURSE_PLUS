// DEPENDENCIES
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const db = require('./config/db');

const app = express(); // Creating Express app
const PORT = process.env.PORT || 8080; // Using Port 8080

// Express Settings
app.use(cors());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ROUTES
app.get('/', (req, res) => {
  console.log('Welcome to Nurse_Plus API');
  res.send('Welcome to Nurse_Plus API');
});

// TODO
// User
// app.use('/users', require('./controllers/users_controller.js'));

// Post
const postsRouter = require('./controllers/posts_controller');
app.use('/posts', postsRouter);

// TODO
// Authentication
// app.use('/auth', require('./controllers/authentication_controller.js'));

// 404 Page
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// LISTEN to MONGO
db.connect()
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => {
      console.log('Server is listening on port', PORT);
    });
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err);
  });

module.exports = app;
