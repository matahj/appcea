const mongoose = require('mongose');

// Schema
const ActivitySchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    tIni: timestamps,
    tFin: timestamps,
},{
    timestamps: true,
});

// Mongoose model
const ActivityModel = mongoose.model('Activity', ActivitySchema);
module.exports = { ActivityModel, ActivitySchema };