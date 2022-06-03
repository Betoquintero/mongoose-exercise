const mongoose = require('mongoose');
const Schema  = mongoose.Schema;

const userSchema = new Schema({
  name: {
      type: String,
      required: true,
  },
  email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
  },
  age: {
      type: Number,
  },
  programmingLevel: {
      type: String,
      enum: ['beginner', 'intermediate', 'advanced'],
  },
  registerDate: {
      type: Date,
      defaulted: Date.now(),
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;