const express = require('express');
const router = express.Router();
const User = require('../models/users');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// * Index route
router.get('/', (req, res) => {
  User.find()
    .sort({ _id: 1 })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json('Internal Server Error');
    });
});

// create Route 
router.post('/new', async (req, res) => {
    const { firstName, lastName, email, password, city, state, zipCode } = req.body;
    
    if (!firstName || !lastName || !email || !password || !city || !state || !zipCode ) {
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
        const passwordHash = await bcrypt.hash(password, saltRounds);
    
        // Create a new user
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: passwordHash,
            city,
            state,
            zipCode,
            role: 'user' // Specify the role here
        });
    
        // Save the user to the database
        await newUser.save();
        res.status(201).json(newUser);
      } catch (error) {
        res.status(500).json({ message: 'An error occurred while registering the user.' });
      }
    });

// * Show route
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
  
// * Update route
router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/users/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.status(500).send({error: 'Update Route'});
        })
  })

//* Delete  User route
router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then((deleteUser) => {
            res.status(303).redirect('/users');
        })
        .catch(err => {
            console.log('err', err);
            res.status(500).json({ error: 'Delete route failed' });
        });
    });


module.exports = router;