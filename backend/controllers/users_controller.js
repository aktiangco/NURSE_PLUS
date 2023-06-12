//  Todo:
const express = require('express')
const user = express.Router()
const User = require('../models/users')


//* INDEX
user.get('/',  async (req, res) => {
    const users = await User.find().populate('posts').exec()

    res.send(users)

})

//* New User


//* Edit User


// * Show User