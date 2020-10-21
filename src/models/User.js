const mongoose = require('mongoose');

//Schema
const UserSchema = new mongoose.Schema({
  account: String,
  name: String,
  email: String,
  role: String,
  password: String,
  group: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Group',
  }
},{
  timestamps: true,
});

//Mongoose model
const UserModel = mongoose.model('User', UserSchema);
module.exports = { UserModel, UserSchema };