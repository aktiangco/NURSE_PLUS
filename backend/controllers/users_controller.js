const express = require('express');
const router = express.Router();
const User = require('../models/users');
mongoose = require('mongoose');
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

// TODO: fix this route
router.post('/', async (req, res) => {
    try {
      const { password, ...rest } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        ...rest,
        role: 'reviewer', // Restricting access up as an admin
        passwordDigest: hashedPassword
      });
  
      await user.save();
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Cannot create user' });
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
    res.status(400).json({ error: 'Invalid Usert ID' });
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