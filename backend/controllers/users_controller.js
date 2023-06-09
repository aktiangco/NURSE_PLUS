const express = require('express');
const router = express.Router();
const User = require('../models/users');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
require('dotenv').config();

// * Index route
router.get('/', (req, res) => {
  User.find()
    .sort({ _id: 1 })
    .then((users) => {
      res.json(users);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json('Internal Server Error');
    });
});

// Create Route
router.post('/new', async (req, res) => {
  const { firstName, lastName, email, password, city, state, zipCode, role } = req.body;

  if (!firstName || !lastName || !email || !password || !city || !state || !zipCode || !role) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const saltRounds = 10;
    const adminPassword = process.env.ADMIN_PASSWORD
    const passwordHash = await bcrypt.hash(password, saltRounds);
    const passwordAdmin = await bcrypt.hash(adminPassword, saltRounds);
    // Create a new user
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: passwordHash,
      city,
      state,
      zipCode,
      role: role === 'admin' ? 'admin' : 'user',
      passwordDigest: passwordAdmin,
    });

    // Save the user to the database
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'An error occurred while registering the user.' });
  }
});

// Show route
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
    res.status(404).json({ error: 'User not found' });
  }
});

// Delete User route
router.delete('/:id', (req, res) => {
  User.findByIdAndDelete(req.params.id)
    .then((deletedUser) => {
      if (deletedUser) {
        res.sendStatus(204); // No Content
      } else {
        res.sendStatus(404); // Not Found
      }
    })
    .catch(err => {
      console.log('err', err);
      res.status(500).json({ error: 'Delete route failed' });
    });
});


module.exports = router;
