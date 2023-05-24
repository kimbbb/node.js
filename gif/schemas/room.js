const mongoose = require('mongoose');

const { Schema } = mongoose;

const memberSchema = new Schema({
    user: {
        type: String,
        required: true,
    },
    socketId: {
        type: String,
        required: true,
    },
});

const roomSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    max: {
        type: Number,
        required: true,
        default: 10,
        min: 2,
    },
    owner: {
        type: String,
        required: true,
    },
    members: {
        type: [memberSchema],
    },
    password: String,
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Room', roomSchema);