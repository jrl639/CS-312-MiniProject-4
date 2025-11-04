// Example if you use MongoDB with Mongoose
const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  author: String,
  title: String,
  content: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Post', postSchema);
