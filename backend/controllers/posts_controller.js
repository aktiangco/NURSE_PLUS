const express = require('express');
const { db } = require('../models/posts');
const router = express.Router();
const Post = require('../models/posts');

// // Index route
// router.get('/', (req, res) => {
//   console.log('posts index');
//   Post.find()
//   .then((posts) => {
//       res.json(posts);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).send('Internal Server Error');
//     });
// });

// Index route
router.get('/', (req, res) => {
  console.log('posts index');
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

// // * Create route
// posts.post('/', (req, res) => {
//     const newPost = req.body;
//     Post.create(newPost)
//     .then(createdPost => {
//         res.redirect(`/posts/${createdPost._id}`);
//     })
//     .catch(err => {
//         console.log(err);
//         res.status(500).send('Internal Server Error');
//     });
// });

// // * New Page
// posts.get('/new', (req, res) => {
//     res.render('posts/new')
// })

// // * Show route
// posts.get('/:id', (req, res) => {
//     Post.findById({_id: req.params.id})
//     // .populate('reservation') // Todo: populate reservation
//     .then(post => {
//       res.render('posts/show', {post})
//     })
//       .catch(err => {
//         console.log('err', err)
//             res.render('error')
//       });
// });
  
// // * Update route
// posts.put('/:id', (req, res) => {
//       Post.findByIdAndUpdate(req.params.id, req.body)
//         .then(() => {
//             res.redirect(`/posts/${req.params.id}`)
//         })
//         .catch(err => {
//             console.log('err', err)
//             res.render('error')
//       })
//     })

// // * EDIT button
// posts.get('/:id/edit', (req, res) => {
//     Post.findById(req.params.id)
//     .then(post => {
//         res.render('posts/edit', { post })
//     })
//     .catch(err => {
//         res.render('error')
//     })
// })
  
// // * DELETE button
// posts.delete('/:id', (req, res) => {
//     Post.findByIdAndDelete(req.params.id)
//       .then(() => {
//           res.redirect('/posts')
//       })
//       .catch(err => {
//           console.log('err', err)
//           res.render('error')
//       }) 
//   })
  
module.exports = router;
