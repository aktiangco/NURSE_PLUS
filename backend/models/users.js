//  Todo:

// Creating a mongoose Shell
// require mongoose 
const mongoose = require('mongoose')
// creating shorthand for the Schema constructor 
const { Schema } = mongoose 

// creating a shell
const userSchema = new Schema({
    // specify data {type:   } 
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
  
const User = mongoose.model('User', userSchema);

module.exports = User;