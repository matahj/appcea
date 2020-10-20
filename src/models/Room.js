const mongoose = require('mongoose');

//Schema
const RoomSchema = new mongoose.Schema({
  code: String,
  name: String,
  description: String,
},{
  timestamps: true,
});

//Mongoose model
const RoomModel = mongoose.model('Room', RoomSchema);
module.exports = { RoomModel, RoomSchema };