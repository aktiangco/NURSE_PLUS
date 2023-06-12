//  Todo:
// Creating a mongoose Shell
// require mongoose 
const mongoose = require('mongoose');
// creating shorthand for the Schema constructor 
const { Schema } = mongoose;

// creating a shell
const lessonSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  instructor: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  length: {
    type: String,
    required: true
  },
  skills_testing: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  certification: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  }
});

const Post = mongoose.model('post', postSchema);

module.exports = Post;