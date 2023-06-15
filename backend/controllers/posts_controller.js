const express = require('express');
const { db } = require('../models/posts');
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
      res.status(500).send('Internal Server Error');
    });
});


// * Show route
router.get('/:id', (req, res) => {
  console.log(req.params)
  if (mongoose.Types.ObjectId.isValid(req.params.id)) {
    Post.findById(req.params.id)
      .then(post => {
        console.log(post)
        if (post) {
          res.json(post);
        } else {
          res.status(404).json({ error: 'Post not found' });
        }
      })
      .catch(err => {
        console.log(err);
        res.status(500).send({ error: 'Internal Server Error' });
      });
  } else {
    res.status(400).json({ error: 'Invalid post ID' });
  }
});


// // * Create route
// router.post('/posts', (req, res) => {
//   const newPost = req.body;
//   Post.create(newPost)
//     .then(createdPost => {
//       res.redirect(`/posts/${createdPost._id}`);
//     })
//     .catch(err => {
//       console.log(err);
//       res.status(500).send('cannot create route / POST');
//     });
// });

// // New Page
// router.get('/', (req, res) => {
//   res.render('posts/new');
// });

  
// // * Update route
// router.put('/:id', (req, res) => {
//       Post.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => {
//             res.redirect(`/posts/${req.params.id}`)
//         })
//         .catch(err => {
//             console.log('err', err)
//             res.status(500).send({error: 'Update Route'});
//       })
//     })

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
  
// // * DELETE button
// router.delete('/:id', (req, res) => {
//     Post.findByIdAndDelete(req.params.id)
//       .then(() => {
//           res.redirect('/posts')
//       })
//       .catch(err => {
//           console.log('err', err)
//           res.status(500).send({error: 'Delete Route'});
//       }) 
//   })
  
module.exports = router;
