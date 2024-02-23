const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define the Session schema
const sessionSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    token: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '24h' // Automatically expire documents after 24 hours
    }
});

// Create a model using the schema
const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;
