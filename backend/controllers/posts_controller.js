// posts_controller.js

const express = require('express');
const router = express.Router();
const Post = require('../models/posts');
const mongoose = require('mongoose');

// Index route
router.get('/', (req, res) => {
  Post.find()
    .sort({ date: 1 })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json('Internal Server Error');
    });
});

// Show route
router.get('/:id', (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    Post.findById(req.params.id)
      .then((post) => {
        if (post) {
          res.json(post);
        } else {
          res.status(404).json({ error: 'Post not found' });
        }
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else {
    res.status(400).json({ error: 'Invalid post ID' });
  }
});

// Create Route
router.post('/new', async (req, res) => {
  const { title, instructor, description, length, skillsTesting, price, certification, date } = req.body;

  if (!title || !instructor || !description || !length || !skillsTesting || !price || !certification || !date) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    const newPost = new Post({
      title,
      instructor,
      description,
      length,
      skillsTesting,
      price,
      certification,
      date,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Cannot create post' });
  }
});

// Update route
router.put('/:id', (req, res) => {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      return Post.findById(req.params.id);
    })
    .then((updatedPost) => {
      res.json(updatedPost);
    })
    .catch((err) => {
      console.log('err', err);
      res.status(500).json({ error: 'Update route failed' });
    });
});

// Delete route
router.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((deletedPost) => {
      res.status(303).redirect('/posts');
    })
    .catch((err) => {
      console.log('err', err);
      res.status(500).json({ error: 'Delete route failed' });
    });
});

module.exports = router;
