const router = require('express').Router();
const User = require('../models/users');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {
    const { firstName, lastName, email, password } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      role: 'user'
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'An error occurred while registering the user.' });
  }
});

// Add a request handler to the authentication controller
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if the user exists
    console.log('Finding user:', email);
    const user = await User.findOne({ email: email.toLowerCase() });
    if (!user) {
      console.log('User not found');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // Compare the provided password with the stored password hash
    const passwordMatch = await bcrypt.compare(password, user.password);
    console.log('Password match:', passwordMatch);
    if (!passwordMatch) {
      console.log('Invalid password');
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    // If the email and password are correct, return the user object
    console.log('Login successful:', user);
    res.json({ user });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'An error occurred while logging in.' });
  }
});

// TODO: view authorized profile
router.get('/:id', (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    User.findById(req.params.id)
      .then(user => {
        if (user) {
          res.json(user);
        } else {
          res.status(404).json({ error: 'User not found' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else {
    res.status(400).json({ error: 'Invalid User ID' });
  }
});

// Creating a logout: passwordHash,
router.post('/logout', (req, res) => {
  req.session = null;
  res.sendStatus(200);
});

module.exports = router;
