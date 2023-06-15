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


// * Show route
router.get('/:id', (req, res) => {
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    Post.findById(req.params.id)
      .then(post => {
        if (post) {
          res.json(post);
        } else {
          res.status(404).json({ error: 'Post not found' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).json({ error: 'Internal Server Error' });
      });
  } else {
    res.status(400).json({ error: 'Invalid post ID' });
  }
});

// TODO // * Create Route
// router.post('/', (req, res) => {
//   const postData = req.body;

//   Post.create(postData)
//     .then(newPost => {
//       res.status(201).json(newPost);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).json({ error: 'Could not create New Data' });
//     });
// });

// // New Page
// router.get('/', (req, res) => {
//   res.render('posts/new');
// });

  
// * Update route
router.put('/:id', (req, res) => {
      Post.findByIdAndUpdate(req.params.id, req.body)
        .then(() => {
            res.redirect(`/posts/${req.params.id}`)
        })
        .catch(err => {
            console.log('err', err)
            res.status(500).send({error: 'Update Route'});
      })
    })

// // * EDIT button
// router.get('/:id/edit', (req, res) => {
//     Post.findById(req.params.id)
//     .then(post => {
//         res.render('posts/edit', { post })
//     })
//     .catch(err => {
//       res.status(500).send({error: 'Edit Route'});
//     })
// })
  
// Delete route
router.delete('/:id', (req, res) => {
  Post.findByIdAndDelete(req.params.id)
    .then((deletePost) => {
      res.status(303).redirect('/posts');
    })
    .catch(err => {
      console.log('err', err);
      res.status(500).json({ error: 'Delete route failed' });
    });
});
  

module.exports = router;
