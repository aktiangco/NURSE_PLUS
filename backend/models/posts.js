const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  instructor: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  length: {
    type: String,
    required: true,
  },
  skillsTesting: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  certification: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Post', postSchema);
