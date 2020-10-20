const mongoose = require('mongoose');

const ResourceSchema = new mongoose.Schema({
  room: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Room',
  },
  description: String
},{
    timestamps: true,
});

const ResourceModel = mongoose.model('Resource', ResourceSchema);
module.exports = { ResourceModel, ResourceSchema };