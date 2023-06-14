const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // Remove the useFindAndModify and useCreateIndex options
    });
    console.log('MongoDB connected.');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1);
  }
};

module.exports = {
  connect,
};