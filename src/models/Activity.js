const mongoose = require('mongoose');

// Schema
const ActivitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    tIni: String,
    tFin: String,
},{
    timestamps: true,
});

// Mongoose model
const ActivityModel = mongoose.model('Activity', ActivitySchema);
module.exports = { ActivityModel, ActivitySchema };