const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: { type: String },
    email: { type: String, required: true, unique: true },
    password: { type: String },
    role: { type: String, enum: ['Admin', 'Student'], default: 'Student' }
});

const userModel = mongoose.model('User', userSchema)

module.exports = userModel;