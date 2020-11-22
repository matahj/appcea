const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  code: Number,
  name: String,
  description: String,
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  },
},{
    timestamps: true,
});

const ResourceModel = mongoose.model('Resource', ResourceSchema);

module.exports = { ResourceModel, ResourceSchema };