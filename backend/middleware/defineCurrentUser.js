const User = require('../models/users');

async function defineCurrentUser(req, res, next) {
  try {
    const user = await User.findOne({ _id: req.session.userId });

    if (user) {
      req.currentUser = user;
    }
    next();
  } catch (error) {
    next(error);
  }
}

module.exports = defineCurrentUser;
