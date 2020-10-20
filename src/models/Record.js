const mongoose = require('mongoose');

// Schema
const RecordSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    room: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
    },
    resource: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Resource',
    },
    tIni: String,
    tFin: String,
    comment: String,
},{
    timestamps: true,
});

// Mongoose model
const RecordModel = mongoose.model('Record', RecordSchema);
module.exports = { RecordModel, RecordSchema };