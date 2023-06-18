const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const db = require('./config/db');
const defineCurrentUser = require('./middleware/defineCurrentUser');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: 'http://localhost:3000', credentials: true }));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(defineCurrentUser);

app.get('/', (req, res) => {
  console.log('Welcome to Nurse_Plus API');
  res.send('Welcome to Nurse_Plus API');
});

app.use('/users', require('./controllers/users_controller.js'));
app.use('/posts', require('./controllers/posts_controller'));
app.use('/auth', require('./controllers/authentications_controller'));

app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

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
