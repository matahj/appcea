const mongoose = require('mongoose');

// Schema
const GroupSchema = new mongoose.Schema({
    code: String,
    language: String,
    semester: String,
    teachers: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }],
},{
    timestamps: true,
});

// Mongoose model
const GroupModel = mongoose.model('Group', GroupSchema);

module.exports = { GroupModel, GroupSchema };
