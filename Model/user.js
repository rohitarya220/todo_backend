const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: 'string', required: true, unique: true},
    email: {type: 'string', required: true, unique: true},
    password: {type: 'string', required: true},
    role: {type: 'string', enum: ['Admin', 'Student'], default: 'Student'}
});

const userModel = mongoose.model('User', userSchema)

module.exports = userModel;